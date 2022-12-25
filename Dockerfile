FROM alpine:latest

ARG TARGETOS TARGETARCH

RUN apk add --no-cache nodejs npm tzdata git caddy curl supervisor && \
    rm -fr /var/cache/apk/* && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    npm install -g pnpm && \
    git clone https://github.com/sub-store-org/Sub-Store.git /Sub-Store && \
    rm -rf /Sub-Store/.git && \
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
    apk del git tzdata

WORKDIR /Sub-Store

ENTRYPOINT ["/bin/sh","/git/docker-entrypoint.sh" ]
