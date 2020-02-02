---
title: xss
lang : zh=CN
date: 2013/7/13 20:46:25
slug: home
---
<!-- more -->

# 整理自用的win10命令行终端打造

## Windows 安装和配置 WSL
>Windows Subsystem for Linux（简称WSL）是一个为在Windows 10上能够原生运行Linux二进制可执行文件（ELF格式）的兼容层。

1. 启用或关闭Windows功能
> 首先在搜索栏中搜索并打开“启用或关闭Windows功能”，勾选“适用于Linux的Windows子系统”项。只有开启这项设置才能正常安装WSL。
2. 安装 WSL
在微软应用商店搜索 Linux，可以看到一系列 Linux 发行版，根据自己需要选择适合自己的发行版，这里我选用 Ubuntu 18.04 LTS，下载完成后启动，等待安装完成，输入账户和密码，我们便得到了一个 Linux 环境了。

## 启用“适用于Linux的Windows子系统(WSL)”
>搜索打开“启用或关闭Windows功能”，向下滚动列表，即可看到“适用于Linux的Windows子系统(Beta)”项。

## zsh 安装
``` shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
## zsh 配置

```shell
vi ~/.zshrc //打开编辑配置

```

## on-my-zsh安装

### 自动提示插件 zsh-autosuggestions

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

```bash
~/.zshrc
plugins=(zsh-autosuggestions)
```
### 语法高亮插件 zsh-syntax-highlighting
```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

```


## zsh 主题powerlevel10k安装

```bash
git clone https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```


## 生成ssh-key [链接](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)
```bash
source ~/.zshrc // 编辑完成加载配置并生效

cd ~/.ssh 切换到sshkey目录，查看有没有key文件
```

## VSCode 中切换默认终端（PowerShell、CMD、WSL等）

快捷键(Ctrl+Shift+P) 中,输入select选择第一条：Terminal:Slect Default Shell

## ubuntu 安装 nodejs

```bash  
sudo apt update -y //本地安装
//sudo apt-get install nodejs //网络获取安装包安装
sudo apt install -y nodejs

sudo apt-get install npm 
sudo npm install n -g
sudo n stable
//安装完重启终端

```

```shell
n                              显示已安装的Node版本
n latest                       安装最新版本Node
n stable                       安装最新稳定版Node
n lts                          安装最新长期维护版(lts)Node
n <version>                    根据提供的版本号安装Node</pre>
//安装后，切换版本：
sudo n           方向键选择已安装的 node 版本，然后回车确认
node -v          检查当期版本
```

## 常见Issue

### 

```shell
+ ZSH_DISABLE_COMPFIX=true

source $ZSH/oh-my-zsh.sh
```