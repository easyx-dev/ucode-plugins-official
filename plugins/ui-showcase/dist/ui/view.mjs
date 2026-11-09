const require = (id) => { const table = globalThis.__UCODE_PLUGIN_HOST__?.cjs; const value = table?.[id]; if (value === undefined) throw new Error("插件运行时缺少 CommonJS 依赖：" + id); return value; };

// plugins/plugins/ui-showcase/ui/view.tsx
import { actions, http, i18n, react, ui } from "@ucode/plugin-api";
import { jsx, jsxs } from "react/jsx-runtime";
function ShowcaseView({ host, narrow }) {
  const { Button, ScrollArea } = ui;
  const [reply, setReply] = react.useState(null);
  const [error, setError] = react.useState(null);
  const ping = async () => {
    try {
      const result = await http.call(host.pluginId, "ping");
      setReply(`${result.plugin} \xB7 ok=${String(result.ok)}`);
      setError(null);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : String(cause));
    }
  };
  return /* @__PURE__ */ jsx(ScrollArea, { className: "plugin-showcase", children: /* @__PURE__ */ jsxs("div", { className: "plugin-showcase__inner", children: [
    /* @__PURE__ */ jsxs("header", { className: "plugin-showcase__head", children: [
      /* @__PURE__ */ jsx("h2", { className: "plugin-showcase__title", children: i18n.t("\u63D2\u4EF6\u754C\u9762\u793A\u4F8B") }),
      /* @__PURE__ */ jsx("span", { className: "plugin-showcase__meta", children: narrow ? "\u7A84\u5C4F" : "\u684C\u9762" })
    ] }),
    /* @__PURE__ */ jsxs("dl", { className: "plugin-showcase__grid", children: [
      /* @__PURE__ */ jsx("dt", { children: "\u63D2\u4EF6" }),
      /* @__PURE__ */ jsx("dd", { children: host.pluginId }),
      /* @__PURE__ */ jsx("dt", { children: "\u4F1A\u8BDD" }),
      /* @__PURE__ */ jsx("dd", { children: host.sessionId ?? "\u8349\u7A3F\u6001\uFF08\u8FD8\u6CA1\u6709\u4F1A\u8BDD\uFF09" }),
      /* @__PURE__ */ jsx("dt", { children: "\u5DE5\u4F5C\u76EE\u5F55" }),
      /* @__PURE__ */ jsx("dd", { children: host.cwd ?? "\u65E0" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "plugin-showcase__actions", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          onClick: () => actions.notify("\u8FD9\u6761\u63D0\u793A\u6765\u81EA\u63D2\u4EF6", "success"),
          children: i18n.t("\u5F39\u4E2A\u63D0\u793A")
        }
      ),
      /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", onClick: actions.collapse, children: i18n.t("\u6536\u8D77\u9762\u677F") }),
      /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: () => void ping(), children: i18n.t("\u6253\u4E00\u6B21\u63D2\u4EF6\u63A5\u53E3") })
    ] }),
    reply === null && error === null ? null : /* @__PURE__ */ jsx("p", { className: "plugin-showcase__hint", children: error ?? reply }),
    /* @__PURE__ */ jsx("p", { className: "plugin-showcase__hint", children: i18n.t(
      "\u8FD9\u5757\u754C\u9762\u5B8C\u5168\u7531\u63D2\u4EF6\u6E32\u67D3\uFF1A\u6837\u5F0F\u6765\u81EA ui/view.css\uFF0C\u80FD\u529B\u6765\u81EA\u5BBF\u4E3B\u8FD0\u884C\u65F6\u7684\u767D\u540D\u5355\u3002"
    ) })
  ] }) });
}
export {
  ShowcaseView
};
