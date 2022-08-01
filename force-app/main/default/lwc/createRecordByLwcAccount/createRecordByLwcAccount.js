import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Object_Name from '@salesforce/schema/Account';
import Name_Field  from '@salesforce/schema/Account.Name';
import Phone_Field  from '@salesforce/schema/Account.Phone';
import Revenue_Field from '@salesforce/schema/Account.AnnualRevenue';
export default class CreateRecordByLwcAccount extends LightningElement {
    objectApiName=Object_Name;
    fields=[Name_Field,Phone_Field,Revenue_Field];
    recordId="0015i00000LnsUAAAZ";
}