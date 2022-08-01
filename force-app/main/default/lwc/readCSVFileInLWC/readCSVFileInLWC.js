import { LightningElement, track, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import csvFileRead from '@salesforce/apex/CSVFileReadLWCCntrl.csvFileRead';
import csvFileRead2 from '@salesforce/apex/CSVFileReadLWCCntrl.csvFileRead2';
//import savedata from '@salesforce/apex/CSVFileReadLWCCntrl2.csvFileRead';
const columnsAccount = [
    { label: 'Name', fieldName: 'Name' }, 
    { label: 'Source', fieldName: 'AccountSource' },
    { label: 'Account Site', fieldName: 'Site'}, 
    { label: 'Type', fieldName: 'Type'}, 
    { label: 'Website', fieldName: 'Website', type:'url'}
];

export default class cSVFileReadLWC extends LightningElement {
    @api recordId;
    @track error;
    @track columnsAccount = columnsAccount;
    @track data;
    @track eventvaluesave=[];

    // accepted parameters
    get acceptedCSVFormats() {
        return ['.csv'];
    }

    
    uploadFileHandler(event) {
        // Get the list of records from the uploaded files
        const uploadedFiles = event.detail.files;
        this.eventvaluesave = event.detail.files;
        // calling apex class csvFileread method
        csvFileRead({contentDocumentId : uploadedFiles[0].documentId})
        .then(result => {
            window.console.log('result ===> '+result);
           this.data = result;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success!!',
                    message: 'Record Preview!!',
                    variant: 'Success',
                }),
            );
        })
        .catch(error => {
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error!!',
                    message: JSON.stringify(error),
                    variant: 'error',
                }),
            );     
        })

    }

   handleClick(){
        const uploadedFiles = this.eventvaluesave;
        csvFileRead2({contentDocumentId : uploadedFiles[0].documentId})
        .then(result => {
            window.console.log('result ===> '+result);
           this.data = result;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success!!',
                    message: 'Accounts are created according to the CSV file upload after Button click!!!',
                    variant: 'Success',
                }),
            );
        })
        }
}