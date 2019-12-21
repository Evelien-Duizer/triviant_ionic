import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { QuestionPage } from './question.page';
import {QuestionService} from "./question.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionPage
      }
    ])
  ],
  declarations: [QuestionPage],
  providers: [QuestionService]
})
export class QuestionPageModule {}
