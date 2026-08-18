const tasks = [{
        id: 201,
        title: "learning managment",
        completed: false,
        priority: "high",

    },
    {
        id: 202,
        title: "anger managment issues",
        completed: true,
        priority: "medium",

    }

];

function addtask(id, title, completed, priority) {
    if (title.trim() === "") {
        console.log("Error: title cannot be empty");
        return;
    }
    const exists = tasks.some(task => task.id === id);
    if (exists) {
        console.log("error : task is already exists .");
        return;
    }
    const task = {
        id: id,
        title: title,
        completed: completed,
        priority: priority,
    }
    tasks.push(task);
    console.log("task has been added successfully ");
}
addtask(203, "learning javascript", false, "high");

function listofall() {
    tasks.forEach(task => {
        console.log(`id: ${task.id}, title: ${task.title}, completed: ${task.completed}, priority: ${task.priority}`);

    });
}
console.log("list of all tasks");
listofall();

function findtask(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log("ERROR: task not found");
        return task;
    }
    console.log("task found:");
    console.log(task);
}
console.log("\n finding task 202");
findtask(202);

function comtask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        console.log(`task ${id} mark as  completed`);
    } else {
        console.log("task not completed");
    }
}
console.log(" \n completing task 202 ");
comtask(202);
console.log("\nCompleted tasks:");

const completedTasks = tasks.filter(task => task.completed === true);

console.log(completedTasks);