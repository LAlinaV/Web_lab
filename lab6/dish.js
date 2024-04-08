class TLocalStorage {

	addValue(key, value) {
		window.localStorage[key] = value;
	}

	getValue(key) {
		for (var i = 0; i < window.localStorage.length; i++ ) {
            if (key === window.localStorage.key(i)) {
        	    return window.localStorage.getItem(key);


            }
        }
        return undefined;
	}

	deleteValue(key) {
	    for (var i = 0; i < window.localStorage.length; i++) {
                if (key === window.localStorage.key(i)) {
                    window.localStorage.removeItem(key);
                    return true; // Если ключ найден и удален, возвращаем true
                }
            }
            return false;
	}

	getKeys() {
		var keys = [];
		for (var i = 0; i < window.localStorage.length; i++ ) {
			keys.push(" " + window.localStorage.key(i));
		}
		return keys;
	}


	clear() {
        window.localStorage.clear();
	}
}


//------------------------------------------------------------------------------------
var dishStorage = new TLocalStorage("lsDish"),
	dishName = document.getElementById("dishName"),
	dishInfo = document.getElementById("dishInfo"),
	dishInfoDel = document.getElementById("dishInfoDel"),
	dishList = document.getElementById("dishList"),
	dishInfoP = document.getElementById("result"),
// работаем с кнопкой сохранить
	store = document.getElementById("store");

dishName.onclick = function() {
	var a = prompt("Введите название блюда");
    var b = prompt("Введите стоимость блюда");
	dishStorage.addValue(a, b);
}

dishInfo.onclick = function() {
	var a = prompt("Введите название блюда"),
		dishInfoP = document.getElementById("result"),
		answer = dishStorage.getValue(a);

	if (dishStorage.getValue(a) !== undefined) {
		dishInfoP.style.height = "auto";
		dishInfoP.innerHTML = "Название блюдо: " + a +
							   "<br>" + "Стоимость: " + (dishStorage.getValue(a));
							   console.log("Название блюдо: " + a + "Стоимость: " + (dishStorage.getValue(a)));
	} else {
		dishInfoP.innerHTML = "В хранилище такое блюдо ОТСУТСТВУЕТ!";
		console.log("В хранилище такое блюдо ОТСУТСТВУЕТ!");
	}
}

dishInfoDel.onclick = function() {
	var dishInfoDel = prompt("Введите название блюда"),
		dishInfoP = document.getElementById("result");

	if (dishStorage.deleteValue(dishInfoDel) === true) {
		dishInfoP.innerHTML = "информация о блюде УДАЛЕНА!";
		console.log("информация о блюде УДАЛЕНА!");
	} else {
		dishInfoP.innerHTML = "В хранилище такое блюдо ОТСУТСТВУЕТ!";
		console.log("В хранилище такое блюдо ОТСУТСТВУЕТ!");
	}
}

dishList.onclick = function() {
	var dishInfoP = document.getElementById("result");
	dishInfoP.innerHTML = dishStorage.getKeys();
	console.log(dishInfoP.innerHTML);
}

clear.onclick = function() {
	dishStorage.clear();
}