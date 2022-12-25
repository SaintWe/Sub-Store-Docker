#!/bin/sh

set -e

if [ -n $DOMAIN ]; then
    rm -rf /git/public
    cp -r /git/dist /git/public
    sed -i "s|https://sub.store|${DOMAIN}|g" `grep https://sub.store -rl /git/public`
    cp /git/frontend/Caddyfile /etc/caddy/Caddyfile
else
    cp /git/backend/Caddyfile /etc/caddy/Caddyfile
fi

/usr/bin/supervisord -c /etc/supervisor/supervisord.conf

exec "$@"
