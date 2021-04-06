# Ubuntu 安装最新版nodejs

#### 一、添加源后安装
重点，nodejs 的每个大版本号都有相对应的源，比如这里的 10.x.x版本的源是https://deb.nodesource.com/setup_10.x。

所以在终端执行：
```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```
如果你要安装12.x.x 的版本，只需要修改添加源地址中的数字即可

#### 二、添加源后安装

```bash
sudo apt-get install -y nodejs
``` 

#### 三、检测是否安装成功

``` bash
node -v   
==> v14.16.0 √
``` 

#### 四、安装最新 npm

```bash
sudo apt-get install npm
sudo npm install npm@latest -g 
```

#### 五、检测npm安装结果

``` bash
sudo npm -v 
==>6.14.11

npm -v 
err==>: not foundram Files/nodejs/npm: 3: 
      : not foundram Files/nodejs/npm: 5:
## 出现小插曲
```

#### 六、怎么解决呢，→软链
```zsh
which npm   
// ==>/mnt/d/Program Files/nodejs/npm
sudo which npm 
// ==>/usr/local/bin/npm


ln -s /mnt/d/Program Files/nodejs/npm /usr/local/bin/npm

```

#### 七、重启bash，检查
```
npm -v  
==> 6.14.11 √
sudo npm -v  
==> 6.14.11 √
```

大功告成
