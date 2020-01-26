sap.ui.define(
  [
    "sap/ui/demo/nav/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/nav/dataTypes/CreditCard",
    "sap/ui/demo/nav/dataTypes/EmailAddress",
    "sap/ui/demo/nav/dataTypes/IBAN"
  ],
  function(BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("sap.ui.demo.nav.controller.Home", {
      onInit: function() {
        this.getView().setModel(
          new JSONModel({
            creditCardNumber: "",
            emailAddress: "",
            IBAN: ""
          })
        );
        sap.ui
          .getCore()
          .getMessageManager()
          .registerObject(this.getView().byId("ccInput"), true);
        sap.ui
          .getCore()
          .getMessageManager()
          .registerObject(this.getView().byId("emailAddressInput"), true);
        sap.ui
          .getCore()
          .getMessageManager()
          .registerObject(this.getView().byId("inputIBAN"), true);

        var s =JSON.parse('[{"aFilters":[{"sPath":"Date","sOperator":"EQ","oValue1":"2019-12-05T00:00:00.000Z","_bMultiFilter":false},{"aFilters":[{"sPath":"Role","sOperator":"EQ","oValue1":"8659C6B95D051EE89CFAE2F0FB471518","_bMultiFilter":false}],"_bMultiFilter":true}],"bAnd":true,"_bMultiFilter":true},{"aFilters":[{"sPath":"Date","sOperator":"EQ","oValue1":"2019-12-06T00:00:00.000Z","_bMultiFilter":false},{"aFilters":[{"sPath":"Role","sOperator":"EQ","oValue1":"8659C6B95D051EE995894218D0A98E9E","_bMultiFilter":false}],"_bMultiFilter":true}],"bAnd":true,"_bMultiFilter":true},{"aFilters":[{"sPath":"DateWorkgroup","sOperator":"EQ","oValue1":"2019-12-05T00:00:00.000Z","_bMultiFilter":false},{"aFilters":[{"sPath":"Workgroup","sOperator":"EQ","oValue1":"10003900","_bMultiFilter":false},{"sPath":"Workgroup","sOperator":"EQ","oValue1":"10003901","_bMultiFilter":false}],"_bMultiFilter":true}],"bAnd":true,"_bMultiFilter":true},{"aFilters":[{"sPath":"DateSkillLevel1","sOperator":"EQ","oValue1":"2019-12-05T00:00:00.000Z","_bMultiFilter":false},{"aFilters":[{"sPath":"SkillLevel1","sOperator":"EQ","oValue1":"10003778","_bMultiFilter":false},{"sPath":"SkillLevel1","sOperator":"EQ","oValue1":"10003780","_bMultiFilter":false}],"_bMultiFilter":true}],"bAnd":true,"_bMultiFilter":true}]');

		  this._getRoleAndWorkgroupFilters(s);
		},

		_getRoleAndWorkgroupFilters: function (aVariantFilters) {
			let aResult = [];
			let aDeleteIndexes = [];
			let aAllowedFilters = ["Date", "Role", "DateWorkgroup", "Workgroup"];

			let fnFlattenFilters = function (aFilterStructure){
				//iterate over the filter objects (4 in the sample)
				aFilterStructure.forEach(function (oFilterArray, index){
					//make use of a recursive function to detect wrong entries (since the second object is probably an array)
					let fnDetectFalseFilter = function (aFilters){
						aFilters.forEach(function (oFilter){

						//if an sPath is given we are in the specific object
						if(oFilter.sPath){
							//ensure that the correct values are in the sPath
							//if not add the index of the forEach loop to the array for deletion
								if(!aAllowedFilters.includes(oFilter.sPath)){
									//check if the array Delete Indexes already have the element index
									//only push it if it is not there yet
									if(!aDeleteIndexes.includes(index))
										aDeleteIndexes.push(index);
									return;
							}

						} else if (oFilter.aFilters){
							fnDetectFalseFilter(oFilter.aFilters);
						}
						});
					};
					fnDetectFalseFilter(oFilterArray.aFilters);
				});
			};
			fnFlattenFilters(aVariantFilters);
			

			//push only the correct filter objects into the results array
			aVariantFilters.forEach(function (element, index){
				//if the index is not included in the aDeleteIndexes -> its gonna be included in the results array
				if(!aDeleteIndexes.includes(index))
					aResult.push(element);
			});


			return aResult;
		}


    });
  }
);
