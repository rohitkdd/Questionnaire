import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.scss']
})
export class QuestionsAndAnswersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  questionnaireForm: FormGroup;
  ngOnInit() {
    this.initializeQuestionnaireForm();
  }
  
  initializeQuestionnaireForm() {
    this.questionnaireForm = this.formBuilder.group({   
      questions: this.formBuilder.array([this.formBuilder.group({
        question: '',
        answers: this.formBuilder.array([this.formBuilder.group({answer: ''})])
      })])
    });
  }

  get questionItems() {
    return this.questionnaireForm.get('questions') as FormArray;
  }

  addAnswer(questionIndex) {
    (this.questionItems.controls[questionIndex].get('answers') as FormArray).push(this.formBuilder.group({answer: ''}));
  }

  addQuestion() {
    this.questionItems.push(this.formBuilder.group({question: '',
    answers: this.formBuilder.array([this.formBuilder.group({answer: ''})])}))
  }

  removeQuestion(index) {
    this.questionItems.removeAt(index);
  }

  removeAnswer(questionIndex, answerIndex) {
    (this.questionItems.controls[questionIndex].get('answers') as FormArray).removeAt(answerIndex);
  }

  submitQuestionnaire() {
    window.alert('Thanks');
    this.initializeQuestionnaireForm();
  }
}
