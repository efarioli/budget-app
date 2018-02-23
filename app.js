var budgetController = (function() {
    //some code

})();

var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInpunt: function() {
            return{
            type: document.querySelector(DOMstrings.inputType).value,// will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
        };
    },

    getDOMStrings: function() {
        return DOMstrings;
    }
   
    };

})();

var controller = (function(budgetCtrl, UICtrl) {
    //controller is the only one module that can interact with the others modules

    var DOM = UICtrl.getDOMStrings();

    var ctrlAddItem =function() {
        // 1. Get the field input data

        var input = UICtrl.getInpunt();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController, UIController);
