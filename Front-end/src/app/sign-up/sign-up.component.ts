import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  addUser(name: HTMLInputElement, surname: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, card: HTMLInputElement,) : Boolean {

    return false;
  }

  ngOnInit() { }

}