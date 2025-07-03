interface HoverData {
    x: number;
    y: number;
}
declare const TableShape: import("vue").DefineComponent<{
    readonly tableShape: number[];
    readonly onSelected: (data: HoverData) => void;
}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{
    readonly tableShape: number[];
    readonly onSelected: (data: HoverData) => void;
}> & Readonly<{}>, {
    tableShape: number[];
    onSelected: (data: HoverData) => void;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default TableShape;
