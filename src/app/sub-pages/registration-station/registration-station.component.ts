import { Component, OnInit } from '@angular/core';
import {District} from '../../models/District';
import {TestingFacility} from '../../models/TestingFacility';


@Component({
  selector: 'app-registration-station',
  templateUrl: './registration-station.component.html',
  styleUrls: ['./registration-station.component.css']
})
export class RegistrationStationComponent implements OnInit {

    districts: District[] = []; // ToDo: get data from db
    testingFacilities: TestingFacility[] | undefined; // ToDo: get data from db
    selectedDistrict: District | undefined; // ToDo: set first district automatically
    selectedFacility: TestingFacility | undefined;
    // maybe search for nearest district and/or facility

  constructor() { }

  ngOnInit(): void {
  }

}
