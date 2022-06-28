import "../style.css";

const elements = {
    container: document.querySelector('#container'),
    header: document.createElement('div'),
    title: document.createElement('span'),
    rightDiv: document.createElement('div'),
    addButton: document.createElement('button'),
    taskCounter: document.createElement('span')
}

function headerContent(){
    const header = elements.header;
    header.classList.toggle('header');
    const container = elements.container;

    elements.title.textContent = 'myTasks';
    elements.addButton.textContent = 'add task';
    elements.taskCounter.textContent = '1/5 today';

    elements.rightDiv.appendChild(elements.addButton);
    elements.rightDiv.appendChild(elements.taskCounter);

    header.appendChild(elements.title);
    header.appendChild(elements.rightDiv);

    container.appendChild(header);

    return container;
}

export default headerContent;