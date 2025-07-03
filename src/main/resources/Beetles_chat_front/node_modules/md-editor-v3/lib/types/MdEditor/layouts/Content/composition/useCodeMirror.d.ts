import { ContentProps } from '../props';
import CodeMirrorUt from '../codemirror';
/**
 * 文本编辑区组件
 *
 * @param props
 * @returns
 */
declare const useCodeMirror: (props: ContentProps) => {
    inputWrapperRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    codeMirrorUt: import("vue").ShallowRef<CodeMirrorUt | undefined, CodeMirrorUt | undefined>;
    resetHistory(): void;
};
export default useCodeMirror;
