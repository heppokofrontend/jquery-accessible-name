import { getName } from './get-name';

describe('Native: Simply accessible name', () => {
  test('The No accessible names', () => {
    document.body.innerHTML = `
      <input>
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('');
    }

    document.body.innerHTML = `
      <label>
        <input>
      </label>
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('');
    }

    document.body.innerHTML = `
      <div id="label"></div>
      <input aria-labelledby="label">
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('');
    }
  });


  test('The aria-labelledby attribute', () => {
    document.body.innerHTML = `
      <div id="label">1</div>
      <input aria-labelledby="label">
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('1');
    }

    document.body.innerHTML = `
      <div id="label1">1</div>
      <div id="label2">2</div>
      <input aria-labelledby="label1 label2">
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('1 2');
    }
  });


  test('The aria-label attribute', () => {
    document.body.innerHTML = `
      <input aria-label="label">
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('label');
    }
  });


  test('The label element', () => {
    document.body.innerHTML = `
      <label>
        label
        <input>
      </label>
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('label');
    }

    document.body.innerHTML = `
      <label for="input">label</label>
      <input id="input">
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('label');
    }

    document.body.innerHTML = `
      <label for="input">1</label>

      <label>
        2
        <input id="input">
      </label>
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('1 2');
    }
  });


  test('The title attribute', () => {
    document.body.innerHTML = `
      <input title="label">
    `;

    {
      const input = document.querySelector('input')!;

      expect(getName(input)).toBe('label');
    }
  });
});

describe('Native: Accessible name priority', () => {
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

    const input = document.querySelector('input')!;

    expect(getName(input)).toBe('aria-labelledby');
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

    const input = document.querySelector('input')!;

    expect(getName(input)).toBe('aria-label');
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

    const input = document.querySelector('input')!;

    expect(getName(input)).toBe('htmlFor label');
  });


  test('The title attribute', () => {
    document.body.innerHTML = `
      <input
        title="title"
      >
    `;

    const input = document.querySelector('input')!;

    expect(getName(input)).toBe('title');
  });
});
