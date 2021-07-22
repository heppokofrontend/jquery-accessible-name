/**
 * 関連するlabel要素から取得できるアクセシブルネームを返す
 * @param self - アクセシブルネームを取得したい要素
 * @return - アクセシブルネーム
 */
export const getLabelFromLabelElement = (self) => {
    const labels = self.labels;
    if (!labels ||
        !labels.length) {
        return null;
    }
    const result = Array.prototype.map.call(labels, (label) => {
        return (label.textContent || '').trim();
    });
    return result.join(' ');
};
