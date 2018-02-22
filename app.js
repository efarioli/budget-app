var budgetController = (function() {
    //some code

})();

var UIController = (function(){
    // Some code

});

var controller = (function(budgetCtrl, UICtrl) {
    //controller is the only one module that can interact with the others modules

    var ctrlAddItem =function() {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };
    
    document.querySelector('.add__btn').addEventListener('click', function() {
        console.log('ENTER was pressed');
      
    });

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13){
            console.log('ENTER was pressed');
        }
    });

})(budgetController, UIController);
