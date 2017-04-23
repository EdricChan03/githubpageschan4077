import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'experiments-dialog',
    templateUrl: './experimentsdialog.component.html'
})
export class ExperimentsDialog implements OnInit {
    experiments: any;
    defaultExperiments = {"shareDialog":false};
    saveExperiments(experiments: any) {
        localStorage.setItem('experiments', JSON.stringify(experiments));
    }
    ngOnInit() {
        this.experiments = JSON.parse(localStorage.getItem('experiments')) || this.defaultExperiments;
    }
}