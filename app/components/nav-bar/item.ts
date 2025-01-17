import Component from '@glimmer/component';

export interface NavBarItemSignature {
  Args: {
    route: string;
  };
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class NavBarItem extends Component<NavBarItemSignature> {
  get displayHome() {
    return this.args.route === '/' ? 'home' : this.args.route;
  }
  constructor(owner: unknown, args: NavBarItemSignature['Args']) {
    super(owner, args);
  }
}
