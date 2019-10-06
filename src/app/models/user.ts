import { Address } from './address';

export interface User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dob: Date;
    mobile: string;
    gender: string;
    customerNumber: string;
    countryOfBirth: string;
    countryOfResidence: string;
    customerSegment: string;
    addressList: Array<Address>;
}