import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FileUpload extends LightningElement {
    @api recordId;
    @api acceptedFileFormats;
    @api fileUploaded;

    handleUploadFinished() {
        this.dispatchEvent(new CustomEvent('uploadfinished', {
            composed: true,
            bubbles: false,
            cancelable: true,
            detail: {
                data: { recordId: this.recordId }
            }
        }));
        this.dispatchEvent(new ShowToastEvent({
            title: 'Completed',
            variant :"Success",
            message: 'File has been uploaded',
        }));
    }
}