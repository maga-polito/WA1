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
        li.className="list-group-item d-flex justify-content-between align-items-center"
        let checkBox = document.createElement("input")
        let label = document.createElement("label")
        let projectBadge = document.createElement('span')
        let sharedIcon = document.createElement('span')
        sharedIcon.className = 'material-icons'
        sharedIcon.innerText = 'people_outline'
        projectBadge.className = "badge badge-pill badge-secondary"
        projectBadge.innerText = el.project
        checkBox.type = "checkbox"
        checkBox.value = el["description"]
        list.appendChild(li)
        li.appendChild(checkBox);
        li.appendChild(label);
        label.appendChild(document.createTextNode(el["description"]))
        li.appendChild(projectBadge)
        if (!el.private){
            li.appendChild(sharedIcon)
        }
    }
}

{/* <th scope="row"><input type="checkbox" aria-label="completed"></th>
<td>Study CSS</td>
<td><span class="badge badge-pill badge-secondary">Web Applications I</span></td>
<td><span class="material-icons">people_outline</span></td>
<td>Today at 14:00</td> */}