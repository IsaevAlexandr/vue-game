<template lang='pug'>
    header
        .hero-info
            .avatar
            .lvl lvl {{lvl}} 
            .vertical-line | 
            .js {{scill}}
            .hearts(v-for='heart in hearts')
        .right #br41n570rm
</template>
<script>
export default {
    data(){
        return {
            lvl: 1,
            scill: 'js',
            hearts: 3
        }
    },
    methods: {
        
    }
}
</script>

<style lang='scss' scoped>
    header {
        display: flex;
        position: relative;
        z-index: 1;
    }
    .hero-info {
        display: flex;
        margin-right: auto;
    }
    .avatar {
        width: rem(100px);
        height: rem(100px);
        background: url('~images/Avatar-01.svg');
        @include image;
    }
    .avatar,.lvl,.vertical-line,.js,.right {
        color: $black;
        align-self: center;
        margin-right: rem(5px);
        font-size: rem(35px);
        font-weight: 400;
    }
    .hearts {
        width: rem(45px);
        height: rem(42px);
        opacity: 0.6;
        background: url('~images/heart.png');
        @include image;
        align-self: center;
        margin-right: rem(5px);
    }

    .right {
        color: $black;
        font-size: rem(54px);
        font-weight: 400;
    }
</style>
