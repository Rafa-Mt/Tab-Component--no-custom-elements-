import { TabController } from "./Tab.js";

const controller = new TabController("Tab Controller");
document.body.appendChild(controller.container);

const createTemplate = (text) => {
    return /*html*/ `
    <div className="exampledata">
        <h1 className="data">Hello, this is the tab ${text}</h1>
    </div>`
}

controller.newTab({
    title: "Tab 1",
    content: createTemplate("P1")
})

controller.newTab({
    title: "Tab 2",
    content: createTemplate("P2")
})

controller.newTab({
    title: "Tab 3",
    content: createTemplate("P3")
})

controller.newTab({
    title: "Tab 4",
    content: createTemplate("P4")
})

controller.newTab({
    title: "Tab 5",
    content: createTemplate("P5")
})