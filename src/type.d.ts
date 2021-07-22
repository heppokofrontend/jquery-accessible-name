// ? ラベルを提供している要素を取得するモードとかあってもいいかも
// interface JQueryA11yNameOptions {

// }

interface JQuery {
  a11yName(): string;
}

interface Window {
  jQuery: JQueryStatic
}

type FormAssociated = HTMLInputElement | HTMLButtonElement | HTMLSelectElement |
                      HTMLTextAreaElement | HTMLOutputElement |
                      HTMLProgressElement | HTMLMeterElement;
