let snowplow

const setup = (isDev = false) => {
  if (isSnowplowSetup()) return null

  addSnowplow()

  snowplow = window.snowplow

  const endpoint = isDev ? 'staging.t.studentbeans.com' : 't.studentbeans.com'

  snowplow('newTracker', 'co', endpoint, {
    platform: 'web',
    post: true,
    appId: 'browserextension',
    cookieDomain: '.studentbeans.com',
    forceSecureTracker: true,
    contexts: {
      webPage: false,
      performanceTiming: false
    }
  })

  snowplow('setUserId', null)
  snowplow('enableActivityTracking', 30, 10)
  snowplow('enableLinkClickTracking')
}

const isSnowplowSetup = () => {
  return !!window.snowplow
}

const addSnowplow = () => {
  ;(function (p, l, o, w, i, n, g) {
    if (!p[i]) {
      p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || []
      p.GlobalSnowplowNamespace.push(i)
      p[i] = function () {
        ;(p[i].q = p[i].q || []).push(arguments)
      }
      p[i].q = p[i].q || []
      n = l.createElement(o)
      g = l.getElementsByTagName(o)[0]
      n.async = 1
      n.src = w
      g.parentNode.insertBefore(n, g)
    }
  })(window, document, 'script', 'sp.js', 'snowplow')
}

const unstructured = (schema, data, contexts) => {
  snowplow('trackUnstructEvent', { schema, data }, contexts)
}

const handleMessages = (message) => {
  if (message.target !== 'offscreen') return false

  setup(message.data.isDev)

  if (message.type === 'install') return trackInstall()

  if (message.type === 'prompt') return trackPrompt(message.data)
}

const trackInstall = () => {
  unstructured(
    'iglu:com.studentbeans/browser_extension_event/jsonschema/1-0-0',
    {
      action: 'install',
      browser: 'chrome'
    },
    ''
  )
}

const trackPrompt = (data) => {
  unstructured(
    'iglu:com.studentbeans/browser_extension_event/jsonschema/1-0-0',
    {
      action: 'prompt',
      browser: 'chrome'
    },
    {
      schema: 'iglu:com.studentbeans/browser_extension_prompt/jsonschema/1-0-0',
      data: {
        brand: data.brand,
        domain: data.domain,
        redirectUrl: data.redirectUrl
      }
    }
  )
}

try {
  chrome.runtime.onMessage.addListener(handleMessages)
} catch (error) {
  console.error(error)
}
