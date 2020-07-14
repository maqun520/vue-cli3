<template>
<div class="com">
    <button class="com-item">我是child2组件</button>
</div>
</template>

<script>
    export default {
        name: "child2",
        props: {
            msg: String
        },
        components: {
        }
    }
</script>

<style lang="scss" scoped>
.com{
    font-size: px2rem(12);
    width: px2rem(1920);
    // height: 20%;
    color: $red;
    // background-color: #222222;
    // @include flex();
    .com-item{
        padding: px2rem(12);
        color: red;
    }
}
</style>
