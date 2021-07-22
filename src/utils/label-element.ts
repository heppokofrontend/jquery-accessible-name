/**
 * 関連するlabel要素から取得できるアクセシブルネームを返す
 * @param self - アクセシブルネームを取得したい要素
 * @return - アクセシブルネーム
 */
export const getLabelFromLabelElement = (self: HTMLElement | FormAssociated) => {
  if (!('labels' in self)) {
    return '';
  }

  const labels = self.labels || [];
  const result = Array.prototype.map.call(labels, (label: HTMLLabelElement) => {
    return (label.textContent || '').trim();
  });

  return result.join(' ');
};
