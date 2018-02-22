var budgetController = (function() {
    //some code

})();

var UIController = (function(){
    // Some code

});

var controller = (function(budgetCtrl, UICtrl) {
    //controller is the only one module that can interact with the others modules
    //some code

})(budgetController, UIController);