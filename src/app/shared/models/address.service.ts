import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  id: number;
  name: string;
  phoneNumber: string;
  addressType: string; /* Home or Office */
  houseNo: string;
  landmark: string;
  area: string; /* Area or Sector */
  city: string;
  state: string;
  country: string;
  pincode: string;
  isPrimary: number;

  constructor() { }
}
