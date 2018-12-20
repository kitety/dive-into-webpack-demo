#第一章

热更新注意事项
```
--hot //在devServer后面加上
```
更新的只有entry里面所对应的需要的文件，而更新index.html不会更新，因为其不是js对应的模块

支持Source Map

```
--devtool source-map //在devServer后面加上，chrome Source可以看到可调式的源代码
```
#第二章

webpack --config 指定执行配置的js

entry入口
===
context为执行的根目录,默认为当前工作目录,可以用path.resolve()修改

必须是绝对路径,也可以是命令行配置方式

context 可能会影响entry相对路径指向的真实文件

entry可以通过string,array,object指定入口

chunk:入口为string或者array,就生成一个main chunk,如果是object就生成以键命名的多个chunk

动态entry:可以配置同步函数或者异步函数来配置

output
===
filename 输出文件名,string类型.单个输出可以直接指定文件名,如果是多个文件的话就可以使用'[name].js',这样就是以chunk的名字输出.具体可以使用:

- id:chunk唯一标识符,从0开始

- name:chunk的名称

- hash:chunk的唯一标识的hash值

- chunkhash:chunk的内容的hash值

- 注意:hash和chunkhash的长度是可以指定的,比如[hash:8]就指定8位,默认是20位.同时,ExtractWebpackPlugin使用的是contenthash,不是chunkhash

chunkFilename:配置无入口的chunk在输出时的文件名称.用于指定在运行过程中chunk在输出时候的名称.
