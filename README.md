<div align="center">
<br>
<img width="200" src="https://raw.githubusercontent.com/58xinian/icon/master/Sub-Store1.png" alt="Sub-Store">
<br>
<br>
<h2 align="center">Sub-Store Docker<h2>
</div>

项目修改于：<https://github.com/dompling/DockerFiles/tree/master/Sub-Store>

特别感谢：[@dompling](https://github.com/dompling)

# 请注意，该镜像的前端部分已替换为 [SaintWe/Sub-Store-Front-End](https://github.com/SaintWe/Sub-Store-Front-End)，若有疑请避免使用

**重新构建了 [Cloudflare Workers 版的 Sub-Store](https://github.com/SaintWe/Sub-Store-Workers) 已实现基于 http authorization bearer 身份认证，前端部分已适配**

**该 Docker 仍然使用 <https://github.com/sub-store-org/Sub-Store>，仅在 Caddy 上实现了与 <https://github.com/SaintWe/Sub-Store-Workers> 逻辑相同的身份认证**

## Docker-compose 部署

``` sh
# 使用前端
docker run -d --name substore --restart always -v $(pwd)/data:/Sub-Store -p 6080:80 -e BEARER_TOKEN=替换 -e D_TOKEN=替换 -e DOMAIN=替换 -e TZ=Asia/Shanghai saintwe/sub-store:latest

# 不使用前端
docker run -d --name substore --restart always -v $(pwd)/data:/Sub-Store -p 6080:80 -e BEARER_TOKEN=替换 -e D_TOKEN=替换 -e TZ=Asia/Shanghai saintwe/sub-store:latest
```

``` yml
version: '3'

# 该镜像含前端
services:
  substore:
    image: saintwe/sub-store:latest
    container_name: substore
    restart: always
    ports:
      - "6080:80"
    volumes:
      - ./data:/Sub-Store
    environment:
      - TZ=Asia/Shanghai

      # 设置后端的身份认证，随机生成大小写字母+数字填入即可，在公网环境下请务必使用
      # - BEARER_TOKEN=

      # 设置后端提取或预览节点的认证，随机生成大小写字母+数字填入即可，在公网环境下请务必使用
      # - D_TOKEN=

      # 如需使用前端请取消注释，用于修改默认的后端地址
      # 仅推荐您在内网环境下使用镜像自带的前端
      # - DOMAIN=http://youdomain
```

将上面内容调整后放到服务器 `docker-compose.yml` 中

**仅推荐您在内网环境下使用镜像自带的前端，公网下可使用下述 2 个由我构建的前端，或您自行构建**

- **Vercel**：<https://sub-store-workers.vercel.app>
- **Cloudflare Pages**：<https://sub-store-workers.pages.dev>
- [关于前端的更多使用细节](https://github.com/SaintWe/Sub-Store-Workers#%E5%89%8D%E7%AB%AF)

一切准备就绪后在 `docker-compose.yml` 同目录执行

```
# 守护启动
docker compose up -d

# 打印日志
docker compose logs

# 更新镜像
docker compose pull

# 停止容器
docker compose stop

# 重启容器
docker compose restart

# 停止并删除容器
docker compose down
```

## 结束语

- 感谢 [@dompling](https://github.com/dompling)
- 感谢 [@Peng-YM](https://github.com/Peng-YM) 大佬的无私奉献将代码开源
