/*
 * @Author       : Zhelin Cheng
 * @Date         : 2020-07-27 12:55:50
 * @LastEditors  : Zhelin Cheng
 * @LastEditTime : 2020-07-27 15:02:50
 * @FilePath     : /kindle_helper/.umirc.ts
 * @Description  : 未添加文件描述
 */

import { defineConfig } from 'umi';
const isDev = process.env.NODE_ENV === 'development';
interface ScriptsType {
  src: string;
  async: string;
}

export default defineConfig({
  title: '小助手',
  hash: true,
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  ],
  /* dynamicImport: {
    loading: '@/components/Common/Loading',
  }, */
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    type: 'none',
  },
});
