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
            setTimeout(()=>{
                this.isFlight = false;
            }, 2000)
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
    animation: flight 5s;
}

@keyframes flight {
    30% {transform: translateX(250%) rotate(90deg)};
    60% {transform: translateX(450%) rotate(90deg)};
    70%{transform: translateX(0)}
}

</style>