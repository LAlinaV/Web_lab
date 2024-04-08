var menuArray = [
        {
            name: 'Напитки', submenu: [
                {
                    name: 'Кофе', submenu: [
                        {name: 'Эспрессо', url: 'https://ru.wikipedia.org/wiki/%D0%AD%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE'},
                        {name: 'Латте', url: 'https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D1%82%D1%82%D0%B5'},
                        {name: 'Капучино', url: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BF%D1%83%D1%87%D0%B8%D0%BD%D0%BE'}
                    ]
                },
                {
                                    name: 'Чай', submenu: [
                                        {name: 'Чёрный', url: 'https://translated.turbopages.org/proxy_u/en-ru.ru.6bda135d-6605e05d-17e64d7f-74722d776562/https/en.wikipedia.org/wiki/Black_tea'},
                                        {name: 'Зелёный', url: 'https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D1%91%D0%BD%D1%8B%D0%B9_%D1%87%D0%B0%D0%B9'},
                                        {name: 'Фруктовый', url: '#'}
                                    ]
                }
            ]
        },
        {
                    name: 'Завтраки', submenu: [
                        {
                            name: 'Омлеты', submenu: [
                                {name: 'Омлет с сыром', url: 'https://www.youtube.com/watch?v=I53LYnlNxcc&ysclid=lubqw4jds0653280334'},
                                {name: 'Омлет с овощами', url: '#'}

                            ]
                        },
                        {
                                            name: 'Гранола с йогуртом', url: '#'
                        },{
                                                                      name: 'Тосты с авокадо', url: '#'
                                                  }
                    ]
                },
        {
            name: 'Десерты', submenu: [
                {name: 'Шоколадный торт', url: '#'},
                {name: 'Ванильное мороженое', url: '#'}
            ]
        }
    ];

function showMenu(menuItemsA, parentElem) {
    const menu = document.createElement('div');
    menu.classList.add('menusub');

    menuItemsA.forEach(item => {
        const menuItem = document.createElement('div');
        const menuLink = document.createElement('a');

        menuLink.textContent = item.name;
        if (item.url) {
            menuLink.href = item.url;
        }

        menuItem.appendChild(menuLink);
        if (item.submenu) {
            let submenuVisible = false;

            menuLink.addEventListener('click', function (event) {
                event.preventDefault();
                const submenu = menuItem.querySelector('.menusub');

                if (submenuVisible) {
                    submenu.remove();
                    submenuVisible = false;
                } else {
                    showMenu(item.submenu, menuItem);
                    submenuVisible = true;
                }
            });
        }

        menu.appendChild(menuItem);
    });

    parentElem.appendChild(menu);
}

const menu = document.getElementById('menu');
showMenu(menuArray, menu);
