import { api, LightningElement } from 'lwc';

export default class PublicMethodChild extends LightningElement {

        value = ['Red'];
        options=[
            { label: 'Red Marker', value: 'red' },
            { label: 'Green Marker', value: 'green' },
            { label: 'Blue Marker', value: 'blue' },
            { label: 'Black Marker', value: 'black' },
            { label: 'yellow Marker', value: 'yellow' },

        ];
    
        // Use @api decorator to define public
        // method in your compo
    @api
    selectCheckbox(checkboxValue){
        /**find method return value of the first
        element in the arry that setisfies the provided 
        testing function **/
     const selectedCheckedBox=   this.options.find(checkbox=>{
            return checkboxValue=== checkbox.value;
        })
        if(selectedCheckedBox){
            this.value=selectedCheckedBox.value;
        return "Successfully Return";
        }
         return "no checkbox found";
        

    }
   
   
   
    }