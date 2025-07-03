import { VNode, CSSProperties } from 'vue';
import { Themes } from '../MdEditor/type';
declare const _default: import("vue").DefineComponent<{
    readonly title: string;
    readonly height: string;
    readonly width: string;
    readonly showAdjust: boolean;
    readonly isFullscreen: boolean;
    readonly showMask: boolean;
    readonly modalTitle: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    readonly style: string | CSSProperties | undefined;
    readonly onClick: (() => void) | undefined;
    readonly class: string | undefined;
    readonly onClose: (() => void) | undefined;
    readonly insert: (() => void) | undefined;
    readonly language: string | undefined;
    readonly disabled: boolean | undefined;
    readonly showToolbarName: boolean | undefined;
    readonly theme: Themes | undefined;
    readonly previewTheme: string | undefined;
    readonly codeTheme: string | undefined;
    readonly visible: boolean | undefined;
    readonly onAdjust: ((val: boolean) => void) | undefined;
    readonly trigger: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onClick" | "onClose" | "onAdjust")[], "onClick" | "onClose" | "onAdjust", import("vue").PublicProps, Readonly<{
    readonly title: string;
    readonly height: string;
    readonly width: string;
    readonly showAdjust: boolean;
    readonly isFullscreen: boolean;
    readonly showMask: boolean;
    readonly modalTitle: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    readonly style: string | CSSProperties | undefined;
    readonly onClick: (() => void) | undefined;
    readonly class: string | undefined;
    readonly onClose: (() => void) | undefined;
    readonly insert: (() => void) | undefined;
    readonly language: string | undefined;
    readonly disabled: boolean | undefined;
    readonly showToolbarName: boolean | undefined;
    readonly theme: Themes | undefined;
    readonly previewTheme: string | undefined;
    readonly codeTheme: string | undefined;
    readonly visible: boolean | undefined;
    readonly onAdjust: ((val: boolean) => void) | undefined;
    readonly trigger: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
}> & Readonly<{
    onOnClose?: ((...args: any[]) => any) | undefined;
    onOnClick?: ((...args: any[]) => any) | undefined;
    onOnAdjust?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    style: string | CSSProperties;
    onClick: () => void;
    class: string;
    height: string;
    width: string;
    onClose: () => void;
    insert: () => void;
    language: string;
    disabled: boolean;
    showToolbarName: boolean;
    theme: Themes;
    previewTheme: string;
    codeTheme: string;
    visible: boolean;
    showAdjust: boolean;
    isFullscreen: boolean;
    onAdjust: (val: boolean) => void;
    showMask: boolean;
    trigger: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    modalTitle: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
