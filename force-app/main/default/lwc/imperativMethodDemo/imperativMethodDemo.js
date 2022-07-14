import { LightningElement,track } from 'lwc';
import accountlistfromclass from "@salesforce/apex/ImparativeApexClassforcomponent.getaccountlist"
// in that we are not using any wire decorator we can call the class with  help of 
// imparative PublicMethodChild.
const columns =[
    {label : "Account Holder ID" , fieldName : 'Id'},
    {label : "Account Holder Name" , fieldName :'Name'}
];
export default class ImperativMethodDemo extends LightningElement {
        @track columns = columns ;
        @track datas = [];

        connectedCallback(){
            accountlistfromclass()
            .then(result =>{        //in that result All data from class get store in 
                                    //result and those data give to datas property 
                                    //we can use connectedcallback method which is render when page load 
                                    //rather that we can also use button click fuction here 
                this.datas=result ;
            })
            .catch(error =>{
                console.log("Error Got occured");
            })
        }
}