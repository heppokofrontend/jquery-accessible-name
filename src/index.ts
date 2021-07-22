import { getName } from './utils/get-name';

export const a11yName = getName;

if (window.jQuery) {
  /**
  * 要素のアクセシブルネームを取得します
  * @return - 取得したアクセシブルネーム
  */
  window.jQuery.fn.a11yName = function () {
    const result: string[] = [];

    this.each(function () {
      result.push(a11yName(this));
    });

    return result.join('').trim();
  };
}
