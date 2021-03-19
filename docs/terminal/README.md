# 终端常用命令

## git 强制更新
```bash
# 强制更新到远程分支版本
git fetch --all && git reset --hard origin/v1.0.0 && git pull

```

## Linux(ubuntu)设置默认shell
```bash
# 设置zsh默认
chsh -s /bin/zsh
# 恢复bash
chsh -s /bin/bash  

```
## Linux 文件权限
> 在linux终端先输入ll,可以看到如: 
-rwxrwxrwx (一共10个参数) 表示文件所属组和用户的对应权限。

![markdown](https://gudong.im/assets/images/ll.png "linx命令")


| -             | rwx       |  rwx     |rwx         |
| --------      | :-----:    | :-----: |----:       |
| 第1位         | 2~4位     | 5~7位    | 8~10位      |
| 管理员权限    | user权限  | group权限 | others:权限 |


| 符号      | 含义   | 对应数字 |
| ---------| -----:| -----:|
| r        |    可读 |  4   |
| w        |   可写  |  2   |
| x        |  可执行 |  1   |

综合起来：可读可执行
| 符号      | 含义          | 对应数字 |
| ---------|          -----:| -----:|
| rx        |    可读+可执行 |  5    |
| rw        |   可读+可写    |  6    |
| x         |可读+可写+可执行 |  7     |

```bash
chmod 755 /home/art/.zsh/
# 755 代表 rwxr-xr-x  (文件所有者可读可写可执行,与文件所有者同属一个用户组的其他用户可读可执行,其它用户组可读可执行)

chmod 777 /home/ 
# 777 代表 rwxr-rwx-rwx //(所有用户都可读可写可执行)

```

git 修改 远程仓库地址

```
vim .git/config
或
git remote set-url origin git@gitlab.sz.sensetime.com:fe/sense-aix.git

git pull origin master --allow-unrelated-histories
git pull
//处理merge信息
git push

# 如果有其他分支
git checkout dev
git push origin local_branch:dev


```
