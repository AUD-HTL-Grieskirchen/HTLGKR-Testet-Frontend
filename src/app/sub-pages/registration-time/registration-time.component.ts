import { Component, OnInit } from '@angular/core';
import {TestingFacility} from '../../models/TestingFacility';
import {StepsCommunicationService} from '../../services/steps-communication.service';

@Component({
  selector: 'app-registration-time',
  templateUrl: './registration-time.component.html',
  styleUrls: ['./registration-time.component.css']
})
export class RegistrationTimeComponent implements OnInit {

    selectedFacility: TestingFacility;
    availableDates: Date[];
    selectedDate: Date;
    availableTimes: string[];
    selectedTime: string;

  constructor(private communication: StepsCommunicationService) {
      this.selectedFacility = (communication.selectedFacility as TestingFacility);
      this.availableDates = []; // ToDo: changed to await with db get
      this.selectedDate = this.availableDates[0];
      this.availableTimes = this.getTimesFromSelectedDate();
      this.selectedTime = this.availableTimes[0];

      this.anySelectionChanged();
  }

  ngOnInit(): void {
  }

    getParsedDate(date: Date): string {
        let returnString = '';

        const dayOfWeek = date.getDay();
        returnString += isNaN( dayOfWeek) ? null : ['Sunday, ', 'Monday, ', 'Tuesday, ', 'Wednesday, ', 'Thursday, ', 'Friday, ', 'Saturday, '][dayOfWeek];

        returnString += date.getUTCDate() + '.';
        returnString += date.getUTCMonth() + '.';
        returnString += date.getUTCFullYear();

        return returnString;
    }

    getTimesFromSelectedDate(): string[]{
      return []; // ToDo: get from db with selectedDate
    }

    anySelectionChanged(): void {
      this.selectedDate.setUTCHours(+this.selectedTime.split(':')[0], +this.selectedTime.split(':')[1]);
      this.communication.selectedDate = this.selectedDate;
    }
}
