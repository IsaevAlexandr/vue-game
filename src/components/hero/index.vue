<template lang='pug'>
    .hero
        .hero-img
        .question(
        ) {{question}}
</template>

<script>
export default {
    props: {
        question: {
            type: String,
            default: "похоже, я все-таки, что то знаю!"
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang='scss' scoped>
.hero {
    position: relative;
    margin-left: rem(110px);
}
.hero-img {
    width: rem(218px);
    height: rem(322px);
    background-image: url('~images/char-01.svg');
            @include image;
}
.question {
    padding: rem(20px);
    box-shadow: rem(7px) rem(8px) 0 #919191;
    background-color: $white;
    position: absolute;
    bottom: 110%;
    min-width: 400px;
    max-width: 600px;
}

</style>