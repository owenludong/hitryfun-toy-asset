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
          <label id="required-text">{{ $t('signinReq') }}</label>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="full-name" :placeholder="$t('firstName')" type="text" v-model.trim="address.firstName"/>
            </div>
          </div>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="full-name" :placeholder="$t('lastName')" type="text" v-model.trim="address.lastName"/>
            </div>
          </div>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="street-address1" :placeholder="$t('streetaddress')" type="text" v-model.trim="address.address"/>
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
                      <span class="required-input country-select" id="countrySelect">{{ countryName }}</span>
                      <select class="required-input country-select" name="country" v-model="address.country">
                           <option v-for="c in countries" :key="c.code" :value="c.code">{{ c.name }}</option>
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
                    <input class="state-input" name="state" :placeholder="$t('state')" type="text" v-model.trim="address.state"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="city" :placeholder="$t('city')" type="text" v-model.trim="address.city"/>
            </div>
          </div>
          <table class="table-form-row">
            <tbody>
              <tr>
                <td class="half-width-input left-cell">
                  <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input class="required-input half-width-input" id="zipcode" name="zipcode" :placeholder="$t('zip')" type="text" v-model.trim="address.zip"/>
                  </div>
                </td>
                <td class="half-width-input right-cell">
                  <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input class="required-input half-width-input raw_phone_number" name="raw-phone-number" :placeholder="$t('phone')" type="tel" v-model.trim="address.telephone"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="cart-footer defaulthide ui-footer ui-footer-fixed slideup ui-bar-inherit">
            <div class="checkout-button-container">
              <div class="orange-button checkout-button touchable done-btn" @click="submitAddress">
                {{ $t('done') }}
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
      },
      countries: [

        { code: 'AL', name: 'Albania' },
        { code: 'AR', name: 'Argentina' },
        { code: 'AU', name: 'Australia' },
        { code: 'AT', name: 'Austria' },
        { code: 'BE', name: 'Belgium' },
        { code: 'BR', name: 'Brazil' },
        { code: 'BG', name: 'Bulgaria' },
        { code: 'CA', name: 'Canada' },
        { code: 'CL', name: 'Chile' },
        { code: 'CO', name: 'Colombia' },
        { code: 'HR', name: 'Croatia' },
        { code: 'CZ', name: 'Czech Republic' },
        { code: 'DK', name: 'Denmark' },
        { code: 'EC', name: 'Ecuador' },
        { code: 'EG', name: 'Egypt' },
        { code: 'EE', name: 'Estonia' },
        { code: 'FI', name: 'Finland' },
        { code: 'FR', name: 'France' },
        { code: 'DE', name: 'Germany' },
        { code: 'GR', name: 'Greece' },
        { code: 'HU', name: 'Hungary' },
        { code: 'IN', name: 'India' },
        { code: 'ID', name: 'Indonesia' },
        { code: 'IE', name: 'Ireland' },
        { code: 'IT', name: 'Italy' },
        { code: 'JP', name: 'Japan' },
        { code: 'JO', name: 'Jordan' },
        { code: 'LV', name: 'Latvia' },
        { code: 'LI', name: 'Liechtenstein' },
        { code: 'LT', name: 'Lithuania' },
        { code: 'LU', name: 'Luxembourg' },
        { code: 'MK', name: 'Macedonia' },
        { code: 'MY', name: 'Malaysia' },
        { code: 'MX', name: 'Mexico' },
        { code: 'MD', name: 'Moldova' },
        { code: 'MC', name: 'Monaco' },
        { code: 'MA', name: 'Morocco' },
        { code: 'NL', name: 'Netherlands' },
        { code: 'NZ', name: 'New Zealand' },
        { code: 'NO', name: 'Norway' },
        { code: 'PE', name: 'Peru' },
        { code: 'PH', name: 'Philippines' },
        { code: 'PL', name: 'Poland' },
        { code: 'PT', name: 'Portugal' },
        { code: 'RO', name: 'Romania' },
        { code: 'RU', name: 'Russia' },
        { code: 'SA', name: 'Saudi Arabia' },
        { code: 'RS', name: 'Serbia' },
        { code: 'SG', name: 'Singapore' },
        { code: 'SK', name: 'Slovakia' },
        { code: 'SI', name: 'Slovenia' },
        { code: 'KR', name: 'South Korea' },
        { code: 'ES', name: 'Spain' },
        { code: 'SE', name: 'Sweden' },
        { code: 'CH', name: 'Switzerland' },
        { code: 'TW', name: 'Taiwan' },
        { code: 'TH', name: 'Thailand' },
        { code: 'TR', name: 'Turkey' },
        { code: 'UA', name: 'Ukraine' },
        { code: 'AE', name: 'United Arab Emirates' },
        { code: 'GB', name: 'United Kingdom (Great Britain)' },
        { code: 'US', name: 'United States' },
        { code: 'VE', name: 'Venezuela' },
        { code: 'VN', name: 'Vietnam' }
      ]
    }
  },
  created () {
    this.fetch()
  },
  computed: {
    countryName() {
      const country = this.countries.find(c => c.code === this.address.country)
      return country ? country.name : this.$t("country")
    }
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
      //let zipResult = Validator.zip(this.address.zip)
      //if (!zipResult.status) {
      //  this.$messagebox({
      //    title: 'Oops!',
      //    message: zipResult.errorText,
      //    confirmButtonText: 'ok',
      //    confirmButtonHighlight: true
      //  });
      //  return false
      //}
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
    if (this.address.firstName === '' || this.address.lastName === '' || this.address.telephone === '' || this.address.address === '' || this.address.city === '' || this.address.zip === '' || this.address.state === '' || this.address.country === '') {
      next(false)
      this.$messagebox({
        title: this.$t("areyousure"),
        message: this.$t("cancelshipping"),
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

