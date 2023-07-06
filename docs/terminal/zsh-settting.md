
# zsh 插件配置
>  [WSL（适用于 Linux 的 Windows 子系统）](https://docs.microsoft.com/zh-cn/windows/wsl/about)

命令自动提示插件：zsh-autosuggestions
```
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

代码高亮插件：zsh-syntax-highlighting
```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

然后 `vi ~/.zshrc`中找到plugins 添加
```
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```
重启终端

终端目录中主机名替换
`vi ~/.oh-my-zsh/themes/agnoster.zsh-theme`
```bash
# Context: user@hostname (who am I and where am I)
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
#    prompt_segment black default "%(!.%{%{yellow}%}.)%n@%m"
     prompt_segment black default "☭"
  fi
}
```
