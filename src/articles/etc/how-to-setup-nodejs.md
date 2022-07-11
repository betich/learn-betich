---
emoji: 🚀
title: "How to install Node.js and NPM on your computer"
description: "Learn how to set up Node.js in Windows and MacOS"
section: 1
---

# How to install Node.js and NPM on your computer

## What is Node.js

Node.js คือ runtime ที่สามารถ execute โค้ด JavaScript นอก web browser ได้ (พูดง่าย ๆ คือทำให้เราสามารถรันโค้ด JavaScript ใน terminal ได้)

## But What is a Terminal?

Terminal เป็นโปรแกรมที่เพื่อป้อนคำสั่งต่าง ๆ ให้กับคอมพิวเตอร์ (เช่น รันโค้ด, เปิด server)

## 1. Install the terminal

หมายเหตุ : `Terminal` ที่ใช้จำต้องเป็น Unix-based เช่น Bash, Fish, Zsh

### MacOS

สามารถใช้โปรแกรม `Terminal` ที่มีอยู่ในเครื่องได้เลย

### Windows

ใช้โปรแกรม Git Bash ([Install](https://git-scm.com/download/win))

## 2. Install NVM (Node Version Manager)

### 1. Copy โค้ดดังกล่าวใส่ Terminal แล้วกด `Enter`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### 2. เปิดไฟล์ `~/.bashrc` แล้วเพิ่มบรรทัดดังกล่าวลงไปด้านล่างของไฟล์

วิธีเปิดไฟล์

```bash
nano ~/.bashrc
```

โค้ดที่ต้อง Copy

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

3. รัน Command `nvm install node --lts` เพื่อติดตั้ง Node.js เวอร์ชัน LTS ล่าสุด

## 3. ทดสอบการติดตั้ง

```bash
node -v
```

## Further Reading

1. [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

2. [https://learn2torials.com/a/how-to-install-nvm](https://learn2torials.com/a/how-to-install-nvm)

3. [https://docs.microsoft.com/en-us/windows/wsl/install](https://docs.microsoft.com/en-us/windows/wsl/install)

4. [https://dev.to/sloan/explain-the-difference-between-shell-console-terminal-command-line-etc-like-im-five--55cf](https://dev.to/sloan/explain-the-difference-between-shell-console-terminal-command-line-etc-like-im-five--55cf)
