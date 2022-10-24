import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;

  constructor() { 
    this.name = "Grid";
    this.firstName = "Judge";
    this.age = 39;
    this.quote = "Bière, métal et DBZ";
    this.photo = "https://randomuser.me/api/portraits/lego/2.jpg";
  }

  ngOnInit(): void {
  }

  hideAge() {
    this.age = 0;
  }

}

