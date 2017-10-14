<template lang='pug'>
    .hero
        .hero-img
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.hero {
    position: absolute;
    z-index: 1;
    bottom: 17%;
    left: 0;
}
.hero-img {
    width: rem(218px);
    height: rem(322px);
    background-image: url('~images/char-01.svg');
            @include image;
}

</style>