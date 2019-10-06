import { Address } from './address';

export interface User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    mobileNumber: string;
    gender: string;
    customerNumber: string;
    countryOfBirth: string;
    countryOfResidence: string;
    customerSegment: string;
    addressList: Array<Address>;
}