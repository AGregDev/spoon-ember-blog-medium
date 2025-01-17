import Route from '@ember/routing/route';
import type { ApiResponse } from 'api-responses';

export default class BlogsRoute extends Route {
  async model(): Promise<ApiResponse> {
    return (
      await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://blog.spoonconsulting.com/feed',
      )
    ).json();
  }
}
