import Component from '@glimmer/component';

export interface CardSignature {
  // The arguments accepted by the component
  Args: {
    index: number;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class Card extends Component<CardSignature> {}
