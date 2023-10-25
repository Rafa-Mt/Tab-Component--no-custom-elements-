export class TabController {
    constructor(title) {
        const styleLinker = document.createElement('link');
        styleLinker.rel = "stylesheet";
        styleLinker.href = "./tabStyle.css";

        
        this.elements = [];
        const template = /*html*/`
            <div className="controller" id="controller">
                <h2 id="controller_title" className="controller_title"> ${title} </h2>
                <div className="tab_list" id="tab_list"></div>
            </div>
            <div className="active_content" id="active_content"></div>
        `;
        this.container = document.createElement('div');
        this.container.classList.add('tab_controller');
        this.container.id = "tab_controller";
        this.container.innerHTML = template;

        document.body.appendChild(this.container);

        document.head.appendChild(styleLinker);
    }

    newTab({title, content}) {
        const selectorTemplate = /*html*/`
            <h3 className="tab_title"> ${title} </h3>
        `;

        this.hideAll();

        const selector = document.createElement('div');
        selector.innerHTML = selectorTemplate;
        document.getElementById("tab_list").appendChild(selector);
        // document.querySelector('.tab_list').appendChild(selector)

        const newTab = new Tab({
            title: title,
            content: content,
            controller: this,
            selector: selector
        });
        this.elements.push(newTab);
        document.getElementById('active_content').appendChild(newTab.container);
        // document.querySelector('.active_content').appendChild(newTab.container);
        newTab.show();
    }

    hideAll() {
        this.elements.forEach((tab) => {
            tab.hide(); 
        });
    }

}

export class Tab {
    constructor({name, controller, content, selector}) {
        this.name = name;
        this.controller = controller;
        this.selector = selector;
        
        this.container = document.createElement('div');
        this.container.innerHTML = content;
        this.container.classList.add('tab')
        this.selector.classList.add('selector','active_selector');

        this.selector.onclick = () => {
            this.controller.hideAll();
            this.show();
        }
    }

    show() {
        this.container.classList.add('active_tab');
        this.selector.classList.add('active_selector');
    }

    hide() {
        this.container.classList.remove('active_tab');
        this.selector.classList.remove('active_selector');
    }
}

