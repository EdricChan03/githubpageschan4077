import { Directive, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit, Renderer, ElementRef } from "@angular/core";
import { RouterLinkActive } from "@angular/router";

// TODO: Add it as an attirubte to HTML5 elements

@Directive({
    selector: 'toc, table-of-contents'
})
export class TOCDirective {}

/**
 * Table of contents
 * @version 1.0.0
 * @desc Use via `<toc>` or `<table-of-contents>`
 * @author Edric Chan
 */
@Component({
    moduleId: module.id,
    selector: 'toc, table-of-contents',
    templateUrl: 'toc.directive.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TOCComponent implements OnInit {
    constructor(public renderer: Renderer, public el: ElementRef){
        // If screen's width is less than 
        if (screen.width <= 991) {
        renderer.setElementClass(el.nativeElement, 'mobile-toc', true);

        } else {
        renderer.setElementClass(el.nativeElement, 'desktop-toc', true);

        }
    }
    links: any = [];
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