import Vue from 'vue'

function changeStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const requireComponent = require.context('.', false, /\.vue$/)

requireComponent.keys().forEach(fileName => {
    const componentName = changeStr(fileName.replace(/\.\//, '').replace(/\.\w+$/, '')) 
    const config = requireComponent(fileName)
    console.log(componentName, 'componentName')
    console.log(config, 'config')
    Vue.component(componentName, config.default || config)
});

