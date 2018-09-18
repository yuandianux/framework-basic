# framework-basic

Version: 0.1.0

华宇元典前端框架基础版

## 使用

### 下载到本地

```
git clone https://github.com/yuandianux/framework-basic.git
```

### 安装
```
npm install
```

### 运行开发环境
```
npm run serve
```

### 生成代码
```
npm run build
```

### 矫正代码规范

遵守 [ESLint ](https://eslint.org/) 前端 standard 规范标准

```
npm run lint
```

### 初始化Element-UI变量文件(默认不需要执行)

```
npm run eti
```

### 编译Element-UI主题
```
npm run etw
```



## 配置代理

修改根目录中 **vue.config.js** 文件中 **devServer.proxy['/api'].target** 字段即可。



## 关于Element-UI主题

基础框架默认搭载Element-UI白垩主题。如需自定义主题，请修改根目录下 **element-variables.scss** 文件，该文件均使用SCSS语法。执行 **npm run etw** 命令，会检测主题的修改并自动编译。



























