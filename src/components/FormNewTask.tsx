import check from "../assets/images/icon-check.svg"
import UseIsActive from "../hook/UseIsActive";

interface Prop {
    createTodo: (title: string, state: boolean) => void
}

export default function FormNewTask({ createTodo }: Prop) {

    const [isCompleted, setIsCompleted] = UseIsActive(false)

    const handlerTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.task as HTMLInputElement;
        const value = input.value;
        createTodo(value, isCompleted)
        if (isCompleted) { setIsCompleted() }
        input.value = "";

    }

    return (
        <form className='todo__new item' onSubmit={handlerTodo}>
            <div onClick={setIsCompleted} className={`todo__isCompleted ${isCompleted && "todo__isCompleted-active"}`}>
                {isCompleted && (
                    <img src={check} alt="chulo" className="todo__isCompleted-check" />
                )}
            </div>
            <input name="task" type="text" className='todo__input' placeholder='Create a new todo...' />
        </form>
    )
}
