import division from './division'

function getWeeks(year, month) {
  const allWeeks = []

  let bfrMonthLastDate = new Date(year, month - 1, 0)
  let nowMonthFirstDate = new Date(year, month - 1, 1)
  const nowMonthLastDate = new Date(year, month, 0)
  let aftMonthFirstDate = new Date(year, month, 1)

  // 전달 마지막주
  while (bfrMonthLastDate.getDay() !== 6) {
    allWeeks.push(
      new Date(
        bfrMonthLastDate.getFullYear(),
        bfrMonthLastDate.getMonth(),
        bfrMonthLastDate.getDate()
      )
    )
    bfrMonthLastDate = new Date(
      bfrMonthLastDate.getFullYear(),
      bfrMonthLastDate.getMonth(),
      bfrMonthLastDate.getDate() - 1
    )
  }
  allWeeks.reverse()

  // 이번달 주
  while (nowMonthFirstDate.getTime() !== nowMonthLastDate.getTime()) {
    allWeeks.push(
      new Date(
        nowMonthFirstDate.getFullYear(),
        nowMonthFirstDate.getMonth(),
        nowMonthFirstDate.getDate()
      )
    )
    nowMonthFirstDate = new Date(
      nowMonthFirstDate.getFullYear(),
      nowMonthFirstDate.getMonth(),
      nowMonthFirstDate.getDate() + 1
    )
  }
  allWeeks.push(
    new Date(
      nowMonthFirstDate.getFullYear(),
      nowMonthFirstDate.getMonth(),
      nowMonthFirstDate.getDate()
    )
  )

  // 다음달 첫주
  while (aftMonthFirstDate.getDay()) {
    allWeeks.push(
      new Date(
        aftMonthFirstDate.getFullYear(),
        aftMonthFirstDate.getMonth(),
        aftMonthFirstDate.getDate()
      )
    )
    aftMonthFirstDate = new Date(
      aftMonthFirstDate.getFullYear(),
      aftMonthFirstDate.getMonth(),
      aftMonthFirstDate.getDate() + 1
    )
  }

  return division(allWeeks, 7)
}

export default getWeeks
