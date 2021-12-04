export const getLocalStorageKey = (date, position) => {
  const { latitude, longitude } = position
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}/${latitude.toFixed(2)}:${longitude.toFixed(2)}`
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
  return JSON.parse(localStorage.getItem(getLocalStorageKey(date, position)))
}
