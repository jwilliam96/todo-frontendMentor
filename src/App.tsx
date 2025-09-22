import OptionFilterTask from "./components/OptionFilterTask"
import FormNewTask from "./components/FormNewTask"
import moon from "./assets/images/icon-moon.svg"
import sun from "./assets/images/icon-sun.svg"
import ImageMain from "./components/ImageMain"
import ListTasks from "./components/ListTasks"
import UseIsActive from "./hook/UseIsActive"
import UseFetch from "./hook/UseFetch"

import './App.css'

function App() {

  const [isActive, setIsActive] = UseIsActive(true)
  const { filterTasks, allDeleteTasks, createTodo, deleteTask, updateTodo, handlerOptionFilter, optionsFilter } = UseFetch()

  return (
    <main className={`todo ${isActive && "dark"}`}>

      {/* IMAGEN FONDO  */}
      <ImageMain isActive={isActive} />

      {/* TODO CONTAINER  */}
      <div className='todo__container'>
        {/* HEADER  */}
        <header className='todo__header'>
          <h1 className='todo__title'>TODO</h1>

          {
            isActive ?
              <img src={sun} alt="sun" className='todo__dark' onClick={() => setIsActive()} />
              :
              <img src={moon} alt="sun" className='todo__dark' onClick={() => setIsActive()} />
          }
        </header>

        {/* CREATE TASK  */}
        <FormNewTask createTodo={createTodo} />

        {/* LIST TASKS  */}
        <ListTasks deleteTask={deleteTask} getTodo={filterTasks} updateTodo={updateTodo} />

        {/* OPTIONS FILTERS DESKTOP*/}
        <OptionFilterTask
          allDeleteTasks={allDeleteTasks}
          filterTasks={filterTasks}
          handlerOptionFilter={handlerOptionFilter}
          optionsFilter={optionsFilter}
        />

      </div>
      <footer className="footer">
        Drag and drop to reader list
      </footer>
    </main>
  )
}

export default App
