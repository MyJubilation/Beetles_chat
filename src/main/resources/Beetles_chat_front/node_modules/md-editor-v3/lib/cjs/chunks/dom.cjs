"use strict";
const config = require("./config.cjs");
const iconMaps = {
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy ${config.prefix}-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  "collapse-tips": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-left ${config.prefix}-icon"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>`,
  pin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>`,
  "pin-off": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin-off"><path d="M12 17v5"/><path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"/><path d="m2 2 20 20"/><path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"/></svg>`
};
const StrIcon = (name, customIcon) => {
  if (typeof customIcon[name] === "string") {
    return customIcon[name];
  }
  return iconMaps[name];
};
const keyMove = (trigger, moveHandler) => {
  const triggerMouseDown = (mdown) => {
    const parent = trigger.parentElement || document.body;
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    const { clientWidth, clientHeight } = document.documentElement;
    const x = mdown.offsetX;
    const y = mdown.offsetY;
    const mouseMoveHandler = (e) => {
      let tx = e.x + document.body.scrollLeft - document.body.clientLeft - x;
      let ty = e.y + document.body.scrollTop - document.body.clientTop - y;
      tx = tx < 1 ? 1 : tx < clientWidth - width - 1 ? tx : clientWidth - width - 1;
      ty = ty < 1 ? 1 : ty < clientHeight - height - 1 ? ty : clientHeight - height - 1;
      if (moveHandler) {
        moveHandler(tx, ty);
      } else {
        parent.style.left = `${tx}px`;
        parent.style.top = `${ty}px`;
      }
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
    document.addEventListener("mouseup", mouseUpHandler);
  };
  trigger.addEventListener("mousedown", triggerMouseDown);
  return () => {
    trigger.removeEventListener("mousedown", triggerMouseDown);
  };
};
const appendHandler = (tagName, attributes, checkKey = "") => {
  var _a;
  const insertedEle = document.getElementById(attributes.id);
  if (!insertedEle) {
    const attrsCopy = { ...attributes };
    attrsCopy.onload = null;
    const ele = createHTMLElement(tagName, attrsCopy);
    if (attributes.onload) {
      ele.addEventListener("load", attributes.onload);
    }
    document.head.appendChild(ele);
  } else if (checkKey !== "") {
    if (Reflect.get(window, checkKey)) {
      (_a = attributes.onload) == null ? void 0 : _a.call(insertedEle, new Event("load"));
    } else {
      if (attributes.onload) {
        insertedEle.addEventListener("load", attributes.onload);
      }
    }
  }
};
const updateHandler = (tagName, attributes) => {
  const insertedEle = document.getElementById(attributes.id);
  insertedEle == null ? void 0 : insertedEle.remove();
  appendHandler(tagName, attributes);
};
const createHTMLElement = (tagName, attributes) => {
  const element = document.createElement(tagName);
  Object.keys(attributes).forEach((key) => {
    if (attributes[key] !== void 0) {
      element[key] = attributes[key];
    }
  });
  return element;
};
const zoomMermaid = /* @__PURE__ */ (() => {
  const addEvent = (container) => {
    if (!container) {
      return () => {
      };
    }
    const content = container.firstChild;
    let scale = 1;
    let posX = 0;
    let posY = 0;
    let isDragging = false;
    let startX, startY;
    let initialDistance;
    let initialScale = 1;
    const updateTransform = () => {
      content.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
    };
    const onTouchStart = (event) => {
      if (event.touches.length === 1) {
        isDragging = true;
        startX = event.touches[0].clientX - posX;
        startY = event.touches[0].clientY - posY;
      } else if (event.touches.length === 2) {
        initialDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
        initialScale = scale;
      }
    };
    const onTouchMove = (event) => {
      event.preventDefault();
      if (isDragging && event.touches.length === 1) {
        posX = event.touches[0].clientX - startX;
        posY = event.touches[0].clientY - startY;
        updateTransform();
      } else if (event.touches.length === 2) {
        const newDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
        const scaleChange = newDistance / initialDistance;
        const previousScale = scale;
        scale = initialScale * (1 + (scaleChange - 1));
        const centerX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
        const centerY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
        const rect = content.getBoundingClientRect();
        const relativeX = (centerX - rect.left) / previousScale;
        const relativeY = (centerY - rect.top) / previousScale;
        posX -= relativeX * (scale - previousScale);
        posY -= relativeY * (scale - previousScale);
        updateTransform();
      }
    };
    const onTouchEnd = () => {
      isDragging = false;
    };
    const onWheel = (event) => {
      event.preventDefault();
      const scaleAmount = 0.02;
      const previousScale = scale;
      if (event.deltaY < 0) {
        scale += scaleAmount;
      } else {
        scale = Math.max(0.1, scale - scaleAmount);
      }
      const rect = content.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      posX -= mouseX / previousScale * (scale - previousScale);
      posY -= mouseY / previousScale * (scale - previousScale);
      updateTransform();
    };
    const onMouseDown = (event) => {
      isDragging = true;
      startX = event.clientX - posX;
      startY = event.clientY - posY;
    };
    const onMouseMove = (event) => {
      if (isDragging) {
        posX = event.clientX - startX;
        posY = event.clientY - startY;
        updateTransform();
      }
    };
    const onMouseUp = () => {
      isDragging = false;
    };
    const onMouseLeave = () => {
      isDragging = false;
    };
    container.addEventListener("touchstart", onTouchStart, { passive: false });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd);
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseLeave);
    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  };
  const handler = (containers, options) => {
    const removeEventsMap = /* @__PURE__ */ new Map();
    containers == null ? void 0 : containers.forEach((mm) => {
      let actionDiv = mm.querySelector(`.${config.prefix}-mermaid-action`);
      if (!actionDiv) {
        mm.insertAdjacentHTML(
          "beforeend",
          `<div class="${config.prefix}-mermaid-action">${StrIcon("pin-off", options.customIcon)}</div>`
        );
        actionDiv = mm.querySelector(`.${config.prefix}-mermaid-action`);
      }
      const onClick = () => {
        const current = removeEventsMap.get(mm);
        if (current == null ? void 0 : current.removeEvent) {
          current.removeEvent();
          mm.removeAttribute("data-grab");
          removeEventsMap.set(mm, { removeClick: current.removeClick });
          actionDiv.innerHTML = StrIcon("pin-off", options.customIcon);
        } else {
          const removeEvent = addEvent(mm);
          mm.setAttribute("data-grab", "");
          removeEventsMap.set(mm, { removeEvent, removeClick: current == null ? void 0 : current.removeClick });
          actionDiv.innerHTML = StrIcon("pin", options.customIcon);
        }
      };
      actionDiv.addEventListener("click", onClick);
      removeEventsMap.set(mm, {
        removeClick: () => actionDiv.removeEventListener("click", onClick)
      });
    });
    return () => {
      removeEventsMap.forEach(({ removeEvent, removeClick }) => {
        removeEvent == null ? void 0 : removeEvent();
        removeClick == null ? void 0 : removeClick();
      });
      removeEventsMap.clear();
    };
  };
  return handler;
})();
exports.StrIcon = StrIcon;
exports.appendHandler = appendHandler;
exports.keyMove = keyMove;
exports.updateHandler = updateHandler;
exports.zoomMermaid = zoomMermaid;
