import { GitContributors } from "C:/Users/Jason/purdue-wiki/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_3116b6c2d0d7a4cbb968247db7282d26/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/Jason/purdue-wiki/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_3116b6c2d0d7a4cbb968247db7282d26/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
