const twoDigit = (num) => {
  return num < 10 ? `0${num}` : num
}

const dateFormat = (date) => {
  const d = new Date(date)
  return `${d.getFullYear()}-${twoDigit(d.getMonth() + 1)}-${twoDigit(
    d.getDate()
  )}`
}

export default dateFormat
