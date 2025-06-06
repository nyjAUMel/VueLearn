class Vue {
  // options是一个对象
  constructor(options) {
    // 获取所有属性名
    /* Object.keys(options.data).forEach((key) => {
      let firstChar = key.charAt(0);
      // 如果属性名的第一个字符是$或_，则不代理
      if (firstChar !== "$" && firstChar !== "_") {
        Object.defineProperty(this, key, {
          get() {
            // 返回该对象的属性data的值
            return options.data[key];
          },
          set(newValue) {
            options.data[key] = newValue;
          },
        });
      }
    }); */

    Object.keys(options.methods).forEach((key) => {
      this[key] = options.methods[key];
    });
  }
}
