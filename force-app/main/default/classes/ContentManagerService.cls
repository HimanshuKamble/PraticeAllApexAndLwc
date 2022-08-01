/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 12-02-2020
 * @last modified by  : Amit Singh
 * Modifications Log 
 * Ver   Date         Author       Modification
 * 1.0   11-26-2020   Amit Singh   Initial Version
**/
public with sharing class ContentManagerService {
    
    @AuraEnabled
    public static String getContentDetails(String recordId) {
        List<ContentDocumentLink> contentDocumentList = [SELECT ContentDocumentId, LinkedEntityId 
                                                            FROM   ContentDocumentLink 
                                                            WHERE  LinkedEntityId =: recordId];
        Set<Id> contentDocumentId = new Set<Id>();
            
        for(ContentDocumentLink cdl : contentDocumentList){
            contentDocumentId.add(cdl.ContentDocumentId);
        }
            
        List<ContentVersion> contentVersionList = [SELECT Id, VersionData, FileType, Title, FileExtension,
                                                    ContentDocument.CreatedBy.Name, ContentDocument.ContentSize,
                                                    CreatedDate, ContentDocumentId, ContentDocument.FileType
                                                    FROM   ContentVersion 
                                                    WHERE  ContentDocumentId IN : contentDocumentId];
        return JSON.serialize(contentVersionList);
    }

    @AuraEnabled
    public static void deleteContentDocument(String recordId) {
        Database.delete(recordId);
    }

    public static string ContentType(String fileType) {

        switch on fileType.toLowerCase(){
            when 'docx' {
                return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            when 'csv' {
                return 'application/vnd.ms-excel';
            }
            when 'xlsx' {
                return 'application/vnd.ms-excel';
            }
            when 'wav' {
                return 'audio/wav';
            }
            when 'wmv' {
                return 'video/x-ms-wmv';
            }
            when 'mp3' {
                return 'audio/mpeg';
            }
            when 'mp4' {
                return 'video/mp4';
            }
            when 'png' {
                return 'image/png';
                
            }
            when 'pdf' {
                return 'application/pdf';
                
            }
            when else {
                return 'image/jpeg';
            }
        }

    }
}