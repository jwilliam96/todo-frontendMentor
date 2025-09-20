import imgMobileDark from "./assets/images/bg-mobile-dark.jpg"
import iconX from "./assets/images/icon-cross.svg"
import sun from "./assets/images/icon-sun.svg"
import moon from "./assets/images/icon-moon.svg"
import UseIsActive from "./hook/UseIsActive"
import './App.css'

function App() {

  const [isActive, setIsActive] = UseIsActive(true)

  return (
    <main className={`todo ${isActive && "dark"}`}>
      <figure className='todo__image'>
        <img src={imgMobileDark} alt='' className='todo__img' />
      </figure>

      <div className='todo__container'>
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
        <div className='todo__new item'>
          <div className='todo__isCompleted'></div>
          <input type="text" className='todo__input' placeholder='Create a new todo...' />
        </div>

        <div className='listo__container'>

          {/* LIST TASKS  */}
          <ul className='list'>
            <li className='list__item item'>
              <div className='todo__isCompleted'></div>
              <span>Tarea numero 1</span>
              <img src={iconX} alt="x" className="list__item-icon" />
            </li>
            <li className='list__item item'>
              <div className='todo__isCompleted'></div>
              <span>Tarea numero 2</span>
              <img src={iconX} alt="x" className="list__item-icon" />
            </li>
            <li className='list__item item'>
              <div className='todo__isCompleted'></div>
              <span>Tarea numero 3</span>
              <img src={iconX} alt="x" className="list__item-icon" />
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

          <div className="infoList item">
            <p className="infoList__items">5 items left</p>
            <p className="infoList__clear">Clear Completed</p>
          </div>
        </div>

        <div className='filter__mobile item'>
          <span className='filter__item filter__item-active'>All</span>
          <span className='filter__item'>Active</span>
          <span className='filter__item'>Completed</span>
        </div>

        <footer className="footer">
          Drag and drop to reader list
        </footer>
      </div>
    </main>
  )
}

export default App
