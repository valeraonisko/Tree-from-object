const data = {
      'Рыбы': {
        'Форель': {},
        'Щука': {}
      },

      'Деревья': {
        'Хвойные': {
          'Лиственница': {},
          'Ель': {}
        },
        'Цветковые': {
          'Берёза': {},
          'Тополь': {}
        }

      }
};

function createTreeNode(obj) {
  const ul = document.createElement('ul');
  for (const [key, value] of Object.entries(obj)) {
    const li = document.createElement('li');
    li.textContent = key;
    if (Object.keys(value).length) {
      const subUl = createTreeNode(value);
      li.appendChild(subUl);
    }
    ul.appendChild(li);
  }
  return ul;
}

function createTree(container, obj) {
  container.appendChild(createTreeNode(obj));
}

const container = document.getElementById('container');
createTree(container, data);
