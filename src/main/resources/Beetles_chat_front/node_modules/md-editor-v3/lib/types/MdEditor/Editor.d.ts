declare const Editor: import("vue").DefineComponent<{
    readonly preview: boolean;
    readonly pageFullscreen: boolean;
    readonly htmlPreview: boolean;
    readonly style: string | import("vue").CSSProperties;
    readonly class: string;
    readonly language: string;
    readonly toolbars: import("./type").ToolbarNames[];
    readonly toolbarsExclude: import("./type").ToolbarNames[];
    readonly noPrettier: boolean;
    readonly tabWidth: number;
    readonly tableShape: number[];
    readonly placeholder: string;
    readonly footers: import("./type").Footers[];
    readonly scrollAuto: boolean;
    readonly noUploadImg: boolean;
    readonly autoFocus: boolean;
    readonly disabled: boolean;
    readonly readOnly: boolean;
    readonly autoDetectCode: boolean;
    readonly showToolbarName: boolean;
    readonly inputBoxWidth: string;
    readonly transformImgUrl: (t: string) => string | Promise<string>;
    readonly catalogLayout: "fixed" | "flat";
    readonly insertLinkDirect: boolean;
    readonly modelValue: string;
    readonly theme: import("./type").Themes;
    readonly showCodeRowNumber: boolean;
    readonly previewTheme: string;
    readonly mdHeadingId: import("./type").MdHeadingId;
    readonly sanitize: (html: string) => string;
    readonly noMermaid: boolean;
    readonly noKatex: boolean;
    readonly codeTheme: string;
    readonly formatCopiedText: (text: string) => string;
    readonly codeStyleReverse: boolean;
    readonly codeStyleReverseList: string[];
    readonly noHighlight: boolean;
    readonly noImgZoomIn: boolean;
    readonly customIcon: {
        bold?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        underline?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        italic?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "strike-through"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        title?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        sub?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        sup?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        quote?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "unordered-list"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "ordered-list"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        task?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "code-row"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        code?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        link?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        image?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        table?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        revoke?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        next?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        save?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        prettier?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        minimize?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        maximize?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "fullscreen-exit"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        fullscreen?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "preview-only"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        preview?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "preview-html"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        catalog?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        github?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        mermaid?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        formula?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        close?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        delete?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        upload?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
    } & import("./type").CustomStrIcon;
    readonly sanitizeMermaid: (h: string) => Promise<string>;
    readonly codeFoldable: boolean;
    readonly autoFoldThreshold: number;
    readonly onChange: import("./type").ChangeEvent | undefined;
    readonly onSave: import("./type").SaveEvent | undefined;
    readonly onUploadImg: import("./type").UploadImgEvent | undefined;
    readonly onHtmlChanged: import("./type").HtmlChangedEvent | undefined;
    readonly onGetCatalog: import("./type").GetCatalogEvent | undefined;
    readonly onError: import("./type").ErrorEvent | undefined;
    readonly onBlur: ((event: FocusEvent) => void) | undefined;
    readonly onFocus: ((event: FocusEvent) => void) | undefined;
    readonly onInput: ((event: Event) => void) | undefined;
    readonly onDrop: ((event: DragEvent) => void) | undefined;
    readonly oninputBoxWidthChange: ((width: string) => void) | undefined;
    readonly onRemount: (() => void) | undefined;
    readonly id: string | undefined;
    readonly defToolbars: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    readonly defFooters: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    readonly maxLength: number | undefined;
    readonly completions: import("@codemirror/autocomplete").CompletionSource[] | undefined;
    readonly catalogMaxDepth: number | undefined;
    readonly editorId: string | undefined;
}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("./type").EditorEmits, "onChange" | "onSave" | "onUploadImg" | "onHtmlChanged" | "onGetCatalog" | "onError" | "update:modelValue" | "onBlur" | "onFocus" | "onInput" | "onDrop" | "oninputBoxWidthChange" | "onRemount", import("vue").PublicProps, Readonly<{
    readonly preview: boolean;
    readonly pageFullscreen: boolean;
    readonly htmlPreview: boolean;
    readonly style: string | import("vue").CSSProperties;
    readonly class: string;
    readonly language: string;
    readonly toolbars: import("./type").ToolbarNames[];
    readonly toolbarsExclude: import("./type").ToolbarNames[];
    readonly noPrettier: boolean;
    readonly tabWidth: number;
    readonly tableShape: number[];
    readonly placeholder: string;
    readonly footers: import("./type").Footers[];
    readonly scrollAuto: boolean;
    readonly noUploadImg: boolean;
    readonly autoFocus: boolean;
    readonly disabled: boolean;
    readonly readOnly: boolean;
    readonly autoDetectCode: boolean;
    readonly showToolbarName: boolean;
    readonly inputBoxWidth: string;
    readonly transformImgUrl: (t: string) => string | Promise<string>;
    readonly catalogLayout: "fixed" | "flat";
    readonly insertLinkDirect: boolean;
    readonly modelValue: string;
    readonly theme: import("./type").Themes;
    readonly showCodeRowNumber: boolean;
    readonly previewTheme: string;
    readonly mdHeadingId: import("./type").MdHeadingId;
    readonly sanitize: (html: string) => string;
    readonly noMermaid: boolean;
    readonly noKatex: boolean;
    readonly codeTheme: string;
    readonly formatCopiedText: (text: string) => string;
    readonly codeStyleReverse: boolean;
    readonly codeStyleReverseList: string[];
    readonly noHighlight: boolean;
    readonly noImgZoomIn: boolean;
    readonly customIcon: {
        bold?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        underline?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        italic?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "strike-through"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        title?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        sub?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        sup?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        quote?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "unordered-list"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "ordered-list"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        task?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "code-row"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        code?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        link?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        image?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        table?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        revoke?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        next?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        save?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        prettier?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        minimize?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        maximize?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "fullscreen-exit"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        fullscreen?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "preview-only"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        preview?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        "preview-html"?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        catalog?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        github?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        mermaid?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        formula?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        close?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        delete?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
        upload?: {
            component: import("vue").Component | import("vue").VNode | string;
            props?: {
                [key: string | number | symbol]: any;
            };
        } | undefined;
    } & import("./type").CustomStrIcon;
    readonly sanitizeMermaid: (h: string) => Promise<string>;
    readonly codeFoldable: boolean;
    readonly autoFoldThreshold: number;
    readonly onChange: import("./type").ChangeEvent | undefined;
    readonly onSave: import("./type").SaveEvent | undefined;
    readonly onUploadImg: import("./type").UploadImgEvent | undefined;
    readonly onHtmlChanged: import("./type").HtmlChangedEvent | undefined;
    readonly onGetCatalog: import("./type").GetCatalogEvent | undefined;
    readonly onError: import("./type").ErrorEvent | undefined;
    readonly onBlur: ((event: FocusEvent) => void) | undefined;
    readonly onFocus: ((event: FocusEvent) => void) | undefined;
    readonly onInput: ((event: Event) => void) | undefined;
    readonly onDrop: ((event: DragEvent) => void) | undefined;
    readonly oninputBoxWidthChange: ((width: string) => void) | undefined;
    readonly onRemount: (() => void) | undefined;
    readonly id: string | undefined;
    readonly defToolbars: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    readonly defFooters: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    readonly maxLength: number | undefined;
    readonly completions: import("@codemirror/autocomplete").CompletionSource[] | undefined;
    readonly catalogMaxDepth: number | undefined;
    readonly editorId: string | undefined;
}> & Readonly<{
    onOnChange?: ((...args: any[]) => any) | undefined;
    onOnSave?: ((...args: any[]) => any) | undefined;
    onOnUploadImg?: ((...args: any[]) => any) | undefined;
    onOnHtmlChanged?: ((...args: any[]) => any) | undefined;
    onOnGetCatalog?: ((...args: any[]) => any) | undefined;
    onOnError?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOnBlur?: ((...args: any[]) => any) | undefined;
    onOnFocus?: ((...args: any[]) => any) | undefined;
    onOnInput?: ((...args: any[]) => any) | undefined;
    onOnDrop?: ((...args: any[]) => any) | undefined;
    onOninputBoxWidthChange?: ((...args: any[]) => any) | undefined;
    onOnRemount?: ((...args: any[]) => any) | undefined;
}>, {
    preview: boolean;
    pageFullscreen: boolean;
    htmlPreview: boolean;
    onChange: import("./type").ChangeEvent;
    onSave: import("./type").SaveEvent;
    onUploadImg: import("./type").UploadImgEvent;
    onHtmlChanged: import("./type").HtmlChangedEvent;
    onGetCatalog: import("./type").GetCatalogEvent;
    onError: import("./type").ErrorEvent;
    onBlur: (event: FocusEvent) => void;
    onFocus: (event: FocusEvent) => void;
    onInput: (event: Event) => void;
    onDrop: (event: DragEvent) => void;
    oninputBoxWidthChange: (width: string) => void;
    onRemount: () => void;
    style: string | import("vue").CSSProperties;
    class: string;
    id: string;
    language: string;
    toolbars: import("./type").ToolbarNames[];
    toolbarsExclude: import("./type").ToolbarNames[];
    noPrettier: boolean;
    tabWidth: number;
    tableShape: number[];
    placeholder: string;
    defToolbars: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    footers: import("./type").Footers[];
    scrollAuto: boolean;
    defFooters: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    noUploadImg: boolean;
    autoFocus: boolean;
    disabled: boolean;
    readOnly: boolean;
    maxLength: number;
    autoDetectCode: boolean;
    completions: import("@codemirror/autocomplete").CompletionSource[];
    showToolbarName: boolean;
    inputBoxWidth: string;
    transformImgUrl: (t: string) => string | Promise<string>;
    catalogLayout: "fixed" | "flat";
    catalogMaxDepth: number;
    insertLinkDirect: boolean;
    modelValue: string;
    theme: import("./type").Themes;
    editorId: string;
    showCodeRowNumber: boolean;
    previewTheme: string;
    mdHeadingId: import("./type").MdHeadingId;
    sanitize: (html: string) => string;
    noMermaid: boolean;
    noKatex: boolean;
    codeTheme: string;
    formatCopiedText: (text: string) => string;
    codeStyleReverse: boolean;
    codeStyleReverseList: string[];
    noHighlight: boolean;
    noImgZoomIn: boolean;
    customIcon: import("./type").CustomIcon;
    sanitizeMermaid: (h: string) => Promise<string>;
    codeFoldable: boolean;
    autoFoldThreshold: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default Editor;
