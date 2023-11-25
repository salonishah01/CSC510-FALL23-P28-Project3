const handleInstall = async (details) => {
  await chrome.storage.local.clear()
  if (details.reason === 'install') await track('install')
}

const handleMessages = async (message) => {
  if (message.target !== 'background') return false

  if (message.type === 'contentLoaded') return await handleContentLoaded()

  if (message.type === 'enableIcon') return await enableIcon(message.data)

  if (message.type === 'disableIcon') return await disableIcon()

  if (message.type === 'trackPrompt') return await track('prompt', message)

  if (message.type === 'changeCountry') return await changeCountry(message.data)
}

const handleContentLoaded = async () => {
  const tab = await getActiveTab()
  return await updateFrame(tab)
}

const changeCountry = async ({ country }) => {
  await chrome.storage.local.set({ country })
  await fetchBrands()

  return chrome.tabs.query({}, (tabs) => {
    tabs.forEach(async (tab) => await updateFrame(tab))
  })
}

const updateFrame = async (tab) => {
  const brand = await getBrand(tab.url)
  const country = await getCountry()

  const message = {
    target: 'content',
    type: 'updateFrame',
    data: {
      brand,
      country
    }
  }

  return await chrome.tabs.sendMessage(tab.id, message)
}

const LOCALE_TO_COUNTRY_MAP = {
  da: 'dk',
  de: 'de',
  en: 'uk',
  'en-GB': 'uk',
  'en-US': 'us',
  'es-ES': 'es',
  fr: 'fr',
  it: 'it',
  nl: 'nl',
  pl: 'pl',
  sv: 'se',
  'zh-CN': 'cn'
}

const guessCountryDefault = () => {
  const uiLanguage = chrome.i18n.getUILanguage()
  return LOCALE_TO_COUNTRY_MAP[uiLanguage] || 'uk'
}

const getCountry = async () => {
  const { country } = await chrome.storage.local.get('country')
  return country || guessCountryDefault()
}

const handleOnActivated = async () => {
  const tab = await getActiveTab()
  const brand = await getBrand(tab.url)

  if (brand) return await enableIcon({ brand })

  return await disableIcon()
}

const setIcon = async (icon) => await chrome.action.setIcon({ path: icon })

export const getTotalOffers = ({ offerCounts }) => {
  let totalOffers = 0
  Object.keys(offerCounts).forEach((key) => {
    totalOffers += offerCounts[key]
  })
  return totalOffers
}

const getIconCounter = (brand) => {
  let totalOffers = getTotalOffers(brand.offerData)
  if (totalOffers > 9) totalOffers = '9+'
  return totalOffers.toString()
}

const enableIcon = async ({ brand }) => {
  await setIcon('icons/active32.png')

  const text = getIconCounter(brand)
  chrome.action.setBadgeText({ text })
}

const disableIcon = async () => {
  await setIcon('icons/disabled32.png')
  chrome.action.setBadgeText({ text: '' })
}

const getActiveTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  return tab
}

const hasOffscreenDocument = async () => {
  const offscreenUrl = chrome.runtime.getURL('offscreen.html')
  const matchedClients = await clients.matchAll()
  for (const client of matchedClients) {
    if (client.url === offscreenUrl) {
      return true
    }
  }

  return false
}

const createOffscreenDocument = async () => {
  await chrome.offscreen.createDocument({
    url: chrome.runtime.getURL('offscreen.html'),
    reasons: ['IFRAME_SCRIPTING'],
    justification:
      'We track usage to figure out how we can improve our products'
  })
}

const isDevBuild = async () => {
  const self = await chrome.management.getSelf()
  return self.installType === 'development'
}

const track = async (type, data) => {
  const hasDocument = await hasOffscreenDocument()

  if (!hasDocument) await createOffscreenDocument()

  const isDev = await isDevBuild()

  chrome.runtime.sendMessage({
    type,
    target: 'offscreen',
    data: {
      ...data,
      isDev
    }
  })
}

const handleOnClicked = async (tab) => {
  const country = await getCountry()
  const brand = await getBrand(tab.url)
  await chrome.tabs.sendMessage(tab.id, {
    type: 'openFrame',
    target: 'content',
    data: { brand, country }
  })
}

const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const doesBrandMatch = (url, brand) => {
  const escapedBrandDomain = escapeRegExp(brand.domains)

  const searchExpression = new RegExp(`([/]|[.])${escapedBrandDomain}`, 'g')

  return url.search(searchExpression) !== -1
}

const refreshCachedBrands = async () => {
  const { lastUpdated } = await chrome.storage.local.get('lastUpdated')

  if (!lastUpdated) return await fetchBrands()

  const hour = 1000 * 60 * 60
  const day = hour * 24
  const is24HoursStale = Date.now() - day > lastUpdated

  if (is24HoursStale) return await fetchBrands()
}

const getBrand = async (url) => {
  await refreshCachedBrands()

  const { brands } = await chrome.storage.local.get('brands')
  return brands.find((brand) => doesBrandMatch(url, brand))
}

const fetchBrands = async () => {
  const country = await getCountry()

  const response = await fetch(
    `https://cdn.studentbeans.com/offers/browser-extensions/brands/${country}.json`
  )
  const brands = await response.json()
  const lastUpdated = Date.now()

  return await chrome.storage.local.set({ brands, lastUpdated })
}

try {
  // eslint-disable-next-line @thebeansgroup/sb/no-hex-literals
  chrome.action.setBadgeBackgroundColor({ color: '#E4FF38' })

  chrome.runtime.onInstalled.addListener(handleInstall)
  chrome.runtime.onMessage.addListener(handleMessages)
  chrome.tabs.onActivated.addListener(handleOnActivated)
  chrome.action.onClicked.addListener(handleOnClicked)
} catch (error) {
  console.error(error)
}
