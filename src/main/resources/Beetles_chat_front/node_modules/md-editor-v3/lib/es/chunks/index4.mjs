import { createVNode, defineComponent, h, inject, ref, shallowRef, reactive, computed, watch, nextTick, onMounted, Teleport } from "vue";
import { p as prefix, g as globalConfig } from "./config.mjs";
import { g as getSlot } from "./vue-tsx.mjs";
import { k as keyMove } from "./dom.mjs";
import { Upload, Trash2, X, SquareSigma, ChartArea, ListTree, CodeXml, Eye, View, Expand, Shrink, Maximize2, Minimize2, SquareCode, Save, Forward, Reply, Table, Image, Link, Code, ListTodo, ListOrdered, List, Quote, Superscript, Subscript, Heading, Strikethrough, Italic, Underline, Bold } from "lucide-vue-next";
import { c as getZIndexIncrement } from "./index5.mjs";
const Github = () => createVNode("svg", {
  "xmlns": "http://www.w3.org/2000/svg",
  "viewBox": "0 0 24 24",
  "fill": "none",
  "stroke": "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "lucide lucide-github-icon"
}, [createVNode("path", {
  "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
}, null), createVNode("path", {
  "d": "M9 18c-4.51 2-5-2-7-2"
}, null)]);
const iconMaps = {
  bold: Bold,
  underline: Underline,
  italic: Italic,
  "strike-through": Strikethrough,
  title: Heading,
  sub: Subscript,
  sup: Superscript,
  quote: Quote,
  "unordered-list": List,
  "ordered-list": ListOrdered,
  task: ListTodo,
  "code-row": Code,
  code: SquareCode,
  link: Link,
  image: Image,
  table: Table,
  revoke: Reply,
  next: Forward,
  save: Save,
  prettier: SquareCode,
  minimize: Minimize2,
  maximize: Maximize2,
  "fullscreen-exit": Shrink,
  fullscreen: Expand,
  "preview-only": View,
  preview: Eye,
  "preview-html": CodeXml,
  catalog: ListTree,
  github: Github,
  mermaid: ChartArea,
  formula: SquareSigma,
  close: X,
  delete: Trash2,
  upload: Upload
};
const Icon$1 = /* @__PURE__ */ defineComponent({
  name: `${prefix}-icon-set`,
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup(props2) {
    return () => {
      return h(iconMaps[props2.name], {
        class: `${prefix}-icon`
      });
    };
  }
});
const Icon = /* @__PURE__ */ defineComponent({
  name: `${prefix}-icon`,
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup(props2) {
    const customIcon = inject("customIcon");
    return () => {
      const item = customIcon.value[props2.name];
      if (typeof item === "object") {
        return typeof item.component === "object" ? h(item.component, item.props) : createVNode("span", {
          "innerHTML": item.component
        }, null);
      }
      return createVNode(Icon$1, {
        "name": props2.name
      }, null);
    };
  }
});
const props = {
  title: {
    type: [String, Object],
    default: ""
  },
  visible: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: "auto"
  },
  height: {
    type: String,
    default: "auto"
  },
  onClose: {
    type: Function
  },
  showAdjust: {
    type: Boolean,
    default: false
  },
  isFullscreen: {
    type: Boolean,
    default: false
  },
  onAdjust: {
    type: Function,
    default: () => {
    }
  },
  class: {
    type: String,
    default: void 0
  },
  style: {
    type: [Object, String],
    default: () => ({})
  },
  showMask: {
    type: Boolean,
    default: true
  }
};
const MdModal = /* @__PURE__ */ defineComponent({
  name: "MdModal",
  props,
  emits: ["onClose"],
  setup(props2, ctx) {
    const themeRef = inject("theme");
    const rootRef = inject("rootRef");
    const modalVisible = ref(props2.visible);
    const modalClass = ref([`${prefix}-modal`]);
    const modalRef = ref();
    const modalHeaderRef = ref();
    const bodyRef = ref();
    const containerRef = shallowRef();
    let keyMoveClear = () => {
    };
    const state = reactive({
      maskStyle: {
        zIndex: -1
      },
      modalStyle: {
        zIndex: -1
      },
      initPos: {
        left: "0px",
        top: "0px"
      },
      historyPos: {
        left: "0px",
        top: "0px"
      }
    });
    const innerSize = computed(() => {
      if (props2.isFullscreen) {
        return {
          width: "100%",
          height: "100%"
        };
      } else {
        return {
          width: props2.width,
          height: props2.height
        };
      }
    });
    watch(() => props2.isFullscreen, (nVal) => {
      if (nVal) {
        keyMoveClear();
      } else {
        nextTick(() => {
          keyMoveClear = keyMove(modalHeaderRef.value, (left, top) => {
            state.initPos.left = left + "px";
            state.initPos.top = top + "px";
          });
        });
      }
    });
    watch(() => props2.visible, (nVal) => {
      if (nVal) {
        state.maskStyle.zIndex = globalConfig.editorConfig.zIndex + getZIndexIncrement();
        state.modalStyle.zIndex = globalConfig.editorConfig.zIndex + getZIndexIncrement();
        modalClass.value.push("zoom-in");
        modalVisible.value = nVal;
        nextTick(() => {
          const halfWidth = modalRef.value.offsetWidth / 2;
          const halfHeight = modalRef.value.offsetHeight / 2;
          const halfClientWidth = document.documentElement.clientWidth / 2;
          const halfClientHeight = document.documentElement.clientHeight / 2;
          state.initPos.left = halfClientWidth - halfWidth + "px";
          state.initPos.top = halfClientHeight - halfHeight + "px";
          if (!props2.isFullscreen) {
            keyMoveClear = keyMove(modalHeaderRef.value, (left, top) => {
              state.initPos.left = left + "px";
              state.initPos.top = top + "px";
            });
          }
        });
        setTimeout(() => {
          modalClass.value = modalClass.value.filter((item) => item !== "zoom-in");
        }, 140);
      } else {
        modalClass.value.push("zoom-out");
        keyMoveClear();
        setTimeout(() => {
          modalClass.value = modalClass.value.filter((item) => item !== "zoom-out");
          modalVisible.value = nVal;
        }, 130);
      }
    });
    const internalStyle = computed(() => ({
      display: modalVisible.value ? "block" : "none"
    }));
    const combinedStyle = computed(() => {
      if (typeof props2.style === "string") {
        return [props2.style, internalStyle.value].join("; ");
      } else if (props2.style instanceof Object) {
        return {
          ...internalStyle.value,
          ...props2.style
        };
      } else {
        return internalStyle.value;
      }
    });
    onMounted(() => {
      var _a;
      const rootNode = (_a = rootRef.value) == null ? void 0 : _a.getRootNode();
      bodyRef.value = rootNode instanceof Document ? document.body : rootNode;
    });
    return () => {
      const slotDefault = getSlot({
        ctx
      });
      const slotTitle = getSlot({
        props: props2,
        ctx
      }, "title");
      return bodyRef.value ? createVNode(Teleport, {
        "to": bodyRef.value
      }, {
        default: () => [createVNode("div", {
          "ref": containerRef,
          "class": `${prefix}-modal-container`,
          "data-theme": themeRef.value
        }, [createVNode("div", {
          "class": props2.class,
          "style": combinedStyle.value
        }, [props2.showMask && createVNode("div", {
          "class": `${prefix}-modal-mask`,
          "style": state.maskStyle,
          "onClick": () => {
            var _a;
            (_a = props2.onClose) == null ? void 0 : _a.call(props2);
            ctx.emit("onClose");
          }
        }, null), createVNode("div", {
          "class": modalClass.value,
          "style": {
            ...state.modalStyle,
            ...state.initPos,
            ...innerSize.value
          },
          "ref": modalRef
        }, [createVNode("div", {
          "class": `${prefix}-modal-header`,
          "ref": modalHeaderRef
        }, [slotTitle || ""]), createVNode("div", {
          "class": `${prefix}-modal-body`
        }, [slotDefault]), createVNode("div", {
          "class": `${prefix}-modal-func`
        }, [props2.showAdjust && createVNode("div", {
          "class": `${prefix}-modal-adjust`,
          "onClick": (e) => {
            e.stopPropagation();
            if (!props2.isFullscreen) {
              state.historyPos = state.initPos;
              state.initPos = {
                left: "0",
                top: "0"
              };
            } else {
              state.initPos = state.historyPos;
            }
            props2.onAdjust(!props2.isFullscreen);
          }
        }, [createVNode(Icon, {
          "name": props2.isFullscreen ? "minimize" : "maximize"
        }, null)]), createVNode("div", {
          "class": `${prefix}-modal-close`,
          "onClick": (e) => {
            var _a;
            e.stopPropagation();
            (_a = props2.onClose) == null ? void 0 : _a.call(props2);
            ctx.emit("onClose");
          }
        }, [createVNode(Icon, {
          "name": "close"
        }, null)])])])])])]
      }) : "";
    };
  }
});
MdModal.install = (app) => {
  app.component(MdModal.name, MdModal);
  return app;
};
export {
  Icon as I,
  MdModal as M
};
