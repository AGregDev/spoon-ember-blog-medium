import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly with provided arguments', async function (assert) {
    this.setProperties({
      index: 1,
      title: 'Sample Blog Title',
      pubDate: '2025-01-01',
      categories: ['Category 1', 'Category 2'],
    });

    await render(hbs`
      <Card 
        @index={{this.index}}
        @title={{this.title}}
        @pubDate={{this.pubDate}}
        @categories={{this.categories}}
      />
    `);

    assert
      .dom('a')
      .hasAttribute('href', '/blogs/1', 'LinkTo generates the correct URL with @index');
    assert.dom('h5').hasText('Sample Blog Title', 'Title is rendered correctly');
    assert.dom('span').hasText('2025-01-01', 'Publication date is rendered correctly');

    const categoryElements = findAll('p');
    assert.equal(
      categoryElements.length,
      2,
      'Correct number of categories are rendered'
    );
    assert
      .dom(categoryElements[0])
      .hasText('- Category 1', 'First category is rendered correctly');
    assert
      .dom(categoryElements[1])
      .hasText('- Category 2', 'Second category is rendered correctly');
  });

  test('it applies the correct styles and classes', async function (assert) {
    this.setProperties({
      index: 1,
      title: 'Sample Blog Title',
      pubDate: '2025-01-01',
      categories: [],
    });

    await render(hbs`
      <Card 
        @index={{this.index}}
        @title={{this.title}}
        @pubDate={{this.pubDate}}
        @categories={{this.categories}}
      />
    `);

    assert
      .dom('a')
      .hasClass('px-6', 'Link has the correct padding class');
    assert
      .dom('a')
      .hasClass('border-gray-700', 'Link has the correct border color class');
    assert
      .dom('div')
      .hasClass('h-full', 'Inner div has the correct full height class');
  });
});
