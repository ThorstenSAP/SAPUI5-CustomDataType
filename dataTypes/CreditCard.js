(function(){
    "use strict";
    sap.ui.define([
        "sap/ui/model/SimpleType",
        "sap/ui/model/ValidateException"
    ], function(SimpleType, ValidateException){
        return SimpleType.extend("sap.ui.demo.nav.dataTypes.CreditCard", {


            /* receives the users input as a param and 
            convert it to a suitable internal representation
            ->convert the input to be workable */ 
            parseValue: function(sValue, sInternalType){
                //replace white spaces or "-"
                return sValue.replace(/[\s-]/g, "");
            },

            /* receives the internal presentation of the user input (from formatValue:function())
                and decides if it is value is valid or not */
            validateValue: function (sValue){
                //Luhn's algorithm (https://www.freeformatter.com/credit-card-number-generator-validator.html)
                //convert the string into an array and pop the last digit
                let aDigits = sValue.split("");
                let iCheckDigit = parseInt(aDigits.pop());
                //Reverse the digits
                aDigits.reverse();


                //Multiply the digits in odd position (even index -> since it starts with 0) 
                //by2 If the value exceeds 9, subtract 9 from it
                //Then add all the numbers together
                let iTotal = 0;

                for(let i=0; i<aDigits.length; i++){
                    if(i%2 === 0){
                        aDigits[i] = (aDigits[i]*2);
                        if(aDigits[i] > 9)
                            aDigits[i] -= 9;
                    }
                    iTotal+= parseInt(aDigits[i], 10);
                }
                //multiply by the result by 9
                iTotal *=9;

                //iTotal MODULO 10 must be equal to iCheckDigit to be a valid credit card number
                if(iTotal % 10 !== iCheckDigit)
                    throw new ValidateException(sValue + " is not a valid credit card number");
            },

            //  format the internal presentation and format the data for the user           
            formatValue: function(sValue){
                //convert the parameter into an array to loop over it
                let aDigits = sValue.split("");
                let sOutput = "";

                //insert a "-" after every fourth position
                aDigits.forEach(function (element, index) { 
                    if(index > 0 && index % 4===0){
                        sOutput = sOutput + "-" + element;
                    } else {
                        sOutput += element;
                    }
                });
                return sOutput;
            }
        });
    });
})();