import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'project-firstmod',
    template: '<markdown path="https://raw.githubusercontent.com/Chan4077/First-Mod/master/README.md"></markdown>'
})
export class ProjectFirstModComponent {
}