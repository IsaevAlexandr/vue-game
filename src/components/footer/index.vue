<template lang='pug'>
    footer
        .left 
            .text 
                |твой 
                |ответ? 
            .sign >
        .answers
            ul.list
                app-question-item(
                    v-for='(i, index) in 4'
                    :number='i'
                    :key='index'
                )

</template>

<script>
import appQuestionItem from '../question-item';

export default {
    components: {
        appQuestionItem
    }
}
</script>

<style lang='scss' scoped>
    footer {
        width: 100%;
        min-height: rem(200px); 
        display: flex;
        background-color: #54422a;
        justify-content: center;
    }
    .left {
        // max-width: rem(250px);
        display: flex;
        height: rem(200px);
    }
    .text,.sign {
        color: $white;
        font-size: rem(49px);
        font-weight: 400;
        align-self: center;
    }
    .text {
        line-height: rem(56px);
        white-space: pre;
        text-align: right;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
    }




</style>