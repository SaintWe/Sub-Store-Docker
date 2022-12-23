FROM alpine:latest

RUN apk add --no-cache nodejs npm tzdata git caddy curl supervisor && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    rm -fr /var/cache/apk/* && \
    npm install -g pnpm && \
    git clone https://github.com/sub-store-org/Sub-Store.git /Sub-Store && \
    rm -rf /Sub-Store/.git && \
    cd /Sub-Store/backend && \
    pnpm install && \
    pnpm run build && \
    mkdir /git && \
    git clone https://github.com/SaintWe/Sub-Store-Docker.git /git && \
    cd /git && \
    cp --parents ./supervisor/supervisord.conf /etc/ && \
    rm -f /etc/caddy/Caddyfile && \
    cp /git/frontend/Caddyfile /etc/caddy/Caddyfile && \
    rm -rf /git/.git && \
    apk del git tzdata && \
    sed -i "s|https://sub.store|/|g" `grep https://sub.store -rl /git/dist`

WORKDIR /Sub-Store

ENTRYPOINT ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
