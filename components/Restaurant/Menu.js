import '../../styles/Restaurant/menu.scss'

const Menu = () => {
  const testData = [
    {
      restaurant_name: '본관',
      food_name: `잡곡밥(쌀:국내산)
      사골떡국
      (우사골:호주산) 치킨너겟*머스타드
      (계육:국내산)
      오이지무침
      김치 (배추/고춧가루:중국산)
      우유 또는두유
      736kcal/28g
      `,
      date: '2020-09-27',
      day: '일',
      time: 1,
    },
    {
      restaurant_name: '본관',
      food_name: `잡곡밥 (쌀:국내산)
      시래기국
      제육고추장불고기
      (돈육:국내산)
      숙주맛살무침
      깍두기
      821kcal/29g
      `,
      date: '2020-09-27',
      day: '일',
      time: 2,
    },
    {
      restaurant_name: '본관',
      food_name: `잡곡밥(쌀:국내산)
      만두계란국
      오징어야채볶음*소면사리
      (오징어:페루산)
      콩나물무침
      김치 (배추/고춧가루:중국산)
      석류차
      857kcal/28g
      `,
      date: '2020-09-27',
      day: '일',
      time: 3,
    },
  ]
  const timeList = ['아침', '점심', '저녁']
  return (
    <div className="restaurant-menu">
      {testData.map((d) => {
        return (
          <div className="restaurant-time">
            {timeList[d.time - 1]}
            <div className="restaurant-text">
              <div className="content">{d.food_name}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Menu
