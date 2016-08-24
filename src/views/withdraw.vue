<template>
    <page-header :title.sync="title"></page-header>
    <div class="header-clear"></div>
    <div class="content">

        <div class="content-header member-details">
            <a href="">Review My Bank Info</a>
            <div class="content-details">
                <div class="content-item">
                    <span>Balance:</span>
                    <span>{{sample.balance | currency '￥'}}</span>
                </div>
                <div class="content-item">
                    <span>Withdraw limitation:</span>
                    <span>Greater than $10</span>
                </div>
                <div class="content-item">
                    <span>Discount to remove:</span>
                    <span>{{sample.discount | currency '￥'}}</span>
                </div>
            </div>
        </div>

        <div class="one-half-responsive">

            <form v-on:submit.prevent="postWithdraw">
                <div class="full-bottom">
                    <div class="store-input">
                        <h6>{{$t("withdraw.amount")}}</h6>
                        <input v-model="withdraw.amount" number/>
                        <div class="balance-details">
                            <small>{{$t("withdraw.balance_after")}}</small>
                            <span>{{balance_after | currency '￥'}}</span>
                        </div>
                    </div>
                </div>
                <div class="full-bottom">
                    <div class="store-input">
                        <h6>{{$t("withdraw.password")}}</h6>
                        <input type="password" v-model="withdraw.withdraw_password"/>
                    </div>
                </div>
                <!-- <div class="decoration"></div> -->
                <button type="submit" class="button button-green button-fullscreen" v-if="isLoading">
                    <img src="../assets/images/framework/AjaxLoader.gif" />
                </button>
                <button type="submit" class="button button-green button-fullscreen" v-if="!isLoading">
                    {{$t("withdraw.submit")}}
                </button>
            </form>
        
        </div>
    </div>
</template>
<script>
    import api from '../api'
    export default {
        data () {
            return {
                hasError: false,
                isLoading: false,
                withdraw: {
                    'amount': '',
                    'withdraw_password': '',
                    'member_id': 1
                },
                balance_after: '',
                details: [],
                // sample balance details, will change to proper data
                // once finalize
                sample: {
                    balance: 331,
                    limit: '',
                    discount: 10
                }
            }
        },
        ready () {
            this.getMemberDetails()
        },
        computed: {
            balance_after () {
                return this.sample.balance - this.withdraw.amount - this.sample.discount
            }
        },
        methods: {
            getMemberDetails () {
                let userId = this.$cookie.get('user_id')
                this.$http.get(api.member + userId + '/?opt_expand=1')
                .then(response => {
                    this.details = response.data
                })
            },
            postWithdraw () {
                this.$http.post(api.withdraw, this.withdraw)
                .then(response => {
                    console.log(response)
                })
            }
        },
        components: {
            'commonStyle': require('../components/style.vue'),
            'pageHeader': require('../components/header.vue')
        }
    }
</script>
<style>
    .content-header.member-details {
        display: flex;
        margin: 40px 0 20px 0;
        flex-direction: column;  
    }
    .content-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }
    .content-item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 5px 0; 
    }
    .balance-details {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
