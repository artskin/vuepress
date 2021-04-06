# Deno 安装
## WSL、linux and macOS
```
curl -fsSL https://deno.land/x/install/install.sh | sh

Error: unzip is required to install Deno (see: https://github.com/denoland/deno_install#unzip-is-required).
```
## 需安装unzip 包

```
sudo apt-get install unzip  //Ubuntu 安装unzip
```

```error
curl -fsSL https://deno.land/x/install/install.sh | sh
######################################################################## 100.0%#=#=-#  #
######################################################################## 100.0%
Archive:  /home/artskin/.deno/bin/deno.zip
  inflating: /home/artskin/.deno/bin/deno
Deno was installed successfully to /home/artskin/.deno/bin/deno
Manually add the directory to your $HOME/.bash_profile (or similar)
  export DENO_INSTALL="/home/artskin/.deno"
  export PATH="$DENO_INSTALL/bin:$PATH"
Run '/home/artskin/.deno/bin/deno --help' to get started
```
## 配置环境变量
```
vi ~/.bashrc  // 在末尾加上下边两行

export DENO_INSTALL="/home/artskin/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

```
## 运行deno
```
$ deno
Deno 1.8.0
exit using ctrl+d or close()
> 0.1+0.2
0.30000000000000004
>
```
安装成功

## deno 运行demo
`deno run https://deno.land/std/examples/welcome.ts`
```
$ deno run https://deno.land/std/examples/welcome.ts
Download https://deno.land/std/examples/welcome.ts
Warning Implicitly using latest version (0.89.0) for http://deno.land/std/examples/welcome.ts
Download https://deno.land/std@0.89.0/examples/welcome.ts
Check https://deno.land/std/examples/welcome.ts
Welcome to Deno!
```

