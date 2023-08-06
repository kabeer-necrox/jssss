let users = [
    { title: "Create an app ", isCompleted: false },
    { title: "Go to Market ", isCompleted: false },
];
function renderUsers() {
    let a = (document.body.querySelector(".list").innerHTML = "");
    console.log(a);
    const ul = document.createElement("ul");
    users.forEach((user, index) => {
        let li = document.createElement("li");
        let closeButton = document.createElement("button");
        let addButton = document.createElement("button");
        closeButton.innerHTML = "&times;" + " ";
        addButton.innerHTML = "&#x2611;" + " ";
        addButton.style.backgroundColor = "pink";
        closeButton.style.backgroundColor = "orane";
        closeButton.style.fontSize = "35px";
        addButton.style.fontSize = "35px";
        li.innerHTML = users[index].title;
        addButton.onclick = function () {
            if (users.isCompleted == false) {
                li.style.textDecoration = "line-through";
                users.isCompleted = true;
            } else {
                li.style.textDecoration = "none";
                users.isCompleted = false;
            }
        };
        closeButton.onclick = function () {
            users.splice(index, 1);
            renderUsers();
        };
        li.append(closeButton);
        li.append(addButton);
        ul.append(li);
    });
    if (users.length == 0) {
        alert(" There are no tasks available");
    }
    document.body.querySelector(".list").append(ul);
}
const input = document.createElement("input");
const inputButton = document.createElement("button");
inputButton.innerHTML = "Create User";
input.placeholder = "Create a new user";
document.body.querySelector(".form").append(input);
document.body.querySelector(".form").append(inputButton);
inputButton.onclick = function () {
    if (input.value) {
        users.push({ title: input.value, isCompleted: true });
        console.log({ users });
        input.value = "";
    }
    renderUsers();
};
renderUsers();