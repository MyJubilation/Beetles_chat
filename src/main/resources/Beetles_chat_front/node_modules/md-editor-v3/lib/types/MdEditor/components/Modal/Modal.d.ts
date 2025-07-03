import { CSSProperties, VNode } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly title: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    readonly style: string | CSSProperties;
    readonly height: string;
    readonly width: string;
    readonly visible: boolean;
    readonly showAdjust: boolean;
    readonly isFullscreen: boolean;
    readonly onAdjust: (val: boolean) => void;
    readonly showMask: boolean;
    readonly class: string | undefined;
    readonly onClose: (() => void) | undefined;
}, () => "" | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onClose"[], "onClose", import("vue").PublicProps, Readonly<{
    readonly title: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    readonly style: string | CSSProperties;
    readonly height: string;
    readonly width: string;
    readonly visible: boolean;
    readonly showAdjust: boolean;
    readonly isFullscreen: boolean;
    readonly onAdjust: (val: boolean) => void;
    readonly showMask: boolean;
    readonly class: string | undefined;
    readonly onClose: (() => void) | undefined;
}> & Readonly<{
    onOnClose?: ((...args: any[]) => any) | undefined;
}>, {
    title: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    style: string | CSSProperties;
    class: string;
    height: string;
    width: string;
    visible: boolean;
    showAdjust: boolean;
    isFullscreen: boolean;
    onAdjust: (val: boolean) => void;
    showMask: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
