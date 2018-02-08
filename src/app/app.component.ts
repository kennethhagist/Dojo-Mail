import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: 'ken@me.com', important: true, subject: 'Kens Life', content: 'Work Study Dad Repeat.'},
    {email: 'snow@me.com', important: true, subject: 'Princess', content: 'Ariel, Jasmine, Merida, Snow, Moana, Rupunzel, Mulan.'},
    {email: 'emmy@me.com', important: false, subject: 'Baby Steps', content: 'crawling, standing, pooping, eating, drinking, crying, sleeping.'},
    {email: 'mysterion@me.com', important: false, subject: 'South Park', content: 'The Fractured But Whole'}
  ]
  myColor = 'red';
}
