/*
 * @Author       : Zhelin Cheng
 * @Date         : 2020-07-27 12:55:50
 * @LastEditors  : Zhelin Cheng
 * @LastEditTime : 2020-07-27 14:59:54
 * @FilePath     : /kindle_helper/typings.d.ts
 * @Description  : 未添加文件描述
 */

declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
