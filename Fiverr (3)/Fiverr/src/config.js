import Cookies from 'js-cookie'
export default {
    baseURL: 'http://localhost:8000/api/',
    fileURL: 'http://103.123.112.149:50/',
    inviteLink: 'http://localhost:8080/invite/'+ Cookies.get('business_id'),
    stripeKey : 'pk_test_17InAewVNcDqj5Igs07zhpy700qujMbU4P'
}
