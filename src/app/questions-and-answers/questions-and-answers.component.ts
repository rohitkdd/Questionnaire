import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.scss']
})
export class QuestionsAndAnswersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  isFormSubmitted = false;
  isFormValidated = false;

  questionnaireForm: FormGroup;
  ngOnInit() {
    this.initializeQuestionnaireForm();
  }
  
  initializeQuestionnaireForm() {
    this.questionnaireForm = this.formBuilder.group({   
      questions: this.formBuilder.array([this.formBuilder.group({
        question: ['', Validators.required] ,
        answers: this.formBuilder.array([this.formBuilder.group({answer: ['', Validators.required]})])
      })])
    });
  }

  get questionItems() {
    return this.questionnaireForm.get('questions') as FormArray;
  }

  addAnswer(questionIndex) {
    (this.questionItems.controls[questionIndex].get('answers') as FormArray).push(this.formBuilder.group({answer: ['', Validators.required]}));
    if (this.isFormSubmitted) {
      this.isFormSubmitted = false;
    }
  }

  addQuestion() {
    this.questionItems.push(this.formBuilder.group({question: ['', Validators.required],
    answers: this.formBuilder.array([this.formBuilder.group({answer: ['', Validators.required]})])}));
    if (this.isFormSubmitted) {
      this.isFormSubmitted = false;
    }
  }

  removeQuestion(index) {
    this.questionItems.removeAt(index);
    if (this.isFormSubmitted) {
      this.isFormSubmitted = false;
    }
  }

  removeAnswer(questionIndex, answerIndex) {
    (this.questionItems.controls[questionIndex].get('answers') as FormArray).removeAt(answerIndex);
    if (this.isFormSubmitted) {
      this.isFormSubmitted = false;
    }
  }

  submitQuestionnaire() {
    this.isFormSubmitted = true;

    if (this.questionnaireForm.valid) {
      this.isFormValidated = true;
      this.initializeQuestionnaireForm();
      this.isFormSubmitted = false;
      setTimeout(()=> {
        this.isFormValidated = false;
      },3500);
    }
  }
}
