import {District} from './District';
import {TimeSlot} from './TimeSlot';

export class TestingFacility {
    name: string;
    postalCode: number; // ToDo: rethink all props from models
    city: string;
    address: string;
    district: District;
    maxUserPerTimeslot: number;
    openingHours: string;
    timeSlots: TimeSlot[];

    constructor(id: number, name: string, postalCode: number, city: string, address: string, district: District,
                maxUserPerTimeslot: number, openingHours: string, timeSlots: TimeSlot[]) {
        this.name = name;
        this.postalCode = postalCode;
        this.city = city;
        this.address = address;
        this.district = district;
        this.maxUserPerTimeslot = maxUserPerTimeslot;
        this.openingHours = openingHours;
        this.timeSlots = timeSlots;
    }

}