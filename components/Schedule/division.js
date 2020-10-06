function division(arr, n) {
  const len = arr.length
  const cnt = Math.floor(len / n)
  const result = []

  for (let i = 0; i <= cnt; i += 1) {
    result.push(arr.splice(0, n))
  }

  return result
}

export default division
