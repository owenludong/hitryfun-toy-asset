let orderDate = (val) => {
  if (!val) {
    return val
  }
  let year = val.split('-')[0]
  let month = Number(val.split('-')[1])
  console.log(month)
  // 去掉 09前面的0 或者直接转成number
  let day = val.split('-')[2]
  let monthsInEng = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  // return monthsInEng[month] + '' + day + ',' + year
  return `${monthsInEng[month]} ${day}, ${year}`
}
export { orderDate }
