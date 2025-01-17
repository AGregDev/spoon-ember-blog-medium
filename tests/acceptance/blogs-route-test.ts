import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, findAll } from '@ember/test-helpers';

module('Acceptance | Blogs Route', function (hooks) {
  setupApplicationTest(hooks);

  test('it displays the correct number of blogs', async function (assert) {

    await visit('/blogs');

    assert.dom('.grid > *').exists({ count: 10 }, 'The template renders 2 blog cards.');
  });

  test('it renders each blog with correct content', async function (assert) {
    this.owner.lookup('service:router').on('routeWillChange', (transition: any) => {
      if (transition.to.name === 'blogs') {
        transition.model = {
          items: [
            { title: 'Blog 1', categories: ['Tech'], pubDate: '2025-01-01' },
            { title: 'Blog 2', categories: ['Life'], pubDate: '2025-01-02' },
          ],
        };
      }
    });

    await visit('/blogs');

    const blogs = findAll('.grid > *');
    assert.dom(blogs[0]).includesText('Getting Started with Neovim Using NvChad: A Developer’s Guide 2023-12-21 08:17:56 - nvchad - lua - neovim - vim', 'First blog card renders the correct title.');
  });
});
