let taskList = [{
    description: "Do homework",
    urgent: false,
    project: "Web Applications I",
    private: true,
    deadline: "Monday 27 April 2020 at 11:30"
},
{
    description: "Study CSS",
    urgent: false,
    project: "Web Applications I",
    private: false,
    deadline: "Today at 14:00"
},
{
    description: "Read a good book",
    urgent: false,
    project: "Personal",
    private: true,
    deadline: "Yesterday at 14:00"
},
{
    description: "Stay safe and healthy at home",
    urgent: true,
    project: "Personal",
    private: true,
    deadline: ""
}]
let list = document.querySelector("#task-list");

genreateList(list, taskList)

function genreateList(list, data) {
    for(let el of data){
        console.log(el.description)
        let li = document.createElement("li")
        let checkBox = document.createElement("input")
        let label = document.createElement("label")
        checkBox.type = "checkbox"
        checkBox.value = el["description"]
        list.appendChild(li)
        li.appendChild(checkBox);
        li.appendChild(label);
        label.appendChild(document.createTextNode(el["description"]))
    }
}

function x() {
    let animals = ["lion", "tigers", "bears", "squirrels"];
    let myDiv = document.getElementById("cboxes");

    for (let i = 0; i < animals.length; i++) {
        let checkBox = document.createElement("input");
        let label = document.createElement("label");
        checkBox.type = "checkbox";
        checkBox.value = animals[i];
        myDiv.appendChild(checkBox);
        myDiv.appendChild(label);
        label.appendChild(document.createTextNode(animals[i]));
    }
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}


