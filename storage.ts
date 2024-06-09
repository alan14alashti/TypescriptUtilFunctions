export const setStorage = function (name: string, data: any) {
  localStorage.setItem(name, JSON.stringify(data))
}

export const delStorage = function (name: string) {
  localStorage.removeItem(name)
}
export const getStorage = function (name: string) {
  const data = localStorage.getItem(name)
  try {
    if (data && data != undefined) {
      return JSON.parse(data)
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}