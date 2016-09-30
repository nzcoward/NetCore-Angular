import { Component } from '@angular/core';
import { QuestionService } from './features/questions/question.service';

@Component({
    selector: 'my-app',
    template: '<app-title [subtitle]="subtitle"></app-title><dynamic-form [questions]="questions"></dynamic-form>',
    providers: [QuestionService]
})

export class AppComponent {
    //subtitle = '(v1)';
    questions: any[];

    constructor(service: QuestionService) {

        this.questions = service.getQuestions();
        console.log(this.questions);
    }
}
