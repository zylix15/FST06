document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Select DOM elements
  const todoInput = document.querySelector(".todo-input");
  const todoButton = document.querySelector(".todo-button");
  const filterTodo = document.querySelector(".filter-todo"); // Renamed back to filterTodo
  const todoList = document.querySelector(".todo-list");

  // Step 2: Create event listeners
  todoButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", deleteOrCompleteTodo);
  filterTodo.addEventListener("change", filterTodos);

  function addTodo(e) {
    // Prevent form from submitting
    e.preventDefault();

    if (todoInput.value.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a Todo div container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create  a new todo list item
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Create the completed button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedButton);

    // Create the delete button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

    // Append the todo div to the todo list
    todoList.appendChild(todoDiv);
    todoInput.value = ""; // Clear input field
  }

  // e (event) = the information of a change on a website
  // e.target = the element that the event happened on

  // Step 4: function to delete or complete
  function deleteOrCompleteTodo(e) {
    const targetBtn = e.target;

    // Delete task
    if (targetBtn.classList.contains("trash-btn")) {
      const todoDiv = targetBtn.parentElement;
      todoDiv.classList.add("fall");
      todoDiv.addEventListener("transitionend", function () {
        todoDiv.remove();
      });
    }

    // Mark task as completed
    if (targetBtn.classList.contains("complete-btn")) {
      const todoDiv = targetBtn.parentElement;
      todoDiv.classList.toggle("completed");
    }
  }

  // Step 5: function to filter tasks based on completion status
  function filterTodos(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
      const filterValue = e.target.value;

      if (filterValue === "all") {
        todo.style.display = "flex";
      } else if (filterValue === "completed") {
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      } else if (filterValue == "uncompleted") {
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      }
    });
  }
});
