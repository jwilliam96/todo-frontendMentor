import type { Task } from "./types/todo";

const tasks: Task[] = [
    {
        id: crypto.randomUUID(),
        title: "Complete online JavaScript course",
        state: true,
    },
    {
        id: crypto.randomUUID(),
        title: "Jog around the park 3x",
        state: false,
    },
    {
        id: crypto.randomUUID(),
        title: "10 minutes meditation",
        state: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Read for 1 hour",
        state: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Pick up groceries",
        state: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Complete Todo App on Fronted Mentor",
        state: false,
    },
];

export default tasks