import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() data : any;
  constructor(private roure: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.data,'menu');
    
  }
}
