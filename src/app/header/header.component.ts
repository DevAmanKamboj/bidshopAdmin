import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  heading = "BidShop Admin";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
} 
