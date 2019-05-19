const data = {
      "Рыбы": {
        "Форель": {},
        "Щука": {}
      },

      "Деревья": {
        "Хвойные": {
          "Лиственница": {},
          "Ель": {}
        },
        "Цветковые": {
          "Берёза": {},
          "Тополь": {}
        }

      }
};

let container = document.getElementById('container');
function createTree(container, obj) {
  container.innerHTML = createTreeText(obj)
}
function createTreeText(obj) {
  let childLi = '';
  let parentUl = '';
  for (let key in obj) {
    childLi += `<li>${key}${createTreeText(obj[key])}</li>`
    parentUl = `<ul>${childLi}</ul>`
  }
  return parentUl;
}
createTree(container, data);
