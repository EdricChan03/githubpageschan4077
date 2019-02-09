import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.feedbackForm = fb.group({
      name: [null, Validators.required],
      feedback: [null, Validators.required]
    });
  }
}
