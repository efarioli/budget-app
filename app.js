var budgetController = (function () {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID, itemsArr;

            // [1 2 3 4 5] , next id = 6
            // [1 2 6 8] , next id = 9
            itemsArr = data.allItems[type]; // 

            // if the item array has no element put ID 0
            if (itemsArr.length > 0){
                ID = itemsArr[itemsArr.length-1];
            } else {
                ID =0;
            }
            // create either a new expense or income, depends the type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push the new element into either array expenses
            itemsArr.push(newItem);
            return newItem;
        },
        testing: function() {
            return data;
            // just only to check the data object
            // delete when finish the project
        }
    };

})();

var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInpunt: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMStrings: function () {
            return DOMstrings;
        }

    };

})();

var controller = (function (budgetCtrl, UICtrl) {
    //controller is the only one module that can interact with the others modules

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        // 1. Get the field input data

        var input = UICtrl.getInpunt();

        // 2. Add the item to the budget controller
        budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            console.log('aplication started');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();