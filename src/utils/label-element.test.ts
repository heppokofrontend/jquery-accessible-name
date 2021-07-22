import { getLabelFromLabelElement } from './label-element';


// 関連するlabel要素から取得できるアクセシブルネームを返す
describe('getLabelFromLabelElement', () => {
  test('No accessible names', () => {
    document.body.innerHTML = `
      <input>
    `;

    const input = document.querySelector('input')!;

    expect(getLabelFromLabelElement(input)).toBe('');
  });

  test('No form associated element', () => {
    document.body.innerHTML = `
      <div></div>
    `;

    const div = document.querySelector('div')!;

    expect(getLabelFromLabelElement(div)).toBe('');
  });

  test('The type of hidden', () => {
    const input = document.createElement('input');

    input.type = 'hidden';

    expect(input.labels).toBeNull();
    expect(getLabelFromLabelElement(input)).toBe('');
  });

  test('Empty label', () => {
    document.body.innerHTML = `
      <label for="input"></label>

      <input id="input">
    `;

    const input = document.querySelector('input')!;

    expect(getLabelFromLabelElement(input)).toBe('');
  });

  test('Use nest', () => {
    document.body.innerHTML = `
      <label>
        label text
        <input>
      </label>
    `;

    const input = document.querySelector('input')!;

    expect(getLabelFromLabelElement(input)).toBe('label text');
  });

  test('Use htmlFor', () => {
    document.body.innerHTML = `
      <label for="input">label text</label>

      <input id="input">
    `;

    const input = document.querySelector('input')!;
    const label = document.querySelector('label')!;

    expect(getLabelFromLabelElement(input)).toBe('label text');
  });

  test('Use both', () => {
    document.body.innerHTML = `
      <label for="input">label1</label>

      <label>
        label2
        <input id="input">
      </label>
    `;

    const input = document.getElementById('input')!;

    expect(getLabelFromLabelElement(input)).toBe('label1 label2');
  });
});
