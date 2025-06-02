sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.acn.training.sapui5exercises.controller.View1", {
        onInit: function() {
        },

        onClearPress: function() {
            for (var i = 0; i<= 5; i++) {
                var input = this.byId("input" + i);
                if (input) {
                    input.setValue("");
                }
            }
            var oSelect = this.byId("select0");
            if (oSelect) {
            oSelect.setSelectedKey("");
        }
    }
    });
});
