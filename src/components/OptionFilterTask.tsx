import type { Task } from "../types/todo"

interface Props {
    filterTasks: Task[]
    allDeleteTasks: () => void
    handlerOptionFilter: (option: string) => void
    optionsFilter: string
}

export default function OptionFilterTask({ allDeleteTasks, filterTasks, handlerOptionFilter, optionsFilter }: Props) {

    const optionFilter = ["All", "Active", "Completed",]

    return (
        <>
            <ul className='filter__desktop'>
                <li ><span>{filterTasks.length}
                </span>items left</li>
                {optionFilter.map(option => (
                    <li className="filter__item" key={option}>{option}</li>
                ))}
                <li className="filter__item">Clear Completed</li>
            </ul>

            {/* INFO MOBILE  */}
            <div className="infoList item">
                <p className="infoList__items"><span>{filterTasks.length}</span> items left</p>
                <p onClick={allDeleteTasks} className="infoList__clear filter__item">Clear Completed</p>
            </div>


            {/* OPTION FILTERS MOBILE  */}
            <div className='filter__mobile item'>

                {
                    optionFilter.map(option => (
                        <span
                            key={option}
                            onClick={() => handlerOptionFilter(option)}
                            className={`filter__item ${option === optionsFilter && "filter__item-active"}`}>{option}</span>
                    ))
                }
            </div>
        </>
    )
}
