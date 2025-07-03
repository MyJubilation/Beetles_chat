import { PropType, ExtractPropTypes } from 'vue';
import { LooseRequired } from '@vue/shared';
import { MdHeadingId } from '../MdEditor/type';
import { TocItem } from './MdCatalog';
declare const props: {
    tocItem: {
        type: PropType<TocItem>;
        default: () => {};
    };
    mdHeadingId: {
        type: PropType<MdHeadingId>;
        default: () => void;
    };
    onActive: {
        type: PropType<(tocItem: TocItem, ele: HTMLDivElement) => void>;
        default: () => void;
    };
    onClick: {
        type: PropType<(e: MouseEvent, t: TocItem) => void>;
        default: () => void;
    };
    scrollElementOffsetTop: {
        type: PropType<number>;
        default: number;
    };
};
export type CatalogLinkProps = Readonly<LooseRequired<Readonly<ExtractPropTypes<typeof props>>>>;
declare const CatalogLink: import("vue").DefineComponent<{
    readonly onClick: (e: MouseEvent, t: TocItem) => void;
    readonly mdHeadingId: MdHeadingId;
    readonly tocItem: TocItem;
    readonly onActive: (tocItem: TocItem, ele: HTMLDivElement) => void;
    readonly scrollElementOffsetTop: number;
}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{
    readonly onClick: (e: MouseEvent, t: TocItem) => void;
    readonly mdHeadingId: MdHeadingId;
    readonly tocItem: TocItem;
    readonly onActive: (tocItem: TocItem, ele: HTMLDivElement) => void;
    readonly scrollElementOffsetTop: number;
}> & Readonly<{}>, {
    onClick: (e: MouseEvent, t: TocItem) => void;
    mdHeadingId: MdHeadingId;
    tocItem: TocItem;
    onActive: (tocItem: TocItem, ele: HTMLDivElement) => void;
    scrollElementOffsetTop: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default CatalogLink;
