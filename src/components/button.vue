<script>
    export default {
        name: "child1",
        props: {
            type: {
                type:String,
                default: 'normal'
            },
            text: {
                type:String,
                default: 'normal'
            },
        },
        render(h) {
            return h('button',{
                class: {
                    btn: true,
                    'btn-success' : this.type === 'success',
                    'btn-danger' : this.type === 'danger',
                    'btn-warning' : this.type === 'warning',
                },
                domProps: {
                    innerText: this.text
                },
                on: {
                    click: this.handleClick
                }
            })
        },
        methods: {
            handleClick() {
                this.$emit('myEvennt')
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    width: 500px;
    height: 100px;
    line-height: 40px;
    font-size: 80px;
    color: #ffffff;
}
.btn-success {
    color: blue;
}
.btn-danger {
    color: red;
}
.btn-warning {
    color: yellow;
}
</style>
