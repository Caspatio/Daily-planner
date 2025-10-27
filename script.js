document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addTaskForm");
  const tasksContainer = document.getElementById("tasksContainer");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleInput = document.getElementById("taskTitle");
    const descInput = document.getElementById("taskDesc");

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (!title) return alert("Введите название задачи");

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = title;

    const taskDesc = document.createElement("p");
    taskDesc.textContent = desc || "Без описания";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      taskCard.remove();
    });

    taskCard.append(taskTitle, taskDesc, deleteBtn);
    tasksContainer.prepend(taskCard);

    form.reset();
  });
});
