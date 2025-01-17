import Route from '@ember/routing/route';
import type { ApiResponse } from 'api-responses';
import type { BlogPost } from 'models';

export default class BlogRoute extends Route {
  async model(params: { index: string }): Promise<{ blog: BlogPost; blogs: number, index: number }> {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://blog.spoonconsulting.com/feed'
    );
    const data: ApiResponse = await response.json();

    const index = parseInt(params.index, 10);
    const selectedBlog = data.items[index];

    if (!selectedBlog) {
      throw new Error('Blog not found');
    }

    return {
      blog: selectedBlog,
      blogs: data.items.length,
      index: index
    };
  }
}
