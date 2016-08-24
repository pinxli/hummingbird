<template>
    <page-header :title.sync="title"></page-header>
    <div class="header-clear"></div>
    <div class="content">

        <div class="one-half-responsive change-password">

            <form v-on:submit.prevent="changePassword">
                <div class="full-bottom">
                    <div class="store-input">
                        <h6>{{$t("change_password.old")}}</h6>
                        <input type="password" v-model="password.old_password" />
                    </div>
                </div>
                <div class="full-bottom">
                    <div class="store-input">
                        <h6>{{$t("change_password.new")}}</h6>
                        <input type="password" v-model="password.new_password"/>
                    </div>
                </div>
                <div class="full-bottom">
                    <div class="store-input">
                        <h6>{{$t("change_password.repeat")}}</h6>
                        <input type="password" v-model="password.repeat_password"/>
                    </div>
                </div>
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
                password: {
                    new_password: '',
                    repeat_password: '',
                    old_password: ''
                }
            }
        },
        methods: {
            changePassword () {
                this.$http.post(api.reset, this.password, { emulateJSON: true })
                .then(response => {
                    // redirect to my account??
                    console.log(response.body)
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
    .change-password {
        margin: 40px 0 20px 0;
    }
    input {
        margin: 0 !important;
    }
</style>
