import { Component, Input, OnInit } from '@angular/core';

import { AddressService } from 'src/app/shared/models/address.service';

@Component({
  selector: 'app-addresses-tab',
  templateUrl: './addresses-tab.component.html',
  styleUrls: ['./addresses-tab.component.scss']
})
export class AddressesTabComponent implements OnInit {
  @Input() address: AddressService[];
  constructor() { }

  ngOnInit(): void {
  }

}
