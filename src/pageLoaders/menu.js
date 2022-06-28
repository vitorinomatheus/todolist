import '../style.css';

const elements = {
    menu: document.createElement('div'),
    list: document.createElement('ul'),
    option: () => {
        const li = document.createElement('li');
        return li;
    },
    optionsName: ['Today', 'This week', 'This month', 'Anytime', 'Classes'],
    ids: ['today', 'week', 'month', 'anytime', 'classes']
}

function menuContent(){
    const menu = elements.menu;
    menu.classList.toggle('menu');
    const container = document.querySelector('#container');

    for(let i = 0; i < 5; i++)
    {
        let opt = elements.option();
        opt.textContent = elements.optionsName[i];
        opt.setAttribute('id', elements.ids[i]);
        elements.list.appendChild(opt);
    }

    menu.appendChild(elements.list);
    container.appendChild(menu);

    return container;
}

export default menuContent;