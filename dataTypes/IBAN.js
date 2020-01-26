(function(){
    "use strict";
    sap.ui.define([
        "sap/ui/model/SimpleType",
        "sap/ui/model/ValidateException",
        "sap/ui/demo/nav/libs/iban" //https://github.com/arhs/iban.js#in-the-browser
    ], function(SimpleType, ValidateException){
        return SimpleType.extend("sap.ui.demo.nav.dataTypes.IBAN", {


            /* receives the users input as a param and 
            convert it to a suitable internal representation
            ->convert the input to be workable */ 
            parseValue: function(sValue){
                //remove the spaces 
                let regex = /\s/g;
                sValue = sValue.replace(regex, "");

                return sValue.toUpperCase();
                // return sValue.replace(regex, "");
            },

            /* receives the internal presentation of the user input (from formatValue:function())
                and decides if it is value is valid or not */
            validateValue: function (sValue){

                //Tests
                console.log("==============Correct IBANS===============");
                console.log(IBAN.isValid("AL90208110080000001039531801") + ":    AL90208110080000001039531801");
                console.log(IBAN.isValid("BE68844010370034") + ":    BE68844010370034");
                console.log(IBAN.isValid("DK5750510001322617") + ":    DK5750510001322617");
                console.log(IBAN.isValid("DE12500105170648489890") + ":    DE12500105170648489890");
                console.log(IBAN.isValid("EE342200221034126658") + ":    EE342200221034126658");
                console.log(IBAN.isValid("FI9814283500171141") + ":    FI9814283500171141");
                console.log(IBAN.isValid("GB32ESSE40486562136016") + ":    GB32ESSE40486562136016");
                console.log(IBAN.isValid("GB44BARC20039519527531") + ":    GB44BARC20039519527531");
                console.log(IBAN.isValid("IE92BOFI90001710027952") + ":    IE92BOFI90001710027952");
                console.log(IBAN.isValid("IT68D0300203280000400162854") + ":    IT68D0300203280000400162854");
                console.log(IBAN.isValid("LI1008800000020176306") + ":    LI1008800000020176306");
                console.log(IBAN.isValid("LU761111000872960000") + ":    LU761111000872960000");
                console.log(IBAN.isValid("MT98MMEB44093000000009027293051") + ":    MT98MMEB44093000000009027293051");
                console.log(IBAN.isValid("MC1112739000700011111000H79") + ":    MC1112739000700011111000H79");
                console.log(IBAN.isValid("NL18ABNA0484869868") + ":    NL18ABNA0484869868");
                console.log(IBAN.isValid("NO5015032080119") + ":    NO5015032080119");
                console.log(IBAN.isValid("PL38109024024675781257993959") + ":    PL38109024024675781257993959");
                console.log(IBAN.isValid("PT50003506830000000784311") + ":    PT50003506830000000784311");
                console.log(IBAN.isValid("SM86U0322509800000000270100") + ":    SM86U0322509800000000270100");
                console.log(IBAN.isValid("SE6412000000012170145230") + ":    SE6412000000012170145230");
                console.log(IBAN.isValid("CH3908704016075473007") + ":    CH3908704016075473007");
                console.log(IBAN.isValid("SK9311110000001057361004") + ":    SK9311110000001057361004");
                console.log(IBAN.isValid("SI56031001001300933") + ":    SI56031001001300933");
                console.log(IBAN.isValid("ES1020903200500041045040 ") + ":    ES1020903200500041045040 ");
                console.log(IBAN.isValid("CZ4201000000195505030267") + ":    CZ4201000000195505030267");
                console.log(IBAN.isValid("HU29117080012054779400000000") + ":    HU29117080012054779400000000");
                console.log("");
                console.log("");
                console.log("");
                console.log("==============Modified IBANS===============");
                console.log(IBAN.isValid("AL90208110080110001039531801") + ":    AL90208110080000001039531801");
                console.log(IBAN.isValid("BE68844010370114") + ":    BE68844010370034");
                console.log(IBAN.isValid("DK5750510001311617") + ":    DK5750510001322617");
                console.log(IBAN.isValid("DE12500105170118489890") + ":    DE12500105170648489890");
                console.log(IBAN.isValid("EE342200221031126658") + ":    EE342200221034126658");
                console.log(IBAN.isValid("FI9814283500111141") + ":    FI9814283500171141");
                console.log(IBAN.isValid("GB32ESSE40486112136016") + ":    GB32ESSE40486562136016");
                console.log(IBAN.isValid("GB44BARC20039119527531") + ":    GB44BARC20039519527531");
                console.log(IBAN.isValid("IE92BOFI90001110027952") + ":    IE92BOFI90001710027952");
                console.log(IBAN.isValid("IT68D0300203211000400162854") + ":    IT68D0300203280000400162854");
                console.log(IBAN.isValid("LI1008800000011176306") + ":    LI1008800000020176306");
                console.log(IBAN.isValid("LU761111000871160000") + ":    LU761111000872960000");
                console.log(IBAN.isValid("MT98MMEB44093110000009027293051") + ":    MT98MMEB44093000000009027293051");
                console.log(IBAN.isValid("MC1112739000711011111000H79") + ":    MC1112739000700011111000H79");
                console.log(IBAN.isValid("NL18ABNA0484811868") + ":    NL18ABNA0484869868");
                console.log(IBAN.isValid("NO5015032080111") + ":    NO5015032080119");
                console.log(IBAN.isValid("PL38109024024115781257993959") + ":    PL38109024024675781257993959");
                console.log(IBAN.isValid("PT50003506830110000784311") + ":    PT50003506830000000784311");
                console.log(IBAN.isValid("SM86U0322509811000000270100") + ":    SM86U0322509800000000270100");
                console.log(IBAN.isValid("SE6412000000011170145230") + ":    SE6412000000012170145230");
                console.log(IBAN.isValid("CH3908704016011473007") + ":    CH3908704016075473007");
                console.log(IBAN.isValid("SK9311110000011057361004") + ":    SK9311110000001057361004");
                console.log(IBAN.isValid("SI56031001001110933") + ":    SI56031001001300933");
                console.log(IBAN.isValid("ES1020903200511041045040 ") + ":    ES1020903200500041045040 ");
                console.log(IBAN.isValid("CZ4201000000111505030267") + ":    CZ4201000000195505030267");
                console.log(IBAN.isValid("HU29117080012114779400000000") + ":    HU29117080012054779400000000");


                if(!IBAN.isValid(sValue))
                     throw new ValidateException(sValue + " is not a valid IBAN");

                return sValue;

            },

            //  format the internal presentation and format the data for the user           
            formatValue: function(sValue){
                //add a space after every fourth position
                let aIBAN;
                let sIban = "";
                aIBAN = sValue.split("");
                aIBAN.forEach((element, index) => {
                    if((index > 0) && (index % 4 === 0)){
                        sIban = sIban + " " + element;
                    } else {
                        sIban += element;
                    }

                });
                
                return sIban;
            }
        });
    });
})();