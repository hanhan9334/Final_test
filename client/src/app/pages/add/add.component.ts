import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Survey } from '../../model/survey.model';
import { SurveyRepository } from '../../model/survey.repository';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  surveySent = false;
  submitted = false;
  constructor(public repository: SurveyRepository/*, public survey: Survey*/) { }

  ngOnInit(): void {
  }

  submitSurvey(form: NgForm): void
  {
    this.submitted = true;
    if(form.valid)
    {
     /* this.repository.saveSurvey(this.survey).subscribe(survey => {
        /*this.survey.clear();
        this.surveySent = true;
        this.submitted =  false;

      })*/
    }
  }

}
