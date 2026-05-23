/*
window.addEventListener('load', () => {

});
*/

const form = document.querySelector("#form");

const list = document.querySelector("#list");

const deleteButton = document.querySelector("#deleteButton");


const savedTodo = localStorage.getItem("todo");


/* ToDo追加 */
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const input = document.querySelector("#text");

    const li = document.createElement("li");



    /* チェックボックス */
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    /* 文字 */

    const span = document.createElement("span");
    span.textContent = input.value;




    /* チェック時 */
    checkbox.addEventListener("change", () => {

        span.classList.toggle("completed");

    });

    li.appendChild(span);

    li.appendChild(checkbox);

    list.appendChild(li);

    input.value = '';




    /* チェック済み削除 */
    deleteButton.addEventListener("click", () => {

        const items = document.querySelectorAll("li");

        items.forEach((item) => {

            const checkbox = item.querySelector("input");

            if (checkbox.checked) {

                item.remove();

            }

        });

    });




    //ローカルストレージ

    form.addEventListener("click", () => {

        const hozonn = document.querySelectorAll("li");

        hozonn.forEach((item) => {

            localStorage.setItem("hozonn", JSON.stringify(hozonn));





        }

    });

});


/*
localStorage.setItem("todo", input.value);

const savedTodo = localStorage.getItem("todo");
*/






});