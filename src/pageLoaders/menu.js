import '../style.css';

const elements = {
    menu: document.createElement('div'),
    list: document.createElement('ul'),
    classDiv: document.createElement('div'),
    classOpt: () => {
        const classOpt = document.createElement('a');
        return classOpt;
    },
    option: () => {
        const li = document.createElement('li');
        return li;
    },
    optionsName: ['Today', 'This week', 'This month', 'Anytime', 'Classes'],
    ids: ['today', 'week', 'month', 'anytime', 'classes'],
    classes: ['Personal', 'Work', 'Studies', 'Shopping', 'Other']
}

function showClasses(btn, classDiv){
    btn.addEventListener('click', () => {
        classDiv.classList.toggle('show');
    })
}

function menuContent(){
    const menu = elements.menu;
    menu.classList.toggle('menu');
    const container = document.querySelector('#container');

    for(let i = 0; i < elements.optionsName.length; i++)
    {
        let opt = elements.option();
        opt.textContent = elements.optionsName[i];
        opt.setAttribute('id', elements.ids[i]);
        elements.list.appendChild(opt);
    }

    for(let i = 0; i < elements.classes.length; i++)
    {
        let classOpt = elements.classOpt();
        classOpt.textContent = elements.classes[i];
        classOpt.setAttribute('id', elements.classes[i]);
        elements.classDiv.appendChild(classOpt);
    }


    menu.appendChild(elements.list);
    menu.appendChild(elements.classDiv);
    container.appendChild(menu);

    const classBtn = document.querySelector('#classes');
    showClasses(classBtn, elements.classDiv);

    return container;
}

export default menuContent;