import check from "../assets/images/icon-check.svg"
import iconX from "../assets/images/icon-cross.svg"
import type { Task } from "../types/todo"


interface Props {
    getTodo: Task[]
    updateTodo: (id: string) => void
    deleteTask: (id: string) => void
}

export default function ListTasks({ getTodo, updateTodo, deleteTask }: Props) {


    return (
        <ul className='list'>
            {
                getTodo.map((item) => (
                    <li className='list__item item' key={item.id}>
                        {/* isCompleted  */}
                        <div onClick={() => updateTodo(item.id)} className={`todo__isCompleted ${item.state && "todo__isCompleted-active"}`}>
                            {/* CHECK ICON */}
                            {item.state && (
                                <img src={check} alt="chulo" className="todo__isCompleted-check" />
                            )}
                        </div>
                        {/* TAsK TEXT */}
                        <span className={`${item.state && "list__text-disabled"}`}>{item.title}</span>
                        <img onClick={() => deleteTask(item.id)} src={iconX} alt="x" className="list__item-icon" />
                    </li>
                ))
            }
        </ul>
    )
}
