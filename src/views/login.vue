<template>
    <page-header :title.sync="title"></page-header>
    <div id="page-content">
        <div id="page-content-scroll">
            <div class="header-clear"></div>
            <div class="content">
                <div class='page-login full-bottom'>
                    <div class='spacer'></div>
                    <form v-on:submit.prevent="onSubmit">
                        <div class='login-input' :class="error ? 'has-error' : ''">
                            <i class='fa fa-user'></i>
                            <input type='text' placeholder='{{$t("login.username")}}' v-model="user.username" name="username">
                            <div class="error" v-if="error">Invalid username and password</div>
                        </div>
                        <div class='login-input full-bottom' :class="error ? 'has-error' : ''">
                            <i class='fa fa-lock'></i>
                            <input type='password' placeholder='{{$t("login.password")}}' v-model="user.password" name="password">
                            <div class="error" v-if="error">Invalid username and password</div>
                        </div>
                        <div class='cover-field full-bottom'>
                            <input type='checkbox' name='rememberme' id='rememberme' @click="toggleRemember">
                            <label for='rememberme'>{{$t("login.remember_me")}}</label>
                        </div>
                        <button type="submit" class='pageapp-login-button button button-green'><i class='fa fa-arrow-right'></i>{{$t("login.title")}}</button>
                    </form>
                    <div class='cover-field full-bottom'>
                        <a v-link="'/register'" class="link-item">{{$t("register.title")}}</a>
                    </div>
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
                title: 'Login',
                user: {
                    username: '',
                    password: '',
                    remember_me: false
                },
                error: false
            }
        },
        methods: {
            toggleRemember () {
                if (this.user.remember_me) {
                    this.user.remember_me = false
                }
            },
            onSubmit () {
                this.$http.post(api.login, this.user, {emulateJSON: true}).then(response => {
                    this.$cookie.set('access_token', response.data.access_token, 7)
                    this.$cookie.set('user_id', response.data.user_id, 7)
                    let to = this.$route.query.next
                    this.$router.go(to || '/')
                }, (response) => {
                    this.error = true
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
    .page-login{
        margin-top: 60px;
    }
    .error {
        color: #ff0000;
        margin: 10px 0 20px;
    }
    .login-input input {
        margin-bottom: 0 !important;
    }
    .login-input.has-error input {
        border: 1px solid #ff0000 !important;
    }
</style>
