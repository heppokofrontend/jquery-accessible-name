/**
 * aria-labelledby属性経由で取得できるアクセシブルネームを返す
 * @param self - アクセシブルネームを取得したい要素
 * @return - アクセシブルネーム
 */
export const getLabelFromAriaLabelledBy = (self: HTMLElement | FormAssociated) => {
  const idList = (self.getAttribute('aria-labelledby') || '').split(/\s/);
  const result = [];

  for (const id of idList) {
    const label = document.getElementById(id);

    if (label) {
      result.push((label.textContent || '').trim());
    }
  }

  return result.join(' ');
};
