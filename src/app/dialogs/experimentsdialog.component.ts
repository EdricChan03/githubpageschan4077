import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experiments-dialog',
  templateUrl: './experimentsdialog.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class ExperimentsDialog implements OnInit {
  experiments: any;
  defaultExperiments = { shareDialog: false };
  constructor(private dialogRef: MatDialogRef<ExperimentsDialog>) { }
  saveExperiments(experiments: any) {
    localStorage.setItem('experiments', JSON.stringify(experiments));
    this.dialogRef.close();
  }
  ngOnInit() {
    this.experiments = JSON.parse(localStorage.getItem('experiments')) || this.defaultExperiments;
  }
}
