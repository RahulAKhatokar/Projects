# 🚀 Remote Home Server using Android (Termux) + Tailscale

## 📌 Overview

This project demonstrates how to turn an Android phone into a remote-accessible server using:

- Termux (Linux environment on Android)
- SSH (Secure Shell)
- Tailscale (VPN-based private networking)

### 🎯 Goals
- Access phone from anywhere 🌍
- Transfer files securely 🔐
- Host a simple server 📡

---

## 🏗️ Architecture


📱 Android Phone (Server)
├── Termux
├── SSH Server (Port 8022)
└── Tailscale VPN

    ⇅ (Private Network via Tailscale)

💻 Laptop (Client)
├── SSH Client
└── Tailscale VPN


---

## ⚙️ Setup Steps

### 1️⃣ Install Termux

```bash
pkg update && pkg upgrade
2️⃣ Install SSH
pkg install openssh
sshd
Port: 8022
Username: u0_aXXX
3️⃣ Install Tailscale
Install on both phone & laptop
Login with same account
Connect both devices
4️⃣ Connect via SSH
ssh -p 8022 u0_aXXX@100.x.x.x
🔐 File Transfer
📤 Laptop → Phone
scp -P 8022 file.txt u0_aXXX@100.x.x.x:~
📥 Phone → Laptop
scp -P 8022 u0_aXXX@100.x.x.x:"~/storage/shared/ringtones/file.mp3" .
📂 Access Android Storage
termux-setup-storage
cd ~/storage/shared
🌐 Run a Simple Server
python3 -m http.server 8000

Access in browser:

http://100.x.x.x:8000
🎧 Play Media via Terminal
pkg install mpv
mpv "filename.mp3"
🧠 Challenges Faced & Fixes
❌ SSH Timeout

Cause: Tailscale not connected
Fix: Ensure both devices are connected

❌ Connection Refused

Cause: SSH server not running
Fix:

sshd
❌ Permission Denied (/)

Cause: Android restrictions
Fix: Use home directory (~)

❌ Storage Not Accessible

Cause: Permission not granted
Fix:

Enable storage permission manually
Restart Termux
❌ Filename Errors

Cause: Special characters / spaces
Fix:

mpv "file name.mp3"
❌ SCP File Not Found

Cause: Wrong path
Fix:

Use ls to verify
Use quotes "..."
🔥 Key Learnings
NAT blocks direct access → solved using VPN
Tailscale creates a private network
SSH enables secure remote access
SCP enables secure file transfer
Android does not support full root access
🚀 Future Improvements
🌍 Public access using tunneling
🤖 Host APIs (Flask / FastAPI)
🔗 Custom domain
⚙️ Auto-start SSH server
🔄 File sync automation
🏁 Conclusion

This project demonstrates:

Remote access to a device behind NAT
Secure communication using SSH
File transfer across networks
Hosting services from a mobile device
👨‍💻 Author

Rahul Khatokar
