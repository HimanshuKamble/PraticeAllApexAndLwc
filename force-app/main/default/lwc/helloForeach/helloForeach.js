import StayInTouchSignature from '@salesforce/schema/User.StayInTouchSignature';
import { LightningElement } from 'lwc';

export default class HelloForeach extends LightningElement {
    contacts=[
        {
            id:1,
            Name:'Rahul',
            Title:'Kings Restro'
        },
        {
            id:2,
            Name:'Shubham',
            Title:'Dj Brooo'
        },
        {
            id:3,
            Name:'Piyush',
            Title:'Devloper'
        }
    ]
}