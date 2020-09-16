import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: Object;
  productsArray: Object[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllExpiredProducts().subscribe(data => {
      this.products = data;
      this.productsArray= data['data'];
      console.log(this.products);
    })
  }

}
