import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'send-feedback-dialog',
  templateUrl: './sendfeedback.component.html'
})

export class SendFeedbackDialog implements OnInit {
  feedback: any;
  constructor(public dialogRef: MdDialogRef<SendFeedbackDialog>){}
  feedbackControl = new FormControl('', [Validators.minLength(5), Validators.maxLength(200), Validators.required]);
  /**
   * Resets the form
   * @version 1.0.0
   * @author Edric Chan
   */
  resetForm() {
    this.feedback = {name: '', feedback: '', type: '', email: '', sendViaEmail: false}
    console.debug('Form was reset');
  }
  ngOnInit() {
    this.feedback = this.dialogRef.componentInstance.feedback;
    console.debug('Feedback: '+JSON.stringify(this.feedback));
  }
}