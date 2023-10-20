import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { EquationComponent } from './equation/equation.component';
import { AppComponent } from './app.component';
import { AnswerHighLightDirective } from './answer-high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHighLightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
