var FormA = [
  { label: 'Имя:', elemtype: 'text', name: 'name', width: 200 },
  { label: 'Фамилия:', elemtype: 'text', name: 'surname', width: 200 },
  { label: 'Телефон:', elemtype: 'tel', name: 'phone' },
  { label: 'Дата и время:', elemtype: 'datetime-local', name: 'datetime' },
  { label: 'Вы будете с детьми:', elemtype: 'checkbox', name: 'withChild' },
  { label: 'Номер столика:', elemtype: 'select', name: 'table', options: [
    { value: '1', text: '1', selected: true },
    { value: '2', text: '2' },
    { value: '3', text: '3' },
    { value: '4', text: '4' },
    { value: '5', text: '5' },
    { value: '6', text: '6' },
    { value: '7', text: '7' },
    { value: '8', text: '8' },
    { value: '9', text: '9' },
    { value: '10', text: '10' }
  ]},
  { label: 'Терраса', elemtype: 'radio', name: 'radio1', value: '1', checked: true },
  { label: 'Зал', elemtype: 'radio', name: 'radio1', value: '2' },
  { label: '', elemtype: 'button', value: 'Заказать' }
];

function validateForm() {
  var form = document.getElementById('myForm');
  var elements = form.elements;
  var valid = true;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.type !== 'button') {
      var errorMessage = '';
      switch (element.type) {
        case 'text':
          if (element.value.length < 3) {
            errorMessage = 'Имя должно содержать не менее 3 символов';
            valid = false;
          }
          break;
        case 'tel':
          var phonePattern = /^\+?[0-9\s-]+$/;
          if (!phonePattern.test(element.value)) {
            errorMessage = 'Введите корректный номер телефона';
            valid = false;
          }
          break;
        case 'datetime-local':
                  if (!element.value) {
                    errorMessage = 'Выберите дату и время';
                    valid = false;
                  } else {
                    var selectedDateTime = new Date(element.value);
                    var selectedTime = selectedDateTime.getHours();
                    if (selectedTime < 9 || selectedTime > 21) {
                      errorMessage = 'Выберите время с 9:00 до 21:00';
                      valid = false;
                    }
                    var currentDate = new Date();
                    var tomorrowDate = new Date(currentDate);
                    tomorrowDate.setDate(currentDate.getDate() + 1);
                    if (selectedDateTime < tomorrowDate) {
                      errorMessage = 'Дату можно выбрать не менее, чем за 2 дня';
                      valid = false;
                    }
                  }
                  break;
        default:
          break;
      }

      var nextSibling = element.nextElementSibling;
      if (errorMessage) {
        if (nextSibling && nextSibling.classList.contains('error-message')) {
          nextSibling.innerHTML = errorMessage;
        } else {
          var errorNode = document.createElement('span');
          errorNode.className = 'error-message';
          errorNode.innerHTML = errorMessage;
          element.parentNode.insertBefore(errorNode, nextSibling);
        }
      } else {
        if (nextSibling && nextSibling.classList.contains('error-message')) {
          nextSibling.remove();
        }
      }
    }
  }

  return valid;
}

document.getElementById('myForm').onsubmit = function () {
  return validateForm();
};

function createFormFields(formArray) {
  var form = document.getElementById('myForm');
  var table = document.createElement('table');
  form.appendChild(table);

  // Создаем строки таблицы для каждого элемента формы
  formArray.forEach(function (element) {
    var tr = document.createElement('tr');
    var tdLabel = document.createElement('td');
    var tdInput = document.createElement('td');

    // Создаем метку (label) для элемента
    var label = document.createElement('label');
    label.textContent = element.label;
    tdLabel.appendChild(label);

    // Создаем элемент ввода в зависимости от типа
    var field;
    if (element.elemtype === 'button') {
      field = document.createElement('input');
      field.type = 'submit';
      field.value = element.value;
    } else if (element.elemtype === 'select') {
      field = document.createElement('select');
      element.options.forEach(option => {
        let opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text;
        if (option.selected) {
          opt.selected = true;
        }
        field.appendChild(opt);
      });
    } else {
      field = document.createElement('input');
      field.type = element.elemtype;
      field.name = element.name;
      if (element.width) {
        field.style.width = element.width + 'px';
      }
      if (element.checked) {
        field.checked = true;
      }
    }

    // Добавляем элемент в соответствующую ячейку таблицы
    tdInput.appendChild(field);

    // Добавляем метку и элемент в строку таблицы
    tr.appendChild(tdLabel);
    tr.appendChild(tdInput);

    // Добавляем строку в таблицу
    table.appendChild(tr);
  });
}

createFormFields(FormA);
