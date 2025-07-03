import { VNode } from 'vue';
import { Themes } from '../MdEditor/type';
declare const _default: import("vue").DefineComponent<{
    readonly title: string;
    readonly onChange: ((visible: boolean) => void) | undefined;
    readonly insert: (() => void) | undefined;
    readonly language: string | undefined;
    readonly disabled: boolean | undefined;
    readonly showToolbarName: boolean | undefined;
    readonly theme: Themes | undefined;
    readonly previewTheme: string | undefined;
    readonly codeTheme: string | undefined;
    readonly overlay: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    readonly visible: boolean | undefined;
    readonly trigger: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onChange"[], "onChange", import("vue").PublicProps, Readonly<{
    readonly title: string;
    readonly onChange: ((visible: boolean) => void) | undefined;
    readonly insert: (() => void) | undefined;
    readonly language: string | undefined;
    readonly disabled: boolean | undefined;
    readonly showToolbarName: boolean | undefined;
    readonly theme: Themes | undefined;
    readonly previewTheme: string | undefined;
    readonly codeTheme: string | undefined;
    readonly overlay: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    readonly visible: boolean | undefined;
    readonly trigger: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
}> & Readonly<{
    onOnChange?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    onChange: (visible: boolean) => void;
    insert: () => void;
    language: string;
    disabled: boolean;
    showToolbarName: boolean;
    theme: Themes;
    previewTheme: string;
    codeTheme: string;
    overlay: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    visible: boolean;
    trigger: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
