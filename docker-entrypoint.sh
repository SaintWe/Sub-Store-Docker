#!/bin/sh

set -e

rm -rf /git/public

cp -r /git/dist /git/public

sed -i "s|https://sub.store|${DOMAIN:-/}|g" `grep https://sub.store -rl /git/public`

/usr/bin/supervisord -c /etc/supervisor/supervisord.conf

exec "$@"
