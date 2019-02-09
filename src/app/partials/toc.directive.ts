import { ChangeDetectionStrategy, Component, Directive, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * @todo Add it as an attriubte to HTML5 element and add some options
 */
@Directive({
  selector: 'toc, table-of-contents'
})
export class TOCDirective {
}

/**
 * Table of contents
 * @desc Use via `<toc>` or `<table-of-contents>`
 * @example <caption>Using in a document</caption>
 *   <toc></toc>
 *   <a fragment="test" title="Test Link"><h2>Test</h2></a>
 *   <a fragment="lol" title="Another Link"><h2>XD</h2></a>
 */
@Component({
  moduleId: module.id,
  selector: 'toc, table-of-contents',
  templateUrl: 'toc.directive.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TOCComponent implements OnInit {
  /**
   * The {@link Array} of links
   */
  links = [];
  /**
   * The `hashLink` to go to
   * @param hashLink The hash to go to
   * @todo Make this work
   */
  goTo(hashLink: string) {
    window.location.hash = hashLink;
  }
  ngOnInit() {
    const linksAll = document.querySelectorAll('button[fragment], a[fragment]');
    for (let i = 0; i < linksAll.length; i++) {
    this.links.push({hashLink: linksAll.item(i).getAttribute('fragment'), displayText: linksAll.item(i).getAttribute('title')});
    console.log(JSON.stringify(this.links));
    }
  }
}
