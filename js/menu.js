const createListBtn = document.querySelector('.create_list_btn');
const sideMenu = document.querySelector('.side_menu');

let menus = [];

const createInput = () => {
    const menuList = document.createElement('li');
    const menuForm = document.createElement('form');
    const menuInput = document.createElement('input');

    menuInput.type = "text";
    menuInput.maxLength = 10;

    sideMenu.appendChild(menuList);
    menuList.appendChild(menuForm);
    menuForm.appendChild(menuInput);
}

createListBtn.addEventListener('click', createInput);

