import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms'
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [MathValidators.addition('answer', 'a', 'b')]
  );
  //We applied the customer validator to the whole form group. We wanted the validator
  //to look at all the from controls in the group.

  randomNumber(){
    return Math.floor(Math.random()*10)
  }

  constructor(){}

  get a(){
    return this.mathForm.get('a').value
  }
  get b(){
    return this.mathForm.get('b').value
  }

  ngOnInit(){
    this.mathForm.statusChanges.subscribe(value => {
      if(value === 'INVALID'){
        return;
      }

      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ''
        //set value method you will need to set ALL of the values. If you only need to change some
        //you can use .PATCHVALUE
      })
    })
  }
};