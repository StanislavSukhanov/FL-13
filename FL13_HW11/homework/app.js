const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

// TODO: your code goes here

rootNode.append(makeUl(data));

function makeLi(data) {
  return data.map((item) => {
    const li = document.createElement('li');
    li.append(item.title);
    if (item.folder) {
      li.prepend(getIcon('folder'));
      li.classList.add('hide_children');
      li.addEventListener('click',
          (event) => {
          event.stopPropagation();
          li.classList.toggle('hide_children');
        });
    } else {
      li.prepend(getIcon('insert_drive_file'));
    }
    if (item.children) {
      li.append(makeUl(item.children));
    }
    return li;
  })
}

function makeUl(data) {
  const ul = document.createElement('ul');
  ul.append(...makeLi(data));
  console.log(ul);
  return ul;
}

function getIcon(name){
  let icon = document.createElement('i');
  icon.className = 'material-icons';
  icon.append(name);
  return icon;
}



