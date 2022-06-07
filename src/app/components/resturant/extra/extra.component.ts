import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  @Input() data :any;
  constructor() { }

  ngOnInit(): void {
    console.log('offer',this.data);
    
  }

}
