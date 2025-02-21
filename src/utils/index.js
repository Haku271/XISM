/**
 * 获取assets静态图片资源
 * @param url 图片路径
 */
export const getAssetsImg = (url) => {
  return new URL(`../assets/imgs/${url}`, import.meta.url).href;
}