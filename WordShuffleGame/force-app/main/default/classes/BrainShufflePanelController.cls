public with sharing class BrainShufflePanelController {
    // In order to make apex method available to aura component directly we use @AuraEnabled annotation
    @AuraEnabled
  public static String addResult(String result , String mode){
      Word_Shuffle_Board__c gameResult = new Word_Shuffle_Board__c(Result__c= result, Mode__c = mode);
      insert gameResult;
      return 'success';
  }
}
