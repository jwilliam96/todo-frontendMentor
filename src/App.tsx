import imgMobileDark from "./assets/images/bg-mobile-dark.jpg"
import sun from "./assets/images/icon-sun.svg"
import iconX from "./assets/images/icon-cross.svg"
import './App.css'

function App() {

  return (
    <main className='todo dark'>
      <figure className='todo__image'>
        <img src={imgMobileDark} alt='' className='todo__img' />
      </figure>

      <div className='todo__container'>
        <header className='todo__header'>
          <h1 className='todo__title'>TODO</h1>

          <img src={sun} alt="sun" className='todo__dark' />
        </header>

        {/* CREATE TASK  */}
        <div className='todo__new'>
          <div className='todo__isCompleted'></div>
          <input type="text" className='todo__input' placeholder='Create a new todo...' />
        </div>

        <div className='listo__container'>

          {/* LIST TASKS  */}
          <ul className='list'>
            <li className='list__item'>
              <div className='todo__isCompleted'></div>
              Tarea numero 1
              <img src={iconX} alt="x" />
            </li>
            <li className='list__item'>
              <div className='todo__isCompleted'></div>
              Tarea numero 2
            </li>
            <li className='list__item'>
              <div className='todo__isCompleted'></div>
              Tarea numero 3
            </li>
          </ul>

          {/* OPTIONS FILTERS */}
          <ul className='filter__desktop'>
            <li className='filter__item'>5 items left</li>
            <li className='filter__item'>All</li>
            <li className='filter__item'>Active</li>
            <li className='filter__item'>Completed</li>
            <li className='filter__item'>Clear Completed</li>
          </ul>
        </div>

        <ul className='filter__mobile'>
          <li className='filter__item'>All</li>
          <li className='filter__item'>Active</li>
          <li className='filter__item'>Completed</li>
        </ul>

        <footer>
          Drag and drop to reader list
        </footer>
      </div>
    </main>
  )
}

export default App
