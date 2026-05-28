#!/data/data/com.termux/files/usr/bin/sh
cd /data/data/com.termux/files/home/Hangouts
node backend/server.js &
sleep 3
rm -f ~/Hangouts/cloudflared.log
cloudflared tunnel --url http://localhost:3000 --logfile ~/Hangouts/cloudflared.log &
sleep 15
TUNNEL_URL=$(grep -o 'https://[a-z0-9-]*\.trycloudflare\.com' ~/Hangouts/cloudflared.log | head -1)
echo $TUNNEL_URL > ~/Hangouts/current-url.txt
echo "Your app is live at: $TUNNEL_URL"
