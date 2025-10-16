<template>
  <div>
    <my-header></my-header>
    <div id="shippingPage">
      <div class="mobile-cart-shipping-page ui-page-theme-a">
        <!-- <div id="ship-to-container">
          <div class="ship-to-text">Ship To:</div>
          <div class="cancel-link">Cancel</div>
        </div> -->
        <div class="address-form">
          <label id="required-text">* Indicates a field is required</label>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="full-name" placeholder="First Name*" type="text" v-model.trim="address.firstName"/>
            </div>
          </div>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="full-name" placeholder="Last Name*" type="text" v-model.trim="address.lastName"/>
            </div>
          </div>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="street-address1" placeholder="Street Address*" type="text" v-model.trim="address.address"/>
            </div>
          </div>
          <!-- <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input" name="street-address2" placeholder="Apt/Suite/Unit (Optional)" type="text" value=""/>
            </div>
          </div> -->

          <table class="table-form-row">
            <tbody>
              <tr>
                <td class="half-width-input left-cell">
                  <div class="ui-select">
                    <div class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow" id="select-67-button">
                      <span class="required-input country-select" id="countrySelect">{{address.country}}</span>
                      <select class="required-input country-select" name="country" v-model="address.country">
                        <option value="">Country</option>
                        <option value="AL">Albania</option>
                        <option value="AR">Argentina</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="BB">Barbados</option>
                        <option value="BE">Belgium</option>
                        <option value="BM">Bermuda</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BR">Brazil</option>
                        <option value="BG">Bulgaria</option>
                        <option value="CA">Canada</option>
                        <option value="CL">Chile</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="EE">Estonia</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JO">Jordan</option>
                        <option value="KW">Kuwait</option>
                        <option value="LV">Latvia</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MK">Macedonia</option>
                        <option value="MY">Malaysia</option>
                        <option value="MX">Mexico</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NO">Norway</option>
                        <option value="PK">Pakistan</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="RS">Serbia</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ZA">South Africa</option>
                        <option value="KR">South Korea</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="TW">Taiwan</option>
                        <option value="TH">Thailand</option>
                        <option value="TR">Turkey</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom (Great Britain)</option>
                        <option value="US">United States</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                      </select>
                    </div>
                  </div>
                </td>
                <td class="half-width-input right-cell">
                  <!-- <div class="ui-select" style="display: none;">
                    <div class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow" id="select-68-button">
                      <span class="required-input state-select">
                        State/Province
                      </span>
                      <select class="required-input state-select" name="state">
                        <option value="">State/Province</option>
                      </select>
                    </div>
                  </div> -->
                  <!-- placeholder="State (Optional)" -->
                  <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input class="state-input" name="state" placeholder="State*" type="text" v-model.trim="address.state"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="city" placeholder="City*" type="text" v-model.trim="address.city"/>
            </div>
          </div>
          <table class="table-form-row">
            <tbody>
              <tr>
                <td class="half-width-input left-cell">
                  <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input class="required-input half-width-input" id="zipcode" name="zipcode" placeholder="Zip/Postal Code*" type="text" v-model.trim="address.zip"/>
                  </div>
                </td>
                <td class="half-width-input right-cell">
                  <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input class="required-input half-width-input raw_phone_number" name="raw-phone-number" placeholder="Phone*" type="tel" v-model.trim="address.telephone"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="cart-footer defaulthide ui-footer ui-footer-fixed slideup ui-bar-inherit">
            <div class="checkout-button-container">
              <div class="orange-button checkout-button touchable done-btn" @click="submitAddress">
                Done
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../assets/css/shipping';
  .ui-icon-carat-d:after {
      background-image: url(../assets/images/carat-d-white.png?v=13);
      right: .5625em;
      top: 50%;
      margin-top: -11px;
      content: "";
      position: absolute;
      display: block;
      width: 22px;
      height: 22px;
      background-color: rgba(0,0,0,0.3);
      background-position: center center;
      background-repeat: no-repeat;
      // -webkit-border-radius: 1em;
      // border-radius: 1em;
  }
</style>

<script>
import MyHeader from '../components/headerCart'
import Validator from '../_common/js/validate.js'
import qs from 'qs'

export default {

  name: 'shipping',
  components: { MyHeader },
  data () {
    return {
      address: {
        firstName: '',
        lastName: '',
        address: '',
        // unit: '',
        country: '',
        state: '',
        city: '',
        zip: '',
        telephone: '',
      }
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      // this.$messagebox({
      //   title: 'Are you sure?',
      //   message: 'Do you want to cancel entering your shipping info?',
      //   confirmButtonText: 'YES',
      //   showCancelButton: true,
      //   cancelButtonText: 'NO'
      // })
      this.$axios(this.ApiList.shippingAddress)
        .then((response) => {
          let address = response.data.address
          if (address.firstName) {
            // this.address.firstName.value = address.firstName
            // this.address.lastName.value = address.lastName
            // this.address.address1.value = address.address
            // this.address.country.value = address.country
            // this.address.city.value = address.city
            // this.address.state.value = address.stateProvince
            // this.address.zip.value = address.postalCode
            // this.address.telephone.value = address.phone
            this.address.firstName = address.firstName
            this.address.lastName = address.lastName
            this.address.address = address.address
            this.address.country = address.country
            this.address.city = address.city
            this.address.state = address.stateProvince
            this.address.zip = address.postalCode
            this.address.telephone = address.phone
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    submitAddress () { // 提交地址
      // 验证为空
      if (this.address.firstName === '' || this.address.lastName === '' || this.address.telephone === '' || this.address.address === '' || this.address.city === '' || this.address.zip === '' || this.address.state === '' || this.address.country === '') {
        this.$messagebox({
          title: 'Oops!',
          message: 'Please provide information in all required fields',
          confirmButtonText: 'ok',
          confirmButtonHighlight: true
        })
        return
      }
      // 验证邮编
      let zipResult = Validator.zip(this.address.zip)
      if (!zipResult.status) {
        this.$messagebox({
          title: 'Oops!',
          message: zipResult.errorText,
          confirmButtonText: 'ok',
          confirmButtonHighlight: true
        });
        return false
      }
      let data = {
        firstName: this.address.firstName,
        lastName: this.address.lastName,
        phone: this.address.telephone,
        address: this.address.address,
        city: this.address.city,
        postalCode: this.address.zip,
        stateProvince: this.address.state,
        country: this.address.country
      }
      this.$axios.post(this.ApiList.UpdateshippingAddress, qs.stringify(data))
        .then((response) => {
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
      this.$router.push({path: '/cart'})
    },
  },
  watch: {
    '$route' (to, from) {
      console.log('adsf')
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log('haha')
    if (this.address.firstName === '' || this.address.lastName === '' || this.address.telephone === '' || this.address.address === '' || this.address.city === '' || this.address.zip === '' || this.address.state === '' || this.address.country === '') {
      next(false)
      console.log('hahas')
      this.$messagebox({
        title: 'Are you sure?',
        message: 'Do you want to cancel entering your shipping info?',
        confirmButtonText: 'YES',
        showCancelButton: true,
        cancelButtonText: 'NO'
      }).then((action) => {
        if(action === 'confirm') {
          next()
        } else {
          next(false)
        }
      })
    } else {
      next()
    }
  }
}
</script>

