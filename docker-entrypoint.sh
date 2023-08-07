#!/bin/sh

set -e

cp /git/Caddyfile /etc/caddy/Caddyfile

if [ $DOMAIN ]; then
    rm -rf /git/public
    cp -r /git/dist /git/public
    sed -i "s|https://sub.store|${DOMAIN}|g" `grep https://sub.store -rl /git/public`
    sed -i "s|##____||g" /etc/caddy/Caddyfile
fi

if [ $BEARER_TOKEN ]; then
    sed -i "s|__api_handle__|@api_auth|g" /etc/caddy/Caddyfile
    sed -i "s|__Bearer_Token__|${BEARER_TOKEN}|g" /etc/caddy/Caddyfile
else
    sed -i "s|__api_handle__||g" /etc/caddy/Caddyfile
fi

if [ $D_TOKEN ]; then
    sed -i "s|__download_handle__|@download_auth|g" /etc/caddy/Caddyfile
    sed -i "s|__Download_Token__|${D_TOKEN}|g" /etc/caddy/Caddyfile
else
    sed -i "s|__download_handle__||g" /etc/caddy/Caddyfile
fi

/usr/bin/supervisord -c /etc/supervisor/supervisord.conf

exec "$@"
