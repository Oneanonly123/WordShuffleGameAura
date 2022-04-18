({
    addResultRecord : function(component, gameResult) {
     // create apex method call action 

     // in order to get apex method we use c - component
     const action = component.get("c.addResult");
     const modeValue = component.get("v.selectedMode").toUpperCase();
     //set parameters
     action.setParams({
         result : gameResult.toUpperCase(),
         mode: modeValue
     });
     // define a callBack
     // this will only be called when we get response from the server

     action.setCallback(this, function(response) {
        const state = response.getState();
        if(state !=='SUCCESS'){
            console.error("Error in Saving Record");
        }
     
    });

    // call apex method
    // calling after it is being defined as it is Asychronos Process


    $A.enqueueAction(action);

  },

     showToast : function(titleValue, messageValue, typeValue) {
      var toastEvent = $A.get("e.force:showToast");
      toastEvent.setParams({
        "title": titleValue,
        "message": messageValue,
        "type": typeValue
     });
      toastEvent.fire();
     }
});
