import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
  }

}
