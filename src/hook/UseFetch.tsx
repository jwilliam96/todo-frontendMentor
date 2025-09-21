import { useState } from "react"
import data from "../data"
import type { Task } from "../types/todo"


export default function UseFetch() {

    const [getTodo, setTodo] = useState<Task[]>(data)

    const createTodo = (title: string, state: boolean) => {
        const newTodo = { id: crypto.randomUUID(), title, state }
        setTodo([newTodo, ...getTodo])
    }

    const updateTodo = (id: string) => {
        const update = getTodo.map((tack: Task) =>
            tack.id === id ? { ...tack, state: !tack.state } : tack)
        setTodo(update)
    }

    const deleteTack = (id: string) => {
        const deleteTodo = getTodo.filter((tack) => tack.id !== id)
        setTodo(deleteTodo)
    }


    const allDeleteTacks = () => {
        setTodo([])
    }

    return { getTodo, updateTodo, deleteTack, createTodo, allDeleteTacks }

}
