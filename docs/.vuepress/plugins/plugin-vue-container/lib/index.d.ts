import type * as Renderer from 'markdown-it/lib/renderer';
import type * as Token from 'markdown-it/lib/token';
import type { LocaleConfig } from '@vuepress/shared';
import type { MarkdownEnv } from '@vuepress/markdown';
import type { Plugin } from '@vuepress/core';
/**
 * Options for markdown-it-container
 */
export interface MarkdownItContainerOptions {
    marker?: string;
    validate?: (params: string) => boolean;
    render?: MarkdownItContainerRenderFunction;
}
export declare type MarkdownItContainerRenderFunction = (tokens: Token[], index: number, options: any, env: MarkdownEnv, self: Renderer) => string;
export declare type RenderPlaceFunction = (info: string) => string;
/**
 * Options for @vuepress/plugin-container
 */
export interface ContainerPluginOptions extends MarkdownItContainerOptions {
    type: string;
    locales?: LocaleConfig<{
        defaultInfo: string;
    }>;
    before?: RenderPlaceFunction;
    after?: RenderPlaceFunction;
}
export declare const containerPlugin: Plugin<ContainerPluginOptions>;
export default containerPlugin;
//# sourceMappingURL=index.d.ts.map