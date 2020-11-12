import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Survey } from '../../model/survey.model';
import { SurveyRepository } from '../../model/survey.repository';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  surveySent = false;
  submitted = false;
  constructor(public repository: SurveyRepository) { }

  ngOnInit(): void {
  }
  editSurvey(form: NgForm): void
  {
    this.submitted = true;
    if(form.valid)
    {
      this.repository.edit
    }
  }

}
