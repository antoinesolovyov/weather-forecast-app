const formatDate = (date) => {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}

const formatPosition = (position) => {
  const { latitude, longitude } = position
  return `${latitude.toFixed(2)}:${longitude.toFixed(2)}`
}

const getLocalStorageKey = (date, position) => {
  return `${formatDate(date)}/${formatPosition(position)}`
}

export const isLocalStorageHasKey = (date, position) => {
  return !!localStorage.getItem(getLocalStorageKey(date, position))
}

export const setLocaleStorageItem = (date, position, item) => {
  localStorage.setItem(
    getLocalStorageKey(date, position),
    JSON.stringify(item)
  )
}

export const getLocaleStorageItem = (date, position) => {
  const item = localStorage.getItem(getLocalStorageKey(date, position))
  return JSON.parse(item)
}
