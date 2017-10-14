<template lang='pug'>
    footer
        .left 
            .text 
                |твой 
                |ответ? 
            .sign >
        .answers
            ul.list
                li.items
                    .number 1
                    .answer-text .getJSON()
                li.items
                    .number 2
                    .answer-text .getScript()
                li.items
                    .number 3
                    .answer-text .json()
                li.items
                    .number 4
                    .answer-text .ajax()

</template>

<script>
export default {

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
.items {
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
.answer-text {
color: $white;
font-size: rem(40px);
font-weight: 400;
line-height: rem(56.22px);
align-self: center;

}
</style>