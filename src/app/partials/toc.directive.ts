import { Directive, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { RouterLinkActive } from "@angular/router";

/**
 * @todo Add it as an attriubte to HTML5 element and add some options
 * @type Directive
 * @version 1.0.0
 */
@Directive({
    selector: 'toc, table-of-contents'
})
export class TOCDirective {
}

/**
 * Table of contents
 * @version 1.0.0
 * @desc Use via `<toc>` or `<table-of-contents>`
 * @author Edric Chan
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
     * @type Array
     */
    links: any = [];
    /**
     * The `hashLink` to go to
     * @param {string} hashLink The hash to go to
     * @todo Make this work
     */
    goTo(hashLink) {
        window.location.hash = hashLink;
    }
    ngOnInit() {
        var linksAll = document.querySelectorAll("button[fragment], a[fragment]")
        for (var i=0;i<linksAll.length;i++) {
        this.links.push({"hashLink": linksAll.item(i).getAttribute('fragment'), "displayText": linksAll.item(i).getAttribute('title')})
        console.log(JSON.stringify(this.links));
        }
    }
}