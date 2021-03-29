import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';

@Component({
    selector: 'app-registration-start',
    templateUrl: './registration-start.component.html',
    styleUrls: ['./registration-start.component.css']
})
export class RegistrationStartComponent implements OnInit {

    constructor(private store: AngularFirestore, private dataProvider: RegistrationDataProviderService, private router: Router) {
    }

    ngOnInit(): void {
    }

    setSelectedDate(sDate: string): void {
        // this.communication.userBirthday = new Date(Date.parse(sDate));
    }

    onClickNext(): void {
        this.router.navigate(['registration/station']);
    }
}
