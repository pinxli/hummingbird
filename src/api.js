'use strict'

// const prefix = 'http://127.0.0.1:8000/api'
const prefix = 'http://172.16.20.64:8008/api/'
export default {
    onlinepay: prefix + 'onlinepayment/',
    register: 'http://127.0.0.1:8000/api/register/member/',
    login: 'http://127.0.0.1:8000/login/',
    verification: 'http://127.0.0.1:8000/verification_code/',
    member: 'http://127.0.0.1:8000/api/member/',
    withdraw: 'http://127.0.0.1:8000/api/withdraw/',
    reset: 'http://127.0.0.1:8000/reset_password/'
}
