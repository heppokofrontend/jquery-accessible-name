import { getLabelFromAriaLabelledBy } from './aria-labelledby';
import { getLabelFromLabelElement } from './label-element';

/**
 * アクセシブルネームの優先順に取得する
 * @param target - アクセシブルネームを取得したい要素
 * @returns - 取得したアクセシブルネーム
 */
export const getName = (target: HTMLElement) => (
  getLabelFromAriaLabelledBy(target) ??
  target.getAttribute('aria-label') ??
  getLabelFromLabelElement(target) ??
  target.title
  // ''
);
