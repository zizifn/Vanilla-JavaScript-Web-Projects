# 引入webpack

这里创建使用npm init 一个项目，然后引入webpack， 重构先前的项目。

## npm init
创建一个project
## add webpack
https://webpack.js.org/guides/getting-started/
1. devDependencies vs Dependencies

```
1. npm install webpack webpack-cli --save-dev

```

## bundle all
1. loadash
2. es module

这里注意看最后形成的文件，只有一个js文件。 记得对比下network 资源的大小。

## 让开发体验好点
修改package `npm run build`

## 把CSS bundle 进去
这里可以对多个css进行bundle，当然也可以对sass etc进行操作
1. 我这里写了2个例子来展示webpack对css的操作


## 总结

这里写了简单的例子来展示webpack的作用。webpack对于前端是很重要的。其他的loader和plugin完全可以参考官方文档。