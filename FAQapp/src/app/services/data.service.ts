import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'My name is Ankita',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your last name?',
    //     answer: 'My name is Patil',
    //     hide: true
    //   }
    // ];
  }

  // Get questions from localStorage
  getQuestions() {
    // Check if certain value in localStorage is null or not
    if(localStorage.getItem('questions') == null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // Add question to localStorage
  addQuestion(question: Question) {
    // this.questions.push(question);

    // unshift puts the object in the begining
    this.questions.unshift(question);

    // Init local var
    let questions;

    if(localStorage.getItem('questions') == null) {
      questions = [];

      // Push new question
      questions.unshift(question);

      // Set new array to localStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      // Fetch the questions that are already in localStorage
      questions = JSON.parse(localStorage.getItem('questions'));

      // Add new question
      questions.unshift(question);

      // Reset the localStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    }



  }


  // Remove questions from localStorage
  removeQuestion(question: Question) { 
    for(let i = 0; i < this.questions.length; i++) {
      if(question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
      
    }
    
  }
    

}
