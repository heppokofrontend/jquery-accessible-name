import { getLabelFromAriaLabelledBy } from './aria-labelledby';

// labelledby属性経由で取得できるアクセシブルネームを返す
describe('getLabelFromAriaLabelledBy', () => {
  test('No accessible names', () => {
    document.body.innerHTML = `
      <input>
    `;

    const input = document.querySelector('input')!;

    expect(getLabelFromAriaLabelledBy(input)).toBe('');
  });

  test('No attribute', () => {
    document.body.innerHTML = `
      <input>
    `;

    const input = document.querySelector('input')!;

    expect(getLabelFromAriaLabelledBy(input)).toBe('');

    document.body.innerHTML = `
      <div></div>
    `;

    const div = document.querySelector('div')!;

    expect(getLabelFromAriaLabelledBy(div)).toBe('');
  });

  test('Empty label', () => {
    document.body.innerHTML = `
      <div id="label"></div>

      <input aria-labelledby="label">
    `;

    const input = document.querySelector('input')!;

    expect(getLabelFromAriaLabelledBy(input)).toBe('');
  });

  test('Single label', () => {
    document.body.innerHTML = `
      <div id="label">Hello</div>

      <input aria-labelledby="label">
    `;

    const input = document.querySelector('input')!;

    expect(getLabelFromAriaLabelledBy(input)).toBe('Hello');
  });

  test('Multi label', () => {
    document.body.innerHTML = `
      <div id="label1">1</div>
      <div id="label2">2</div>
      <div id="label3">3</div>

      <input aria-labelledby="label1 label2 label3">
    `;

    const input = document.querySelector('input')!;

    expect(getLabelFromAriaLabelledBy(input)).toBe('1 2 3');
  });
});
