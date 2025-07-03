"use strict";
const vue = require("vue");
const config = require("./config.cjs");
const vueTsx = require("./vue-tsx.cjs");
const dom = require("./dom.cjs");
const lucideVueNext = require("lucide-vue-next");
const index = require("./index5.cjs");
const Github = () => vue.createVNode("svg", {
  "xmlns": "http://www.w3.org/2000/svg",
  "viewBox": "0 0 24 24",
  "fill": "none",
  "stroke": "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "lucide lucide-github-icon"
}, [vue.createVNode("path", {
  "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
}, null), vue.createVNode("path", {
  "d": "M9 18c-4.51 2-5-2-7-2"
}, null)]);
const iconMaps = {
  bold: lucideVueNext.Bold,
  underline: lucideVueNext.Underline,
  italic: lucideVueNext.Italic,
  "strike-through": lucideVueNext.Strikethrough,
  title: lucideVueNext.Heading,
  sub: lucideVueNext.Subscript,
  sup: lucideVueNext.Superscript,
  quote: lucideVueNext.Quote,
  "unordered-list": lucideVueNext.List,
  "ordered-list": lucideVueNext.ListOrdered,
  task: lucideVueNext.ListTodo,
  "code-row": lucideVueNext.Code,
  code: lucideVueNext.SquareCode,
  link: lucideVueNext.Link,
  image: lucideVueNext.Image,
  table: lucideVueNext.Table,
  revoke: lucideVueNext.Reply,
  next: lucideVueNext.Forward,
  save: lucideVueNext.Save,
  prettier: lucideVueNext.SquareCode,
  minimize: lucideVueNext.Minimize2,
  maximize: lucideVueNext.Maximize2,
  "fullscreen-exit": lucideVueNext.Shrink,
  fullscreen: lucideVueNext.Expand,
  "preview-only": lucideVueNext.View,
  preview: lucideVueNext.Eye,
  "preview-html": lucideVueNext.CodeXml,
  catalog: lucideVueNext.ListTree,
  github: Github,
  mermaid: lucideVueNext.ChartArea,
  formula: lucideVueNext.SquareSigma,
  close: lucideVueNext.X,
  delete: lucideVueNext.Trash2,
  upload: lucideVueNext.Upload
};
const Icon$1 = /* @__PURE__ */ vue.defineComponent({
  name: `${config.prefix}-icon-set`,
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup(props2) {
    return () => {
      return vue.h(iconMaps[props2.name], {
        class: `${config.prefix}-icon`
      });
    };
  }
});
const Icon = /* @__PURE__ */ vue.defineComponent({
  name: `${config.prefix}-icon`,
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup(props2) {
    const customIcon = vue.inject("customIcon");
    return () => {
      const item = customIcon.value[props2.name];
      if (typeof item === "object") {
        return typeof item.component === "object" ? vue.h(item.component, item.props) : vue.createVNode("span", {
          "innerHTML": item.component
        }, null);
      }
      return vue.createVNode(Icon$1, {
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
const MdModal = /* @__PURE__ */ vue.defineComponent({
  name: "MdModal",
  props,
  emits: ["onClose"],
  setup(props2, ctx) {
    const themeRef = vue.inject("theme");
    const rootRef = vue.inject("rootRef");
    const modalVisible = vue.ref(props2.visible);
    const modalClass = vue.ref([`${config.prefix}-modal`]);
    const modalRef = vue.ref();
    const modalHeaderRef = vue.ref();
    const bodyRef = vue.ref();
    const containerRef = vue.shallowRef();
    let keyMoveClear = () => {
    };
    const state = vue.reactive({
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
    const innerSize = vue.computed(() => {
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
    vue.watch(() => props2.isFullscreen, (nVal) => {
      if (nVal) {
        keyMoveClear();
      } else {
        vue.nextTick(() => {
          keyMoveClear = dom.keyMove(modalHeaderRef.value, (left, top) => {
            state.initPos.left = left + "px";
            state.initPos.top = top + "px";
          });
        });
      }
    });
    vue.watch(() => props2.visible, (nVal) => {
      if (nVal) {
        state.maskStyle.zIndex = config.globalConfig.editorConfig.zIndex + index.getZIndexIncrement();
        state.modalStyle.zIndex = config.globalConfig.editorConfig.zIndex + index.getZIndexIncrement();
        modalClass.value.push("zoom-in");
        modalVisible.value = nVal;
        vue.nextTick(() => {
          const halfWidth = modalRef.value.offsetWidth / 2;
          const halfHeight = modalRef.value.offsetHeight / 2;
          const halfClientWidth = document.documentElement.clientWidth / 2;
          const halfClientHeight = document.documentElement.clientHeight / 2;
          state.initPos.left = halfClientWidth - halfWidth + "px";
          state.initPos.top = halfClientHeight - halfHeight + "px";
          if (!props2.isFullscreen) {
            keyMoveClear = dom.keyMove(modalHeaderRef.value, (left, top) => {
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
    const internalStyle = vue.computed(() => ({
      display: modalVisible.value ? "block" : "none"
    }));
    const combinedStyle = vue.computed(() => {
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
    vue.onMounted(() => {
      var _a;
      const rootNode = (_a = rootRef.value) == null ? void 0 : _a.getRootNode();
      bodyRef.value = rootNode instanceof Document ? document.body : rootNode;
    });
    return () => {
      const slotDefault = vueTsx.getSlot({
        ctx
      });
      const slotTitle = vueTsx.getSlot({
        props: props2,
        ctx
      }, "title");
      return bodyRef.value ? vue.createVNode(vue.Teleport, {
        "to": bodyRef.value
      }, {
        default: () => [vue.createVNode("div", {
          "ref": containerRef,
          "class": `${config.prefix}-modal-container`,
          "data-theme": themeRef.value
        }, [vue.createVNode("div", {
          "class": props2.class,
          "style": combinedStyle.value
        }, [props2.showMask && vue.createVNode("div", {
          "class": `${config.prefix}-modal-mask`,
          "style": state.maskStyle,
          "onClick": () => {
            var _a;
            (_a = props2.onClose) == null ? void 0 : _a.call(props2);
            ctx.emit("onClose");
          }
        }, null), vue.createVNode("div", {
          "class": modalClass.value,
          "style": {
            ...state.modalStyle,
            ...state.initPos,
            ...innerSize.value
          },
          "ref": modalRef
        }, [vue.createVNode("div", {
          "class": `${config.prefix}-modal-header`,
          "ref": modalHeaderRef
        }, [slotTitle || ""]), vue.createVNode("div", {
          "class": `${config.prefix}-modal-body`
        }, [slotDefault]), vue.createVNode("div", {
          "class": `${config.prefix}-modal-func`
        }, [props2.showAdjust && vue.createVNode("div", {
          "class": `${config.prefix}-modal-adjust`,
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
        }, [vue.createVNode(Icon, {
          "name": props2.isFullscreen ? "minimize" : "maximize"
        }, null)]), vue.createVNode("div", {
          "class": `${config.prefix}-modal-close`,
          "onClick": (e) => {
            var _a;
            e.stopPropagation();
            (_a = props2.onClose) == null ? void 0 : _a.call(props2);
            ctx.emit("onClose");
          }
        }, [vue.createVNode(Icon, {
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
exports.Icon = Icon;
exports.MdModal = MdModal;
