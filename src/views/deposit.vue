<template>
    <page-header :title.sync="title"></page-header>
    <div class="header-clear"></div>
    <div class="content">
        <div class="content-header btn-group">
            <a class="button" :class="active == 'online-pay' ? 'active' : ''" @click="active = 'online-pay'">{{$t("deposit.online_pay")}}</a>
            <a class="button" :class="active == 'remit' ? 'active' : ''" @click="active = 'remit'">{{$t("deposit.remit")}}</a>
        </div>

        <div class="one-half-responsive" v-if='active === "online-pay"'>
            <div class="formValidationError bg-red-dark color-white" v-if='hasError'>
                <p class="center-text uppercase small-text">{{$t("deposit.amount_error")}}</p>
            </div>
            <form v-on:submit.prevent="postPayment">
                <div class="full-bottom">
                    <div class="store-input">
                        <h6>{{$t("deposit.amount")}}</h6>
                        <input v-model="payment.amount" @input="checkAmount" />
                        <small>Min {{sample.min}}, Max {{sample.max}}</small>
                    </div>
                </div>
                <div class="decoration"></div>
                <button type="submit" class="button button-green button-fullscreen" v-if="isLoading">
                    <img src="../assets/images/framework/AjaxLoader.gif" />
                </button>
                <button type="submit" class="button button-green button-fullscreen" v-if="!isLoading">
                    {{$t("deposit.process")}}
                </button>
            </form>

            <form action="https://pay.ecpss.com/sslpayment" method="post" id="formToPayment">
                <input type="hidden" name="AdviceURL" value="{{genData.AdviceURL}}">
                <input type="hidden" name="BillNo" value="{{genData.BillNo}}">
                <input type="hidden" name="Amount" value="{{genData.Amount}}">
                <input type="hidden" name="MerNo" value="{{genData.MerNo}}">
                <input type="hidden" name="ReturnURL" value="{{genData.ReturnURL}}">
                <input type="hidden" name="SignInfo" value="{{genData.SignInfo}}">
                <input type="hidden" name="defaultBankNumber" value="{{genData.defaultBankNumber}}">
                <input type="hidden" name="orderTime" value="{{genData.orderTime}}">
                <input type="hidden" name="return_params" value="{{genData.return_params}}">
            </form>

        </div>

        <div class="one-half-responsive" v-if='active === "remit"'>
            <div class="full-bottom">
                <div class="store-input">
                    <h6>{{$t("deposit.remit")}}</h6>
                </div>
            </div>
            <div class="decoration"></div>
            <a href="#" class="button button-green button-fullscreen">{{$t("deposit.process")}}</a>
        </div>
    </div>
</template>
<script>
    import api from '../api'
    export default {
        data () {
            return {
                active: 'online-pay',
                hasError: false,
                isLoading: false,
                payment: {
                    'amount': '',
                    'merchant_num': 1,
                    'member_id': 1
                },
                genData: [],
                details: [],
                // sample limit, will change to proper data
                // once finalize
                sample: {
                    min: 10,
                    max: 100
                }
            }
        },
        ready () {
            this.getMemberDetails()
        },
        methods: {
            postPayment () {
                if (!this.hasError) {
                    this.$http.post('http://172.16.20.64:8008/api/onlinepayment/', this.payment).then(response => {
                        // get the generated data
                        this.genData = response.data
                        // send the generated data to the payment gateway API
                        document.getElementById('formToPayment').submit()
                    }).catch(error => {
                        console.log(error)
                    })
                }
            },
            getMemberDetails () {
                let userId = this.$cookie.get('user_id')
                this.$http.get(api.member + userId + '/?opt_expand=1')
                .then(response => {
                    this.details = response.data
                })
            },
            checkAmount () {
                if (this.payment.amount >= this.sample.min && this.payment.amount <= this.sample.max) {
                    this.hasError = false
                } else if (this.payment.amount === '') {
                    this.hasError = false
                } else {
                    this.hasError = true
                }
            }

        },
        components: {
            'commonStyle': require('../components/style.vue'),
            'pageHeader': require('../components/header.vue')
        }
    }
</script>
<style>
    .content-header {
        display: flex;
        margin: 40px 0 20px 0;
        
    }
    .content-header.btn-group .button {      
        text-align: center; 
        width: 100%;
        background-color: #2c3e50;
        color: #ffffff;
        margin: 0;
    }
    .content-header.btn-group .button.active {
        background: #16a085;
    }
    button img {
      margin: 0 auto
    }
</style>
