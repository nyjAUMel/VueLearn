class Vue {
    // options是一个对象
    constructor(options) { 
        // 获取所有属性名
        Object.key(options.data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    // 返回该对象的属性data的值
                    return options.data[propertyName]
                },
                set(newValue) {
                    options.data[propertyName] = newValue
                }
            })
        })
    }
}