import { LightningElement,track,wire } from 'lwc';
import getcontactlist from '@salesforce/apex/wiredecoraticedemocomponentclass.getcontactlist' ;

const columns1=[
    {label:'Contact Record Id' , fieldName : "Id" },
    {label:'First Name' , fieldName : "Name" },
];
export default class Wiredecorativedemo extends LightningElement {

    @track columns=columns1; 
    @track datas = [];

    @wire(getcontactlist)
    wireconlistclass({data , error}){
        if(data){
            this.datas=data;
        } else if (error){
            console.log("Error Has been Occured");
        } 
    } 
}