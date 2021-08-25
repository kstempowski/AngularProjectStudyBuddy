import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QandA } from '../models/qanda';
import { StudybuddyService } from './../services/studybuddy.service'

@Component({
  selector: 'app-qand-a',
  templateUrl: './qand-a.component.html',
  styleUrls: ['./qand-a.component.css'],
  providers: [StudybuddyService]
})
export class QandAComponent implements OnInit {

  constructor(private studybuddyService: StudybuddyService) { }

  QandAs: QandA[] = [];

  ngOnInit(): void {
    console.log("Calling QandA API");
    this.getQandA();
  }

  getQandA() {
    this.studybuddyService.getAllQandA().subscribe(
      (result) => {
        this.QandAs = result;
        console.log(this.QandAs);
      },
      error => console.log(error)
    );
  }

  addQandA(qa: QandA) {
    this.studybuddyService.addQandA(qa).subscribe(
      result => {
        console.log(result);
      },
      error => console.log()
    )
  }

  deleteQandA(Qid: number) {
    this.studybuddyService.deleteQandA(Qid).subscribe(
      result => {
        console.log(result)
        this.getQandA();
      },
      error => console.log(error)
    );
  }
  
}
