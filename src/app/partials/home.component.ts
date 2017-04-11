import { UrlDialogService } from './../services/urldialog.service';
import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    url: string;
    constructor(private urlDialogService: UrlDialogService) { }
    goToUrl(ev) {
        this.url = ev.srcElement.attributes.href.value;
        console.log(this.url);
        ev.preventDefault();
        this.urlDialogService.goToUrl(this.url);
    }
}