import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QandA } from '../models/qanda';
import { StudybuddyService } from '../services/studybuddy.service';

@Component({
  selector: 'app-add-qand-a',
  templateUrl: './add-qand-a.component.html',
  styleUrls: ['./add-qand-a.component.css']
})
export class AddQandAComponent implements OnInit {

  QandA: QandA = { Qid: 0, Question:'', Answer:''}

  constructor(private studybuddyService: StudybuddyService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.QandA = form.form.value;
    console.log(this.QandA);
    this.addQandA(this.QandA);
  }

  addQandA(qa: QandA): void {
    this.studybuddyService.addQandA(qa).subscribe(
      result => {
        console.log(result);
      },
      error => console.log(error)
    );
  }
}
