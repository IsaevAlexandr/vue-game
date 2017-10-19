<template lang='pug'>
    .fireboll
        .fireboll-img(
            @click='addFlightClass'
            :class='{success : successAnimationStatus, failure : failureAnimationStatus}'
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
.fireboll {
    flex: 1;
    display: flex;
    align-self: stretch;
}
$width: 181px;
.fireboll-img {
    width: $width;
    height: rem(100px);
    background-image: url('~images/fireball-01.svg');
    @include image;
    position: relative;
    align-self: flex-end;
    bottom: 10%;
    left: 0;
    opacity: 0;
}

.success{
    animation: success 1s linear;
    animation-fill-mode: forwards;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.3s;
    // left: 100%
}

@keyframes success {
    25% {transform: scale(1)}
    70% {transform: scale(1.5)}
    85% {left: 100%; transform: scale(2);opacity: 1}
    100% {left: 100%;opacity: 0}
}

.failure {
    animation: failure 1s linear;
    animation-fill-mode: forwards;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.3s;
}
@keyframes failure {
    45% {left: 100%; transform: rotate(0deg)}
    58% {left: 100%; transform: scale(1) rotate(180deg)}
    85% {left: 0; transform: scale(2) rotate(180deg); opacity: 1;}
    100% {left: 0;opacity: 0; transform: scale(2) rotate(180deg);}
}
</style>