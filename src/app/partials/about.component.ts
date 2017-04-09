import { Component } from "@angular/core";
import { UrlDialogService } from "../services/urldialog.service";
@Component({
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent {
    url: string;
    constructor(private urlDialogService: UrlDialogService){}
    goToUrl(ev) {
        this.url = ev.srcElement.attributes.href.value;
        console.log(this.url);
        ev.preventDefault();
        this.urlDialogService.goToUrl(this.url);
    }
}