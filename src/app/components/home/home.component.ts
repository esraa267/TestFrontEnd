import { Component, OnInit } from '@angular/core';
import { animation } from 'src/app/Models/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [animation],
})
export class HomeComponent implements OnInit {
  title: string = '';
  constructor() {}

  ngOnInit(): void {
    this.title = 'welcome to our website';
  }
}
