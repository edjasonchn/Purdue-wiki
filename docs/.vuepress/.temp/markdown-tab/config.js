import { CodeTabs } from "C:/Users/Jason/purdue-wiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_4febe4c3504ac7cb02c151552286dba6/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/Jason/purdue-wiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_4febe4c3504ac7cb02c151552286dba6/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/Jason/purdue-wiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_4febe4c3504ac7cb02c151552286dba6/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
