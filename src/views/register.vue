<template>
    <page-header :title.sync="title"></page-header>
    <div class='cover-page cover-image'>
        <div class='cover-page-content'>
            <div class='page-login'>
                <a href='#' class='pageapp-login-logo'></a>
                <div class='spacer'></div>

                <form v-on:submit.prevent="processRegister">
                    <div class='login-input'>
                        <i class='fa fa-user'></i>
                        <input type='text' v-model="member.username" placeholder="Username" required>
                    </div>

                    <div class='login-input'>
                        <i class='fa fa-lock'></i>
                        <input type='password' v-model="member.password" placeholder="Password" required>
                    </div>

                    <div class='login-input'>
                        <i class='fa fa-lock'></i>
                        <input type='password' v-model="member.confirmation_password" placeholder="Confirm your Password" required>
                    </div>

                    <div class='login-input'>
                        <i class='fa fa-user'></i>
                        <input type='text' v-model="member.real_name" placeholder="Real Name" required>
                    </div>

                    <div class='login-input'>
                        <i class='fa fa-lock'></i>
                        <input type='password' v-model="member.withdraw_password" placeholder="Withdraw Password" required>
                    </div>

                    <div class='login-input'>
                        <i class='fa fa-phone'></i>
                        <input type='text' v-model="member.phone" placeholder="Phone Number" required>
                    </div>

                    <div class='login-input'>
                        <i class='fa fa-qq'></i>
                        <input type='text' v-model="member.qq" placeholder="QQ" required>
                    </div>

                    <div class='login-input'>
                        <i class='fa fa-code'></i>
                        <input type='text' v-model="member.verification_code" placeholder="Verification Code">
                        <div class="verify_code"><img :src="'http://127.0.0.1:8000/static/' + code.image"></div>
                    </div>

                    <div class='cover-field full-bottom'>
                        <input type='checkbox' name='agree' id='agree'>
                        <label for='agree'>{{$t("register.agreement")}} <a href="#">{{$t("register.user_policy")}}</a></label>
                    </div>

                    <button type="submit" class='pageapp-login-button button button-green'><i class='fa fa-arrow-right'></i>{{$t("register.title")}}</button>
                </form>


                <div class='login-input full-bottom'>
                    <a v-link="'/login'" class="link-item">{{$t("login.title")}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import api from '../api'
    export default {
        data () {
            return {
                title: 'Register',
                member: {
                    username: '',
                    password: '',
                    confirmation_password: '',
                    real_name: '',
                    withdraw_password: '',
                    phone: '',
                    qq: '',
                    verification_code: ''
                },
                valid: false,
                code: {
                    image: '',
                    input: ''
                },
                formError: {
                    verification: false
                }
            }
        },
        ready () {
            this.getVerificationCode()
        },
        methods: {
            processRegister () {
                this.$http.post(api.register, this.member, {emulateJSON: true}).then(response => {
                    this.$router.go('/a/home/')
                }, (response) => {
                    console.log(response)
                })
            },
            getVerificationCode () {
                this.$http.get(api.verification).then(response => {
                    this.code.image = response.data.verification_image
                    this.code.input = response.data.code
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
    .cover-page {
        height: 568px;
        width: 320px;
    }
    .cover-page-content {
        margin-left: -150px;
        margin-top: -155.5px;
    }
    .link-item {
        text-align: center;
    }
    label {
        color: #999999;
    }
    .verify_code {
        color: #777777;
        position: absolute;
        right: 0;
        top: 0;
        line-height: 45px;
        background: #cccccc;
        height: 100%;
        width: 40%;
    }
    .verify_code img {
        height: 100%;
        max-width: 100%;
    }
    .error {
        border: 1px solid #ff0000;
    }
</style>
