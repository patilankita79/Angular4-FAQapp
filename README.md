# Angular4-FAQapp

Simple form application developed in Angular 4 to add Question and answer pairs. 
We can toggle as well as delete the questions
Questions and answers will be pushed to or stored to localStorage. Therefore, questions will stay in the application even if we refresh the page, or leave the page and come back.

Important aspects in this project
=> Nested Component [Nesting of Question component inside Question-list component]


Bootstrap the project

```
npm install bootstrap@4.0.0-alpha.6 jquery tether --save
```

Include the bootstrap path in "styles" and jquery, tether, bootstrap javascript file path in "scripts" in angular-cli.json 

<hr>
<h3>Components</h3>

1. Navbar
ng g component components/navbar

2. Questionlist
ng g component components/questionList

