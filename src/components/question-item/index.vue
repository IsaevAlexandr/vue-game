<template lang='pug'>
    li(
        @click='checkAnswer'
    )
        .number {{number}}
        .text {{text}}
</template>

<script>
export default {
    props: {
        number: {
            type: Number,
            default: 1
        },
        text: {
            type: String,
            default: 'Вопрос'
        }
    },
    methods:{
        checkAnswer(text){
            // console.log(this.text)
            this.$emit('checkAnswer',this.text);
        }
    }
}
</script>

<style lang='scss' scoped>
    li {
        display: flex;
        flex: 50%;
        margin-bottom: rem(25px);
    }
    .number {
        background-color: #c3c421;
        padding: rem(18px) rem(0px);
        width: rem(70px);
        text-align: center;
        color: $black;
        font-size: rem(49px);
        font-weight: 400;
        align-self: center;
        margin-right: rem(40px);
    }
    .text {
        color: $white;
        font-size: rem(40px);
        font-weight: 400;
        line-height: rem(56.22px);
        align-self: center;

    }
</style>