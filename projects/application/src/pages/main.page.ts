import { Node, Page } from 'framework';

export class MainPage extends Page {
  public readonly path: string = '/';
  public readonly title: string = '';

  protected getContent(): Node.Any {
    // eslint-disable-next-line no-console
    console.log(this);

    return {
      tagName: 'section',
      attributes: {
        itemscope: '',
        itemtype: 'https://schema.org/Person',
      },
      children: [
        {
          tagName: 'h1',
          attributes: {
            itemprop: 'name',
          },
          innerText: 'Fedor Usakov',
        },
        {
          tagName: 'p',
          children: [
            {
              innerText: 'Welcome to my personal page! ',
            },
            {
              tagName: 'i',
              innerText: '🤘',
            },
          ],
        },
        {
          tagName: 'p',
          children: [
            {
              // eslint-disable-next-line @typescript-eslint/quotes
              innerText: "I'm the ",
            },
            {
              tagName: 'span',
              innerText: 'head of frontend development ',
              attributes: {
                itemprop: 'jobTitle',
              },
            },
            {
              innerText: 'at ',
            },
            {
              tagName: 'a',
              innerText: 'Bimeister',
              attributes: {
                referrerpolicy: 'no-referrer',
                target: '_blank',
                href: 'https://github.com/bimeister/',
              },
            },
            {
              innerText: '.',
            },
          ],
        },
        {
          tagName: 'p',
          attributes: {
            class: 'teaser',
          },
          children: [
            {
              innerText: 'This page will be much more interesting a bit later. In the meantime, you may check out my ',
            },
            {
              tagName: 'a',
              innerText: 'GitHub',
              attributes: {
                referrerpolicy: 'no-referrer',
                target: '_self',
                href: 'https://github.com/ScarletFlash/',
              },
            },
            {
              innerText: '.',
            },
          ],
        },
      ],
    };
  }
}
