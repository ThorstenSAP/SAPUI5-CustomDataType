(function(){
    var aDigits;
    "use strict";
    sap.ui.define([
        "sap/ui/model/SimpleType",
        "sap/ui/model/ValidateException"
    ], function(SimpleType, ValidateException){
        return SimpleType.extend("sap.ui.demo.nav.dataTypes.EmailAddress", {


            /* receives the users input as a param and 
            convert it to a suitable internal representation*/ 
            parseValue: function(oValue){
                return oValue;
            },

            /* receives the internal presentation of the user input (from formatValue:function())
                and decides if it is value is valid or not */
            validateValue: function (oValue){
                //a sample regex for demonstration (https://ui5.sap.com/#/entity/sap.m.Input/sample/sap.m.sample.InputChecked/code/C.controller.js) is used
                var rexMail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
				if (!oValue.match(rexMail)) 
					throw new ValidateException("'" + oValue + "' is not a valid email address");
            },

            //  format the internal presentation and format the data for the user           
            formatValue: function(oValue){
                
                return oValue;
            }
        });
    });
})();