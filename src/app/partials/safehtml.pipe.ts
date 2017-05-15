import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from "@angular/core";

/**
 * Pipe for `safeHtml`
 * @example <caption>Using [innerHTML]</caption>
 *   <div [innerHTML]="testDivContent | safeHtml"></div>
 * @see {@link http://stackoverflow.com/questions/31548311/angular-2-html-binding#answer-41089093|StackOverflow Answer}
 * @todo Add more ways of using this pipe
 * @version 1.0.3
 * @author Edric Chan
 */
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
    noTimes: number = 1;
    constructor(private sanitizer: DomSanitizer) { }

    transform(style) {
        console.log('['+this.noTimes+'] HTML passed in as: '+style);
        this.noTimes++;
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}