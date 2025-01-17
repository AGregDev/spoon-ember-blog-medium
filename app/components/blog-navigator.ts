import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import RouterService from '@ember/routing/router-service';

export interface BlogNavigatorSignature {
  Args: {
    blogs: number;
    index: number;
  };
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class BlogNavigator extends Component<BlogNavigatorSignature> {
  @service router!: RouterService;

  @action
  nextBlog(): void {
    const { blogs, index } = this.args;
    const nextIndex = (index + 1) % blogs;
    console.log(index)
    this.router.transitionTo(`/blogs/${nextIndex}`);
  }

  @action
  previousBlog(): void {
    const { blogs, index } = this.args;
    const previousIndex = index - 1 > 0 ? index - 1 :blogs -1;

    this.router.transitionTo(`/blogs/${previousIndex}`);
  }
}
