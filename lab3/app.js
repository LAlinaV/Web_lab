var hash = {};

function AddValue(key, value) {
    hash[key] = value;
    document.getElementById('result').textContent = `Добавлена информация о ${key}`;
}

function  AskValue1() {
    var a = prompt("Введите название блюда");
    var b = prompt("ВВедите стоимость блюда");
    AddValue(a,b);
}

function DeleteValue(key) {
    if (key in hash) {
        delete hash[key];
        document.getElementById('result').textContent = `Информация о ${key} удалена`;
    } else {
        document.getElementById('result').textContent = `Информации о ${key} нет`;
    }
}
function  AskValue2() {
    var a = prompt("Введите название блюда");
    DeleteValue(a);
}

function GetValueInfo(key) {
    if (key in hash) {
        document.getElementById('result').textContent = `Информация о ${key}: ${hash[key]}`;
        console.log(`Информация о ${key}: ${hash[key]}`);
    } else {
        document.getElementById('result').textContent = `Информации о ${key} нет`;
        console.log(`Информации о ${key} нет`);
    }
}

function  AskValue3() {
    var a = prompt("Введите название блюда");
    GetValueInfo(a);
}
function ListValues() {
    var result = "Перечень всех блюд:\n";
    for (var key in hash) {
        result += `${key}: ${hash[key]}\n`;
    }
    document.getElementById('result').textContent = result;
    console.log(result);
}
