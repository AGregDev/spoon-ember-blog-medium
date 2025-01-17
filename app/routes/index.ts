import Route from '@ember/routing/route';

export default class Index extends Route {
  async model() {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://blog.spoonconsulting.com/feed',
    );
    const data = await response.json();

    return {
      title: data.feed.title,
      link: data.feed.link,
      image: data.feed.image,
      description: data.feed.description,
    };
  }
}
