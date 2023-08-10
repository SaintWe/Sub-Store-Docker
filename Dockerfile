FROM alpine:latest

ARG TARGETOS TARGETARCH

RUN apk add --no-cache nodejs npm tzdata git caddy curl supervisor && \
    rm -fr /var/cache/apk/* && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    npm install -g pnpm && \
    git clone https://github.com/sub-store-org/Sub-Store.git /Sub-Store && \
    cd /Sub-Store/backend && \
    pnpm install && \
    pnpm run build && \
    git clone https://github.com/SaintWe/Sub-Store-Docker.git /git && \
    cd /git && \
    cp --parents ./supervisor/supervisord.conf /etc/ && \
    rm -f /etc/caddy/Caddyfile && \
    rm -rf /git/.git && \
    curl -fsSLo /usr/bin/supercronic https://github.com/aptible/supercronic/releases/latest/download/supercronic-${TARGETOS}-${TARGETARCH} && \
    chmod +x /usr/bin/supercronic && \
    cp /Sub-Store/backend/sub-store.min.js /git && \
    rm -rf /Sub-Store && \
    rm -rf $(pnpm store path) && \
    npm uninstall -g pnpm && \
    apk del git tzdata npm && \
    ln -s /Sub-Store/sub-store.json /git/sub-store.json && \
    ln -s /Sub-Store/root.json /git/root.json

WORKDIR /git

ENTRYPOINT ["/bin/sh","/git/docker-entrypoint.sh" ]
