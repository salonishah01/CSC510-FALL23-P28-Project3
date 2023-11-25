const IFRAME_ID = 'sb-extension-frame'

const getIframeUrl = (brand, country) => {
  if (!brand) return `index.html?inactive=true&country=${country}`

  const offerData = JSON.stringify(brand.offerData)

  return `index.html?slug=${brand.slug}&title=${encodeURIComponent(
    brand.brand
  )}&domain=${brand.domains}&country=${country}&offerData=${encodeURIComponent(
    offerData
  )}&logo=${brand.logo}`
}

const createContainer = () => {
  if (getContainer()) return getContainer()

  const container = document.createElement('iframe')
  container.style = `
    width: 330px;
    height: 255px;
    position: fixed;
    top: 20px;
    right: 20px;
    overflow: hidden;
    z-index: ${Number.MAX_SAFE_INTEGER} !important;
    display: block !important;
  `
  container.setAttribute('frameBorder', '0')
  container.setAttribute('id', IFRAME_ID)

  return container
}

const getContainer = () => document.getElementById(IFRAME_ID)

const insertContainer = (container) => {
  if (getContainer()) return null

  document.getElementsByTagName('html')[0].append(container)
}

const updateContainerUrl = (container, brand, country) => {
  const iframeUrl = getIframeUrl(brand, country)
  container.src = chrome.runtime.getURL(iframeUrl)
}

const renderContainer = (brand, country, shouldOpen = true) => {
  const container = createContainer(brand, country)
  updateContainerUrl(container, brand, country)

  if (shouldOpen) {
    insertContainer(container)
  }

  setTimeout(() => {
    repositionHoney()
  }, 2000)
}

const repositionHoney = () => {
  const honeyContainer = document.getElementById('honeyContainer')
  if (honeyContainer) {
    honeyContainer.style = `
      all: unset;
      position: fixed;
      z-index: ${Number.MAX_SAFE_INTEGER - 1};
    `
  }
}

const closeFrame = async ({ domain }) => {
  await setBrandAsDismissed(domain)
  const container = getContainer()
  container.parentNode.removeChild(container)
}

const setBrandAsDismissed = async (domain) => {
  const { brands } = await chrome.storage.local.get('brands')

  const updatedBrands = brands.map((brand) => {
    if (domain === brand.domains) {
      return { ...brand, dismissed: true }
    }
    return brand
  })

  return await chrome.storage.local.set({ brands: updatedBrands })
}

const openFrame = async ({ brand, country }) => {
  return renderContainer(brand, country)
}

const getUpdateIconMessageType = (brand) => {
  if (brand) return 'enableIcon'

  return 'disableIcon'
}

const updateIcon = (brand) => {
  const messageType = getUpdateIconMessageType(brand)
  chrome.runtime.sendMessage({
    type: messageType,
    target: 'background',
    data: {
      brand
    }
  })
}

const hasNativeDiscount = (brand) =>
  brand.offerData.offerCounts.NATIVE_STUDENT_DISCOUNT > 0

const shouldAutomaticallyOpenFrame = (brand) => {
  return !!brand && !brand.dismissed && hasNativeDiscount(brand)
}

const updateFrame = ({ brand, country }) => {
  const shouldOpenFrame = shouldAutomaticallyOpenFrame(brand)

  updateIcon(brand)
  renderContainer(brand, country, shouldOpenFrame)

  return true
}

const handleMessages = async (message) => {
  if (message.target !== 'content') return false

  if (message.type === 'closeFrame') return await closeFrame(message.data)

  if (message.type === 'openFrame' && !getContainer())
    return await openFrame(message.data)

  if (message.type === 'updateFrame') return updateFrame(message.data)
}

const contentLoaded = () => {
  chrome.runtime.sendMessage({ type: 'contentLoaded', target: 'background' })
}

try {
  contentLoaded()
  chrome.runtime.onMessage.addListener(handleMessages)
} catch (error) {
  console.error(error)
}
