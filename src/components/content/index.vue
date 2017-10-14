<template lang='pug'>
    .wrapper
        app-header
        app-firebool
        app-hero
        app-ork

</template>

<script>
import appHeader from '../header'
import appHero from '../hero'
import appOrk from '../ork'
import appFirebool from '../fireboll'

export default {
    components: {
        appHeader,
        appHero,
        appOrk,
        appFirebool
    }
}
</script>

<style lang='scss' scoped>
    .wrapper {
        position: relative;
        flex: 1;
        background: url('~images/background-01.svg');
        @include image;
        min-height: rem(650px);
        background-position-y: 100%;
        &:before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-image: url('~images/front-01.svg');
            @include image;

            
        }
        /* должны быть одинаковые с футером */
        padding: rem(10px) rem(10px) rem(0px) rem(10px);
    }
</style>