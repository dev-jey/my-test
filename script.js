
const myApp = angular.module("myApp", []);


myApp.controller("mainController", ($scope) => {
    $scope.welcomeMessage = "Welcome To The Restaurant";
    $scope.toggleSelection = (event, menuItem) => {
        if (event.target.checked) {
            $scope.text = "You might also like"
            $scope.menuIt=menuItem.name;
            $scope.choices = menuItem.choices;
            $scope.related = menuItem.related;
        } else {
            $scope.text=null;
            $scope.menuIt = null;
            $scope.choices = null;
            $scope.related = null;
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