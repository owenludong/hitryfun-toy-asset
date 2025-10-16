function getCookie (cName) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + '=')
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1
      let cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) cEnd = document.cookie.length
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}

function setCookie (cName, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = cName + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}

function checkCookie () {
  let user = getCookie('user')
  if (user !== null && user !== '') {
    return user
  } else {
    user = prompt('Please enter your name:', '')
    if (user !== null && user !== '') {
      setCookie('user', user, 365)
    }
  }
}
let cookieApi = { getCookie, setCookie, checkCookie }
export default cookieApi
