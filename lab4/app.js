class THashStorage
{
	 constructor(){
        this.hash = {};
     };
    Reset() {
    for( var item in this.hash){
    delete this.hash[item];
    }
    }
    AddValue(key, value) {
        this.hash[key] = value;
        document.getElementById('result').textContent = `Добавлена информация о ${key}`;
    }


   DeleteValue(key) {
      if (key in this.hash) {
          delete this.hash[key];
          document.getElementById('result').textContent = `Информация о ${key} удалена`;
      } else {
          document.getElementById('result').textContent = `Информации о ${key} нет`;
      }
  }


  GetValueInfo(key) {
      if (key in this.hash) {
          document.getElementById('result').textContent = `Информация о ${key}: ${this.hash[key]}`;
          console.log(`Информация о ${key}: ${this.hash[key]}`);
      } else {
          document.getElementById('result').textContent = `Информации о ${key} нет`;
          console.log(`Информации о ${key} нет`);
      }
  }


  ListValues() {
      var result = "Перечень всех блюд:\n";
      for (var key in this.hash) {
          result += `${key}: ${this.hash[key]}\n`;
      }
      document.getElementById('result').textContent = result;
      console.log(result);
  }

}
var Storage=new THashStorage();
function AskValue1() {
      var a = prompt("Введите название блюда");
      var b = prompt("ВВедите стоимость блюда");
      Storage.AddValue(a,b);
  }

  function  AskValue3() {
        var a = prompt("Введите название блюда");
        Storage.GetValueInfo(a);
  }
  function AskValue2() {
        var a = prompt("Введите название блюда");
        Storage.DeleteValue(a);
  }

  function GetAll(){
  Storage.ListValues();
  }

  function ClearStorage(){
  Storage.Reset();
  }










