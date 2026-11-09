/**
 * 相对时间：稿子清单上的「改了多久」。不引 dayjs——插件产物越小越好，
 * 这里只要分钟 / 小时 / 天的粗粒度。
 */
export const relativeTimeLabel = (iso: string, now: Date = new Date()): string => {
  const stamp = new Date(iso).getTime();
  if (Number.isNaN(stamp)) return "";
  const diff = Math.max(0, now.getTime() - stamp);
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return "刚刚";
  if (minutes < 60) return `${minutes} 分钟前`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} 小时前`;
  const days = Math.floor(hours / 24);
  return days < 30 ? `${days} 天前` : new Date(iso).toLocaleDateString();
};
