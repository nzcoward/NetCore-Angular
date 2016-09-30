import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TemplateDirective } from './directives/template.directive';
import { TitleComponent } from './features/title/title.component';

import { UserService } from './features/title/services/template.service';


@NgModule({ 
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        TitleComponent,
        TemplateDirective
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }