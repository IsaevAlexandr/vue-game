<template lang='pug'>
    .ork
        .ork-dialog(
            :class='{show : isDialogShow}'
        ) {{msg}}
        .ork-name M3GA cod3r
        .ork-hp
            .hp-percent {{percent}} %
            .hp-bar
                .current-hp(
                    :style="{ width:percent + '%', transition: animationDuration / 1000 + 's'}"
                )
        .ork-img
        
</template>

<script>
export default {
    props: {
        percent: {
            type: Number,
            default: 50
        },
        animationDuration: {
            type: Number,
            default: 300
        },
        msg: {
            type: String,
            default: "Сдавайся!"
        },
        isDialogShow: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
        
        }
    }
}
</script>

<style lang='scss' scoped>
    .ork {
        position: relative;
    }
    .ork-name {
        color: #444444;
        font-size: rem(40px);
        font-weight: 400;
    }
    .hp-percent {
        color: #444444;
        font-size: rem(23px);
        font-weight: 400;
        display: inline-block;
        margin-right: rem(10px);
    }
    .hp-bar {
        display: inline-block;
        width: rem(124px);
        height: rem(15px);
        background-color: $dark-grey;
        position: relative;

    }
    .current-hp {
            height: 100%;
            position: absolute;
            background-color: $red;
            display: inline-block;
            // transition: 1.5s;
    }
    .ork-img {
        width: rem(231px);
        height: rem(315px);
        background-image: url('~images/enemy-01.svg');
        @include image;
    }
    .ork-dialog {
        padding: rem(20px);
        box-shadow: 6px 7px 0 #919191;
        background-color: $white;
        position: absolute;
        opacity: 0;
        right: 50%;
        bottom: 105%;
        transition: 1s;
        min-width: rem(250px);

        &:after{
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            right: 0;
            top: 100%;
            border-top-color: $white;
        }
        &:before{
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            right: -6px;
            top: calc(100% + 6px);
            border-top-color: #919191;
        }
    }
    .show {
        opacity: 1;
        transition: 1s;
    }
</style>