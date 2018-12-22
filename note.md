# 第一章

热更新注意事项
```
--hot //在devServer后面加上
```
更新的只有entry里面所对应的需要的文件，而更新index.html不会更新，因为其不是js对应的模块

支持Source Map

```
--devtool source-map //在devServer后面加上，chrome Source可以看到可调式的源代码
```
# 第二章

webpack --config 指定执行配置的js

Entry入口
===
context为执行的根目录,默认为当前工作目录,可以用path.resolve()修改

必须是绝对路径,也可以是命令行配置方式

context 可能会影响entry相对路径指向的真实文件

entry可以通过string,array,object指定入口

chunk:入口为string或者array,就生成一个main chunk,如果是object就生成以键命名的多个chunk

动态entry:可以配置同步函数或者异步函数来配置

Output
===
filename 输出文件名,string类型.单个输出可以直接指定文件名,如果是多个文件的话就可以使用'[name].js',这样就是以chunk的名字输出.具体可以使用:

- id:chunk唯一标识符,从0开始

- name:chunk的名称

- hash:chunk的唯一标识的hash值

- chunkhash:chunk的内容的hash值

- 注意:hash和chunkhash的长度是可以指定的,比如[hash:8]就指定8位,默认是20位.同时,ExtractWebpackPlugin使用的是contenthash,不是chunkhash

chunkFilename:配置无入口的chunk在输出时的文件名称.用于指定在运行过程中chunk在输出时候的名称.

path:输出存放的本地的目录,必须是string类型的绝对路径,用path.resolve()

publicPath:构建出的资源需要异步加载,就需要资源的URL.publicPath配置发布到线上的URL前缀,为string类型,默认是空的字符串,即使用相对路径.

crossOriginLoading:输出部分的代码块需要异步加载,使用JSONP方式,类似于script的src,这个配置就是去配置crossOrigin.其中crossorigin有两种值可取(跟图片,视频,canvas类似):
- anonymous默认,不会带上用户的cookie
- use-credentials 带上用户的cookie

设置crossorigin获取异步加载脚本的详细错误信息

libraryTarget和library

构建一个可以被其他模块导入的库,二者经常一起使用
- output.libraryTarget 配置用何种方式到出库,是字符串枚举类型
  - var(默认),通过var赋值给library指定变量名称,就是返回代码内容
  - commonjs,配置通过CommonJS规范导出
  - commonjs2,配置通过CommonJS2规范导出
  - this,通过this被赋值给通过library指定的名称
  - window,通过window被赋值给通过library指定的名称,挂在window上
  - global,通过global被赋值给通过library指定的名称,挂在global上
- output.library 配置导出库的名称

libraryExport

配置导出模块中哪些子模块需要导出,要在libraryTarget设置为commonjs或者commonjs2才有意义

Module
===
loader:重点

noParse 让webpack忽略部分没有采用模块化的文件的递归解析和处理,提高构建性能.比如:jw,chartJS.同时注意被忽略的文件不应该包含import,require,define等模块化语句,否则在浏览器环境无法运行

parser对模块化的精确到语法层面的JS解析,支持AMD,CommonJS,ES6

Resolve
===
webpack 启动会在入口模块出发寻找以来的模块,resolve配置如何寻找

alias 配置别名,把原路径配置为一个新的路径

mainFields 针对代码不同的版本(有的第三方模块有多种版本),就用mainFields去指定版本,顺序会按照package.json去寻找

extensions 导入语句没有带文件后缀的时候,尝试自动带上后缀访问(字符串的数组)

modules 指定第三方模块的目录(字符串的数组),之后就可以直接引用使用

descriptionFile 配置第三方模块的文件名称,如package.json文件,形式为字符串数组

enforceExtension 必须带上对应的后缀,形式为字符串数组

enforceModuleExtension 功能与enforceExtension类似,但是只在node_modules下的模块生效1

Plugins
===
用于拓展Webpack的功能,接受一个数组,每一项都是使用的Plugin的实例,需要的参数从构造函数传入

devServer
===
高效率开发,可以通过文件配置和命令行参数配置

hot 是否启用热模块替换功能,在不刷新整个页面的情况下新模块替换旧的模块实现实时预览

inline 依赖一个注入到页面的代理客户端去接受来自DevServer的命令和刷新网页,而inline就是配置是否自动注入
- 开启：DevServer会在构建变化的代码通过代理客户端控制网页刷新
- 关闭：Devserver不能控制要开发的网页，通过iframe方式去运行开发的网页，再刷新iframe

historyApiFallback 用于方便开发使用了HTML5 History API的SPA应用，比如访问/user页面和/home页面都要返回index.html页面。如果是只有一个index.html的应用可以直接设置为true，否则可以按照正则匹配

contentBase 配置DevServer HTTP服务器文件根目录，默认当前目录。也可以通过path配置

header 在http响应中注入http响应头，内容为object

host 配置DevServer服务监听的地址，命令行配置--host 0.0.0.0

port 配置DevServer服务监听的端口，默认8080

allowdHosts 配置一个白名单列表，只有http请求的HOST在列表里才正常返回,为字符串的数组, 比如：
```
allowdHosts:[
  // 单个域名
  'host.com',
  // *.host2.com
  '.host2.com'
]
```


