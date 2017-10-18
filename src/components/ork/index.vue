<template lang='pug'>
    .ork
        .ork-name M3GA cod3r
        .ork-hp
            .hp-percent {{percent}} %
            .hp-bar
                .current-hp(
                    :style="{ width:percent + '%'}"
                )
        .ork-img
</template>

<script>
export default {
    props: {
        percent: {
            type: Number,
            default: 50
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
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        bottom: 17%;
        right: 0;
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
        // &:after {
        //     content: "";
            
        // }
    }
    .current-hp {
            // width: 40%;
            height: rem(15px);
            position: absolute;
            background-color: $red;
            display: inline-block;
            transition: 1.5s;
    }
    .ork-img {
        width: rem(231px);
        height: rem(315px);
        background-image: url('~images/enemy-01.svg');
        @include image;
    }
</style>