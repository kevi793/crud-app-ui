import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  constructor(private userService: UserService, 
    private router: Router) {}

  form = new FormGroup({});
  
  model = {}
  
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        placeholder: 'Enter first name',
        required: true,
      }
    },
    {
      key: 'middleName',
      type: 'input',
      templateOptions: {
        label: 'Middle Name',
        placeholder: '',
        required: false,
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        placeholder: 'Enter last name',
        required: false,
      }
    },
    {
      key: 'dateOfBirth',
      type: 'datepicker',
      templateOptions: {
        label: 'Date of Birth',
        required: true,
      }
    },
    {
      key: 'mobileNumber',
      type: 'input',
      templateOptions: {
        label: 'Mobile Number',
        placeholder: 'Enter mobile number',
        required: true,
      }
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Gender',
        required: true,
        name: 'gender',
        options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
      }
    },
    {
      key: 'countryOfBirth',
      type: 'input',
      templateOptions: {
        label: 'Country of Birth',
        placeholder: 'Enter country of birth',
        required: true,
      }
    },
    {
      key: 'countryOfResidence',
      type: 'input',
      templateOptions: {
        label: 'Country of Residence',
        placeholder: 'Enter country of residence',
        required: false,
      }
    },
    {
      key: 'customerSegment',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Customer Segment',
        required: true,
        name: 'customerSegment',
        options: [{ value: 'Retail', key: 'Retail' }]
      }
    },
    {
      key: 'addresses',
      type: 'repeat',
      templateOptions: {
        addText: 'Add Address',
      },
      fieldArray: {
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'type',
            templateOptions: {
              label: 'Address Type:',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'addrLine1',
            className: 'col-sm-4',
            templateOptions: {
              required: true,
              label: 'Address Line 1:',
            },
          },
          {
            type: 'input',
            key: 'addrLine2',
            className: 'col-sm-4',
            templateOptions: {
              label: 'Address Line 2:',
            },
          },
          {
            type: 'input',
            key: 'addrLine3',
            className: 'col-sm-4',
            templateOptions: {          
              label: 'Address Line 3:',
            },
          },
          {
            type: 'input',
            key: 'addrLine4',
            className: 'col-sm-4',
            templateOptions: {
              label: 'Address Line 4:',
            },
          },
          {
            type: 'input',
            key: 'countryCode',
            className: 'col-sm-4',
            templateOptions: {
              label: 'Country Code:',
            },
          },
          {
            type: 'input',
            key: 'zipcode',
            className: 'col-sm-4',
            templateOptions: {
              label: 'Zipcode:'
            },
          },
          {
            type: 'input',
            key: 'state',
            className: 'col-sm-4',
            templateOptions: {
              label: 'State:',
            },
          },
          {
            type: 'input',
            key: 'city',
            className: 'col-sm-4',
            templateOptions: {
              label: 'City:',
            },
          },
        ],
      },
    }
  ];

  onSubmit(user: User): void {
    this.userService.createUser(user).subscribe({
      next: (user: User) => {
        console.log('user created ', user);
        this.router.navigateByUrl('');
      }
    });
  }
}
