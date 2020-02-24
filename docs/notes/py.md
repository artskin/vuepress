
# python学习

## 安装
windows，直接官网下载安装

## ubuntu升级python版本

```bash
sudo apt update
sudo apt install python3.6
```

##设置python软链接
>修改系统 python3 的软链指向，指向了两个位置为python 3.5 和 3.6， 1和2是优先级
```bash
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 2
```
>切换python3的指向版本， 命令`sudo update-alternatives --config python3。`