<template lang='pug'>
    .ork
        .ork-img
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.ork {
    position: absolute;
    z-index: 1;
    bottom: 17%;
    right: 0;
}
.ork-img {
    width: rem(231px);
    height: rem(315px);
    background-image: url('~images/enemy-01.svg');
    @include image;
}
</style>