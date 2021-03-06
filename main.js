
const myApp = angular.module("myApp", []);


myApp.controller("mainController", ($scope) => {
    $scope.welcomeMessage = "Welcome To The Restaurant";
    $scope.toggleSelection = (event, choice, menuItem, relatedItem) => {
        if (event.target.checked) {
            if (menuItem) {
                $scope.menuItm = menuItem.name;
                if (choice == 'Greek' || choice == "Minestrone") {
                    $scope.text = "You might also like"
                    $scope.related = menuItem.related;
                }
            }
            if (relatedItem) {
                $scope.relatedItem = relatedItem.name;
                $scope.relatedChoices = relatedItem.choices;
            }
            $scope.choices = menuItem.choices;
        } else {
            $scope.text = null;
            $scope.menuItm = null;
            $scope.choices = null;
            $scope.related = null;
            $scope.relatedChoices = null;
            $scope.relatedItem = null;
        };
    };

    $scope.menuItems = [
        {
            name: 'Salad',
            choices: [
                { name: 'Santa Fe' },
                { name: 'Greek' },
                { name: 'Asian' },
            ],
            related: [
                {
                    name: 'Dressing',
                    choices: [
                        { name: 'Italian' },
                        { name: 'Blue Cheese' },
                        { name: 'Ranch' },
                    ]
                },
                {
                    name:
                        'Bread',
                    choices: [
                        { name: 'Italian' },
                        { name: 'Flat' },
                        { name: 'Sourdough' },
                    ]
                }
            ]
        },
        {
            name: 'Entree',
            choices: [

                { name: 'Steak' },
                { name: 'Salmon' },
                { name: 'Rice' },
            ],
            related: [
            ]
        },
        {
            name:
                'Soup',
            choices: [
                { name: 'Minestrone' },
                { name: 'Hot and sour' },
                { name: 'Miso' },
            ],
            related: [
                {
                    name:
                        'Bread',
                    choices: [
                        { name: 'Breadsticks' }
                    ]
                }
            ]
        }
    ];
})