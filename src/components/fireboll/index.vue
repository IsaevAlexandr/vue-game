<template lang='pug'>
    .firebool()
        .firebool-img(
            @click='addFlightClass'
            :class='{flight : isFlight}'
        )
</template>

<script>
export default {
    data(){
        return {
            isFlight: false
        }
    },
    props: {
        successAnimationStatus : {
            type: Boolean,
            default: false
        },
        failureAnimationStatus : {
            type: Boolean,
            default: false
        }
    },
    methods: {
        addFlightClass(){
            this.isFlight = true;
        
        }
    }
}
</script>

<style lang='scss' scoped>
.firebool {
    // position: absolute;
    // z-index: 1;
    // bottom: 30%;
    // left: 15%;
    flex: 1;
}
.firebool-img {
    width: rem(181px);
    height: rem(100px);
    background-image: url('~images/fireball-01.svg');
    @include image;
    position: relative;
}

.flight {
    animation: flight 1s;
    animation-fill-mode: forwards;
}

@keyframes flight {
    50% {transform: translateX(100%) scale(1.5)}
}

</style>