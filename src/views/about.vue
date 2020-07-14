<template>
<div class="com">
    <h1 class="com-item">我是about页面</h1>
    <div v-if="value === 1">
        <button class="btn1">按钮1</button>
    </div>
    <div v-else-if="value === 2">
        <button class="btn1">按钮2</button>
    </div>
    <div v-else>
        <button class="btn1">按钮3</button>
    </div>
    <Button :type="type" :text="text" @myEvennt='parClick'></Button>
    <!-- <button v-show="isShow" class="btn1">权限1</button>
    <button class="btn1">权限2</button> -->
    <button v-permission="5" class="btn1">权限1</button>
    <button v-permission="'5'" class="btn1">权限2</button>
</div>
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                value:  3,
                type: 'success',
                text: '成功',
                isShow: false
            }
        },
        props: {
            msg: String
        },
        components: {
        },
        methods: {
            parClick() {
                alert(this.text)
            }
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
.btn1 {
    width: 500px;
    height: 100px;
    line-height: 40px;
    font-size: 80px;
    color: #ffffff;
}
</style>
