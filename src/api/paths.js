export const getIconPath = (day) => `./condition-icons/${day?.main.toLowerCase()}.svg`
export const getImagePath = (today) => `./condition-images/${today?.weather[0]?.main.toLowerCase()}.jpg`
