/**
 * aria-labelledby属性経由で取得できるアクセシブルネームを返す
 * @param self - アクセシブルネームを取得したい要素
 * @return - アクセシブルネーム
 */
export declare const getLabelFromAriaLabelledBy: (self: HTMLElement | FormAssociated) => string | null;
