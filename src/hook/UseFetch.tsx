import { useEffect, useState } from "react"
import data from "../data"
import type { Task } from "../types/todo"


export default function UseFetch() {

    const [getTodo, setTodo] = useState<Task[]>(data)
    const [filterTasks, setFilterTasks] = useState<Task[]>(getTodo)
    const [optionsFilter, setOptionsFilter] = useState<string>("All")

    useEffect(() => {
        if (optionsFilter === "Completed") {
            const filterCompleted = getTodo.filter(task => task.state)
            return setFilterTasks(filterCompleted)
        }
        if (optionsFilter === "Active") {
            const filterActive = getTodo.filter(task => !task.state)
            return setFilterTasks(filterActive)
        }
        setFilterTasks(getTodo)

    }, [getTodo, optionsFilter])

    const handlerOptionFilter = (option: string) => {
        setOptionsFilter(option)
    }

    const createTodo = (title: string, state: boolean) => {
        const newTodo = { id: crypto.randomUUID(), title, state }
        setTodo([newTodo, ...getTodo])
    }

    const updateTodo = (id: string) => {
        const update = getTodo.map((task: Task) =>
            task.id === id ? { ...task, state: !task.state } : task)
        setTodo(update)
    }

    const deleteTask = (id: string) => {
        const deleteTodo = getTodo.filter((task) => task.id !== id)
        setTodo(deleteTodo)
    }


    const allDeleteTasks = () => {
        setTodo([])
    }



    return { getTodo, updateTodo, deleteTask, createTodo, allDeleteTasks, filterTasks, handlerOptionFilter, optionsFilter }

}
