<template lang='pug'>
    .firebool(:class='{flight : isFlight}')
        .firebool-img(@click='addFlightClass')
</template>

<script>
export default {
    data(){
        return {
            isFlight: false
        }
    },
    methods: {
        addFlightClass(){
            this.isFlight = true;
            // setTimeout(()=>{
            //     this.isFlight = false;
            // }, 2000)
        }
    }
}
</script>

<style lang='scss' scoped>
.firebool {
    position: absolute;
    z-index: 1;
    bottom: 30%;
    left: 15%;
}
.firebool-img {
    width: rem(181px);
    height: rem(100px);
    background-image: url('~images/fireball-01.svg');
    @include image;
}

.flight {
    animation: flight 1s;
    animation-fill-mode: forwards;
}

@keyframes flight {
    100% {transform: translateX(400px)}
}

</style>