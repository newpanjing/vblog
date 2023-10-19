# VBlog

采用 Vitepress 搭建的个人博客

## 在线演示

https://panblogs.com

## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite&template=vite)

_Live Example: https://vite-vue-template.vercel.app_

### Deploying

在本地部署

```shell
yarn install
yara build
```

## 输出目录

```shell
./docs/.vitepress/dist
```

将 dist 拷贝到 nginx 或者其他 http 服务下就可以运行了。

## 本地开发调试

```shell
yarn dev
```

## 如何编写文章？

在 `docs/arichives` 目录下新建一个 markdown 文件，文件名为 `xxxx.md`，xxxx 为文章访问的 id 或者任意字符，文件内容如下：

然后访问 `http://localhost:3000/arichives/xxxx.html` 就可以看到文章了。

## 更新列表页

在 `docs/arichives` 中加入新的文章后，开发模式下会自动检测到并加载数据，如果是线上环境下需要运行构建命令才能生效，因为所有数据都是静态的。

```shell
yarn build
```

## 授权协议

由于本博客是开放的，所以任何人都可以使用，但是不代表可以任意搬运 docs/arichives 目录下的文章，如果需要转载，请署名原作者。
