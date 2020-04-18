"use strict"
// const taskList = [{
//     description: "Do homework",
//     urgent: false,
//     project: "Web Applications I",
//     private: true,
//     deadline: new Date('2020-04-23')
// },
// {
//     description: "Study CSS",
//     urgent: false,
//     project: "Web Applications I",
//     private: false,
//     deadline: new Date()
// },
// {
//     description: "Read a good book",
//     urgent: false,
//     project: "Personal",
//     private: true,
//     deadline: "Yesterday at 14:00"
// },
// {
//     description: "Stay safe and healthy at home",
//     urgent: true,
//     project: "Personal",
//     private: true,
//     deadline: ""
// }]
//DatePicker
let taskList = []
const dateEl = document.getElementById('date');
const timeEl = document.getElementById('time');
const createTaskBtn = document.querySelector('.btn.btn-primary')
const taskDescriptionInput = document.querySelector('#taskDescriptionInput')
const importantInput = document.querySelector('#importantSwitch')
const privateSwitchInput = document.querySelector('#privateSwitch')
const projectInput = document.querySelector('#inputProject')
const projectInputOptions = document.querySelectorAll('#inputState option')

createTaskBtn.addEventListener('click', event => {
          taskList.push({
            description: taskDescriptionInput.value,
            urgent: importantInput.value,
            project: projectInput.value,
            private: privateSwitchInput.value,
            deadline: `${dateEl.value} ${timeEl.value}`
        })
})


const all = document.getElementById('filter-all')
const important = document.getElementById('filter-important')
const today = document.getElementById('filter-today')
const nextWeek = document.getElementById('filter-nextweek')
const shared = document.getElementById('filter-shared')

all.addEventListener('click',event=>{
    all.classList.add('active')
    //remove other actives
    important.classList.remove('active')
    today.classList.remove('active')
    nextWeek.classList.remove('active')
    shared.classList.remove('active')
    // create filtered task list
    showAll()
})
important.addEventListener('click',event=>{ 
    important.classList.add('active')
    //remove other actives
    all.classList.remove('active')
    today.classList.remove('active')
    nextWeek.classList.remove('active')
    shared.classList.remove('active')
    // create filtered task list
    showUrgent()
})
today.addEventListener('click',event=>{ 
    today.classList.add('active')
    //remove other actives
    all.classList.remove('active')
    important.classList.remove('active')
    nextWeek.classList.remove('active')
    shared.classList.remove('active')
    // create filtered task list
    showToday()
})
nextWeek.addEventListener('click',event=>{ 
    nextWeek.classList.add('active')
    //remove other actives
    all.classList.remove('active')
    important.classList.remove('active')
    today.classList.remove('active')
    shared.classList.remove('active')
    // create filtered task list
    showNext()
})
shared.addEventListener('click',event=>{ 
    shared.classList.add('active')
    //remove other actives
    all.classList.remove('active')
    important.classList.remove('active')
    today.classList.remove('active')
    nextWeek.classList.remove('active')
    // create filtered task list
    showShared()
})
generateList(taskList)

function activateSideBarElement(){
    document.querySelectorAll("#v-pills-tab li").forEach(item => { // forEach works on any iterable
        item.addEventListener("click", (event) => {
            // toggle the clicked one
            event.target.classList.toggle("active");
            // Check which elem have "active" class, and return their id
            const nodeList = document.querySelectorAll("#v-pills-tab li");
            // nodeList is not a "true" array (does not support map,filter,...), convert it
            const filterList = [...nodeList] //or Array.from(nodeList)
                .filter(filtItem => filtItem.classList.contains("active"))
                .map(filtItem => filtItem.id);
            // filterList = e.g. ['filter-important', 'filter-private']
            console.log(filterList)
            do_action(filterList);
        });
    });   
}

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
