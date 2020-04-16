const taskList = [{
    description: "Do homework",
    urgent: false,
    project: "Web Applications I",
    private: true,
    deadline: "Monday 13 April 2020 at 11:30"
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

generateList(taskList)

function generateList(data) {
    const list = document.querySelector("#task-list");
    const ul = document.createElement("ul")
    ul.className = 'list-group list-group-flush'
    ul.id = 'task-list-content'
    for (let el of data) {
        let li = document.createElement("li")
        li.className = "list-group-item d-flex justify-content-between align-items-center"
        let checkBox = document.createElement("input")
        let label = document.createElement("label")
        let projectBadge = document.createElement('span')
        let sharedIcon = document.createElement('span')
        let date = document.createElement('small')
        sharedIcon.className = 'material-icons'
        sharedIcon.innerText = 'people_outline'
        projectBadge.className = "badge badge-pill badge-secondary"
        projectBadge.innerText = el.project
        checkBox.type = "checkbox"
        checkBox.value = el["description"]
        ul.appendChild(li)
        li.appendChild(checkBox);
        li.appendChild(label);
        label.appendChild(document.createTextNode(el["description"]))
        li.appendChild(projectBadge)
        if (!el.private) {
            li.appendChild(sharedIcon)
        }
        date.appendChild(document.createTextNode(el.deadline))
        li.appendChild(date)
        if (el.urgent) {
            checkBox.className = "important-checkbox"
        }
    }
    list.appendChild(ul)
}
function showAll() {
    deleteList()
    generateList(taskList)
}
function showUrgent() {
    const filteredList = taskList.filter(task => task.urgent);
    deleteList()
    generateList(filteredList)
}
function showToday() {
    const filteredList = taskList.filter(task => {
        let dateTime = Date.parse(task.deadline);
        console.log(dateTime)
        console.log(new Date().getDate())
        return dateTime == new Date().getDate();
    });
    deleteList()
    generateList(filteredList)
}
function showNext() {
    const filteredList = taskList.filter(task => task.urgent);
    deleteList()
    generateList(filteredList)
}
function showShared() {
    const filteredList = taskList.filter(task => !task.private);
    deleteList()
    generateList(filteredList)
}
function deleteList(){
    const el = document.querySelector('#task-list-content')
    el.remove()
}



// {/* <th scope="row"><input type="checkbox" aria-label="completed"></th>
// <td>Study CSS</td>
// <td><span class="badge badge-pill badge-secondary">Web Applications I</span></td>
// <td><span class="material-icons">people_outline</span></td>
// <td>Today at 14:00</td> */}