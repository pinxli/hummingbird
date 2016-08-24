<template>
    <page-header></page-header>
    <div id="page-content">
        <div id="page-content-scroll">
            <router-view></router-view>
        </div>
    </div>
    <v-footer></v-footer>
</template>
<script>
export default {
    components: {
        'commonStyle': require('../components/style.vue'),
        'pageHeader': require('../components/header.vue'),
        'vFooter': require('../components/footer.vue')
    }
}
</script>
