// problem: 1
function anaToVori(ana) {
    if (ana > 0) {
        return ana / 16;
    } else {
        return 'enter positive number';
    }
}
var total = anaToVori(60);
console.log(total);

// problem : 2
function pandaCost(singara, somusa, jilapi) {
    if (singara > -1 && somusa > -1 && jilapi > -1) {
        var singaraPrice = singara * 7;
        var somusaPrice = somusa * 10;
        var jilapiPrice = jilapi * 15;

        var total = singaraPrice + somusaPrice + jilapiPrice;
        return total;
    } else {
        return 'enter positive number';
    }
}

var totalPrice = pandaCost(0, 0, -1);
console.log(totalPrice);

// problem : 3  
function picnicBudget(people) {
    if (people > 0) {
        if (people <= 100) {
            return people * 5000;
        } else if (people > 100 && people <= 200) {
            var previousValue = 100 * 5000;
            var currentPeople = people - 100;
            var amount = currentPeople * 4000;
            return previousValue + amount;
        } else if (people > 200) {
            var previousValue1 = 100 * 5000;
            var previousValue2 = 100 * 4000;
            var currentPeople = people - 200;
            var amount = currentPeople * 3000;
            return previousValue1 + previousValue2 + amount;
        }
    } else {
        return 'enter positive number';
    }
}

var totalCost = picnicBudget(201);
console.log(totalCost);

// problem : 4
function oddFriend(friend) {
    if (friend != '') {
        for (var i = 0; i < friend.length; i++) {
            const element = friend[i];
            if (element.length % 2 == 1) {
                return element;
            }
        }
    } else {
        return 'no data';
    }

}
var friends = oddFriend(['kamals', 'arafat', 'rofiq']);
console.log(friends)