<template>
<div class="footer-menu footer-menu-light">
    <a class="footer-menu-item active-footer-item" v-link="'/a/home'">
        <i class="fa fa-home"></i>
        <em>{{$t('footer.home')}}</em>
    </a>
    <a class="footer-menu-item">
        <i class="fa fa-align-left"></i>
        <em>{{$t('footer.bet_record')}}</em>
    </a>
    <a class="footer-menu-item" v-link="'/a/deposit'">
        <i class="fa fa-credit-card"></i>
        <em>{{$t('footer.deposit')}}</em>
    </a>
    <a class="footer-menu-item" v-link="'/a/withdraw'">
        <i class="fa fa-cny"></i>
        <em>{{$t('footer.withdrawal')}}</em>
    </a>
    <a class="footer-menu-item">
        <i class="fa fa-user"></i>
        <em>{{$t('footer.my')}}</em>
    </a>
</div>
</template>
