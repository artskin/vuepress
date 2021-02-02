"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vueContainerPlugin = void 0;
const container = require("markdown-it-container");
const utils_1 = require("@vuepress/utils");
const shared_1 = require("@vuepress/shared");

const vueContainerPlugin = ({ 
// plugin options
type, after, before, locales, 
// raw options for markdown-it-container
validate, marker, render, }) => {
  console.log('vue-demo',type)
    const pluginObj = {
      name: 'vue-container',
      multiple: true,
    };
    // `type` option is required
    if (!type) {
      utils_1.logger.warn(`[${pluginObj.name}] ${utils_1.chalk.magenta('type')} option is required`);
      return pluginObj;
    }
    // if `render` option is not specified
    // use `before` and `after` to generate render function
    if (!render) {
        let renderBefore;
        let renderAfter;
        if (before !== undefined && after !== undefined) {
          // user defined
          renderBefore = before;
          renderAfter = after;
        }
        else {
          // fallback
          renderBefore = (info) => `<div class="custom-container ${type}">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`;
          renderAfter = () => '</div>\n';
        }
        // token info stack
        const infoStack = [];
        render = (tokens, index, opts, env) => {
            var _a;
            const token = tokens[index];
            console.log(token)
            if (token.nesting === 1) {
                // `before` tag
                // resolve info (title)
                let info = token.info.trim().slice(type.length).trim();
                if (!info && locales) {
                    // locale
                    const { filePathRelative } = env;
                    const relativePath = shared_1.ensureLeadingSlash(filePathRelative !== null && filePathRelative !== void 0 ? filePathRelative : '');
                    const localePath = shared_1.resolveLocalePath(locales, relativePath);
                    const localeData = (_a = locales[localePath]) !== null && _a !== void 0 ? _a : {};
                    if (localeData.defaultInfo) {
                        info = localeData.defaultInfo;
                    }
                    else {
                        info = type.toUpperCase();
                    }
                }
                // push the info to stack
                infoStack.push(info);
                
                // render
                return renderBefore(info);
            }
            else {
                // `after` tag
                // pop the info from stack
                const info = infoStack.pop() || '';
                // render
                return renderAfter(info);
            }
        };
    }
    // use markdown-it-container
    pluginObj.extendsMarkdown = (md) => {
        md.use(container, type, { render, validate, marker });
    };
    return pluginObj;
};
exports.vueContainerPlugin = vueContainerPlugin;
exports.default = exports.vueContainerPlugin;
//# sourceMappingURL=index.js.map