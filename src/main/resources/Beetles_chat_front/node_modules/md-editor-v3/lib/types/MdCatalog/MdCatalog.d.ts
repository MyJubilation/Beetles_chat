import { HeadList, MdHeadingId, Themes } from '../MdEditor/type';
export interface TocItem extends HeadList {
    index: number;
    children?: Array<TocItem>;
}
declare const MdCatalog: import("vue").DefineComponent<{
    readonly class: string;
    readonly theme: Themes;
    readonly mdHeadingId: MdHeadingId;
    readonly offsetTop: number;
    readonly scrollElementOffsetTop: number;
    readonly isScrollElementInShadow: boolean;
    readonly syncWith: "preview" | "editor";
    readonly onClick: ((e: MouseEvent, t: TocItem) => void) | undefined;
    readonly catalogMaxDepth: number | undefined;
    readonly editorId: string | undefined;
    readonly onActive: ((heading: HeadList | undefined, activeElement: HTMLDivElement) => void) | undefined;
    readonly scrollElement: string | HTMLElement | undefined;
}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onClick" | "onActive")[], "onClick" | "onActive", import("vue").PublicProps, Readonly<{
    readonly class: string;
    readonly theme: Themes;
    readonly mdHeadingId: MdHeadingId;
    readonly offsetTop: number;
    readonly scrollElementOffsetTop: number;
    readonly isScrollElementInShadow: boolean;
    readonly syncWith: "preview" | "editor";
    readonly onClick: ((e: MouseEvent, t: TocItem) => void) | undefined;
    readonly catalogMaxDepth: number | undefined;
    readonly editorId: string | undefined;
    readonly onActive: ((heading: HeadList | undefined, activeElement: HTMLDivElement) => void) | undefined;
    readonly scrollElement: string | HTMLElement | undefined;
}> & Readonly<{
    onOnClick?: ((...args: any[]) => any) | undefined;
    onOnActive?: ((...args: any[]) => any) | undefined;
}>, {
    onClick: (e: MouseEvent, t: TocItem) => void;
    class: string;
    catalogMaxDepth: number;
    theme: Themes;
    editorId: string;
    mdHeadingId: MdHeadingId;
    offsetTop: number;
    onActive: (heading: HeadList | undefined, activeElement: HTMLDivElement) => void;
    scrollElementOffsetTop: number;
    scrollElement: string | HTMLElement;
    isScrollElementInShadow: boolean;
    syncWith: "preview" | "editor";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default MdCatalog;
