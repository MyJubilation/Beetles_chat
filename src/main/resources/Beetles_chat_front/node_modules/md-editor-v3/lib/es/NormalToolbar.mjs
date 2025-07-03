import { defineComponent, createVNode } from "vue";
import { p as prefix } from "./chunks/config.mjs";
import { g as getSlot } from "./chunks/vue-tsx.mjs";
const props = {
  title: {
    type: String,
    default: ""
  },
  /**
   * 展示在工具栏的内容，通常是个图标
   *
   * @deprecated 使用默认插槽代替
   */
  trigger: {
    type: [String, Object],
    default: void 0
  },
  onClick: {
    type: Function,
    default: void 0
  },
  /**
   * ==没有意义，仅用于规避克隆组件自动嵌入insert方法时，传入的是该组件而产生的waring
   */
  insert: {
    type: Function,
    default: void 0
  },
  language: {
    type: String,
    default: void 0
  },
  theme: {
    type: String,
    default: void 0
  },
  previewTheme: {
    type: String,
    default: void 0
  },
  codeTheme: {
    type: String,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  showToolbarName: {
    type: Boolean,
    default: void 0
  }
  /**
   * ==结束
   */
};
const NormalToolbar = /* @__PURE__ */ defineComponent({
  name: "NormalToolbar",
  props,
  emits: ["onClick"],
  setup(props2, ctx) {
    return () => {
      const Trigger = getSlot({
        props: props2,
        ctx
      }, "trigger");
      const Default = getSlot({
        props: props2,
        ctx
      });
      return createVNode("div", {
        "class": [`${prefix}-toolbar-item`, props2.disabled && `${prefix}-disabled`],
        "title": props2.title,
        "onClick": (e) => {
          var _a;
          if (props2.disabled) return;
          (_a = props2.onClick) == null ? void 0 : _a.call(props2, e);
          ctx.emit("onClick", e);
        }
      }, [Default || Trigger]);
    };
  }
});
NormalToolbar.install = (app) => {
  app.component(NormalToolbar.name, NormalToolbar);
  return app;
};
export {
  NormalToolbar as default
};
