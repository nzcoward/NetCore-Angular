import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from '@questions/all';// './features/questions/dynamic-form.component';
import { DynamicFormQuestionComponent } from './features/questions/dynamic-form-question.component';

import { TemplateDirective } from './directives/template.directive';
import { TitleComponent } from './features/title/title.component';

import { UserService } from './features/title/services/template.service';


@NgModule({ 
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [
        AppComponent,
        TitleComponent,
        TemplateDirective,
        DynamicFormComponent, DynamicFormQuestionComponent
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor() {
    }
}