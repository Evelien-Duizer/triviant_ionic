import { Component } from '@angular/core';
import {QuestionService} from "./question.service";
import {Question} from "./question";

@Component({
  selector: 'app-home',
  templateUrl: 'question.page.html',
  styleUrls: ['question.page.scss'],
})
export class QuestionPage {
  private question: Question;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questionService.getQuestion().subscribe(question => {
      this.question = question;
    })
  }

  private questionLoaded(): boolean {
    return this.question != null;
  }

  getQuestionQuestion() {
    return (this.questionLoaded() ? this.question.question : "");
  }

  getQuestionAnswer() {
    return (this.questionLoaded() ? this.question.answer : "");
  }
}
