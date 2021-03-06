import $ from 'jquery';

window.jQuery = $;

import('./index');

describe('jQuery: Simply accessible name', () => {
  test('The No accessible names', () => {
    document.body.innerHTML = `
      <input>
    `;

    expect($('input').a11yName()).toBe('');

    document.body.innerHTML = `
      <label>
        <input>
      </label>
    `;

    expect($('input').a11yName()).toBe('');

    document.body.innerHTML = `
      <div id="label"></div>
      <input aria-labelledby="label">
    `;

    expect($('input').a11yName()).toBe('');
  });


  test('The aria-labelledby attribute', () => {
    document.body.innerHTML = `
      <div id="label">1</div>
      <input aria-labelledby="label">
    `;

    expect($('input').a11yName()).toBe('1');

    document.body.innerHTML = `
      <div id="label1">1</div>
      <div id="label2">2</div>
      <input aria-labelledby="label1 label2">
    `;

    expect($('input').a11yName()).toBe('1 2');
  });


  test('The aria-label attribute', () => {
    document.body.innerHTML = `
      <input aria-label="label">
    `;

    expect($('input').a11yName()).toBe('label');
  });


  test('The label element', () => {
    document.body.innerHTML = `
      <label>
        label
        <input>
      </label>
    `;

    expect($('input').a11yName()).toBe('label');

    document.body.innerHTML = `
      <label for="input">label</label>
      <input id="input">
    `;

    expect($('input').a11yName()).toBe('label');

    document.body.innerHTML = `
      <label for="input">1</label>

      <label>
        2
        <input id="input">
      </label>
    `;

    expect($('input').a11yName()).toBe('1 2');
  });


  test('The title attribute', () => {
    document.body.innerHTML = `
      <input title="label">
    `;

    expect($('input').a11yName()).toBe('label');
  });
});

describe('jQuery: Accessible name priority', () => {
  test('The aria-labelledby attribute', () => {
    document.body.innerHTML = `
      <div id="div">aria-labelledby</div>

      <label for="input">htmlFor</label>

      <label>
        label

        <input
          id="input"
          title="title"
          aria-label="aria-label"
          aria-labelledby="div"
        >
      </label>
    `;

    expect($('input').a11yName()).toBe('aria-labelledby');
  });


  test('The aria-label attribute', () => {
    document.body.innerHTML = `
      <label for="input">htmlFor</label>

      <label>
        label

        <input
          id="input"
          title="title"
          aria-label="aria-label"
        >
      </label>
    `;

    expect($('input').a11yName()).toBe('aria-label');
  });


  test('The label element', () => {
    document.body.innerHTML = `
      <label for="input">htmlFor</label>

      <label>
        label

        <input
          id="input"
          title="title"
        >
      </label>
    `;

    expect($('input').a11yName()).toBe('htmlFor label');
  });


  test('The title attribute', () => {
    document.body.innerHTML = `
      <input
        title="title"
      >
    `;

    expect($('input').a11yName()).toBe('title');
  });
});
