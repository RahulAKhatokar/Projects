Remote Home Server Setup using Phone + Tailscale
 

# Remote Home Server using Android (Termux) + Tailscale

## 📌 Overview

This project demonstrates how to turn an Android phone into a remote-accessible server using:

- Termux (Linux environment on Android)
- SSH (Secure Shell)
- Tailscale (VPN-based private networking)

The goal was to:
- Access the phone from anywhere
- Transfer files securely
- Host a simple server

-----------------------------------------------------------------------------------------------------------------------------------------------------


## 🏗️ Architecture
📱 Android Phone (Server)
├── Termux
├── SSH Server (Port 8022)
└── Tailscale VPN
    ⇅ (Private Network via Tailscale)
💻 Laptop (Client)
├── SSH Client
└── Tailscale VPN
-----------------------------------------------------------------------------------------------------------------------------------------------------

## ⚙️ Setup Steps

### 1️⃣ Install Termux on Android

- Install Termux
- Update packages:

```bash
pkg update && pkg upgrade
-----------------------------------------------------------------------------------------------------------------------------------------------------
2️⃣ Install SSH in Termux
pkg install openssh
Start SSH server:
sshd
Default:
•	Port: 8022
•	Username: u0_aXXX
-----------------------------------------------------------------------------------------------------------------------------------------------------
3️⃣ Install Tailscale
On Phone:
•	Install Tailscale app
•	Login (Google/GitHub)
•	Enable VPN
On Laptop:
•	Install Tailscale
•	Login with same account
•	Connect
-----------------------------------------------------------------------------------------------------------------------------------------------------
4️⃣ Get Phone IP
From Tailscale:
100.x.x.x
-----------------------------------------------------------------------------------------------------------------------------------------------------
5️⃣ Connect via SSH
ssh -p 8022 u0_aXXX@100.x.x.x
-----------------------------------------------------------------------------------------------------------------------------------------------------
🔐 File Transfer
📤 Laptop → Phone
scp -P 8022 file.txt u0_aXXX@100.x.x.x:~
-----------------------------------------------------------------------------------------------------------------------------------------------------
📥 Phone → Laptop
scp -P 8022 u0_aXXX@100.x.x.x:"~/storage/shared/ringtones/file.mp3" .
-----------------------------------------------------------------------------------------------------------------------------------------------------
📂 Access Android Storage
Enable storage access:
termux-setup-storage
Access:
cd ~/storage/shared
-----------------------------------------------------------------------------------------------------------------------------------------------------
🌐 Run a Simple Server
python3 -m http.server 8000
Access from laptop:
http://100.x.x.x:8000
-----------------------------------------------------------------------------------------------------------------------------------------------------
🎧 Play Media via Terminal
Install player:
pkg install mpv
Play file:
mpv "filename.mp3"
-----------------------------------------------------------------------------------------------------------------------------------------------------
🧠 Challenges Faced & Fixes
❌ 1. SSH Connection Timeout
Cause: Tailscale not connected
Fix: Ensure both devices are connected to Tailscale
❌ 2. Connection Refused
Cause: SSH server not running
Fix:
sshd
❌ 3. Permission Denied (/ directory)
Cause: Android sandbox restriction
Fix: Use Termux home directory (~)
❌ 4. termux-setup-storage not working
Cause: Storage permission not granted
Fix:
•	Enable permission manually in Android settings
•	Restart Termux
❌ 5. Filename issues (spaces, special characters)
Cause: Bash parsing errors
Fix:
mpv "file name with spaces.mp3"
❌ 6. SCP File Not Found
Cause: Incorrect path or filename
Fix:
•	Use ls to verify
•	Use quotes "..."
-----------------------------------------------------------------------------------------------------------------------------------------------------
🔥 Key Learnings
•	NAT prevents direct access → solved using VPN
•	Tailscale creates a private network across internet
•	SSH enables secure remote access
•	SCP enables secure file transfer
•	Android has restricted root access (no real sudo)
-----------------------------------------------------------------------------------------------------------------------------------------------------
🚀 Future Improvements
•	Public access using tunneling (ngrok)
•	Host APIs (Flask / FastAPI)
•	Custom domain setup
•	Auto-start SSH server
•	File sync automation
-----------------------------------------------------------------------------------------------------------------------------------------------------
🏁 Conclusion
This project successfully demonstrates:
•	Remote access to a device behind NAT
•	Secure communication using SSH
•	File transfer across networks
•	Hosting services from a mobile device
-----------------------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                     👨‍💻 Author
Rahul Khatokar
