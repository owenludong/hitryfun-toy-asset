let validator = {
  email: (value) => {
    // if (value === '') {
    //   return {
    //     status: false,
    //     errorText: 'Email field is required'
    //   }
    // }
    // let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
    let reg = /@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/
    if (!reg.test(value)) {
      return {
        status: false,
        errorText: 'Invalid e-mail address.'
      }
    }
    return {
      status: true
    }
  },
  zip: (value) => {
    if (value.length > 9) {
      return {
        status: false,
        errorText: 'Oops，zip/postal code is invalid.'
      }
    }
    let reg = /^[a-zA-Z0-9]([a-zA-Z0-9]|-|\s)+$/
    if (!reg.test(value)) {
      return {
        status: false,
        errorText: 'Oops，zip/postal code is invalid.'
      }
    }
    return {
      status: true
    }
  }
}
export default validator
