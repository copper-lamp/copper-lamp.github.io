import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'CopperlampWiki',
  favicon: 'https://pic1.imgdb.cn/item/6888235858cb8da5c8ea3b1a.png',
  logo: 'https://pic1.imgdb.cn/item/6888235858cb8da5c8ea3b1a.png',
  outputPath: 'docs-dist',
  mode: 'site',
  exportStatic: {
    dynamicRoot: true,
  },
  // more config: https://d.umijs.org/config
});
