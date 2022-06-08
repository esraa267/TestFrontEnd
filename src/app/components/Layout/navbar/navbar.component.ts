import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/Models/Branch';
import { DataServiceService } from 'src/app/service/DataService/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private data: DataServiceService) {}

  branches: Branch[] = [];
  ngOnInit(): void {
    this.navbar();
    this.data
      .getBranches()
      .subscribe((branchies) => (this.branches = branchies.data));
  }
  navbar() {
    const menu = document.getElementById('menu');
    const action = document.getElementById('action');
    function HandelMenu() {
      menu?.classList.toggle('is-active');
      action?.classList.toggle('is-active');
    }
    menu?.addEventListener('click', () => {
      HandelMenu();
    });
  }
}
