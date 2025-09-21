import imgMobileDark from "./assets/images/bg-mobile-dark.jpg"
import imgDesktopDark from "./assets/images/bg-desktop-dark.jpg"
import imgMobileLight from "./assets/images/bg-mobile-light.jpg"
import imgDesktopLight from "./assets/images/bg-desktop-light.jpg"
import check from "./assets/images/icon-check.svg"
import iconX from "./assets/images/icon-cross.svg"
import sun from "./assets/images/icon-sun.svg"
import moon from "./assets/images/icon-moon.svg"
import UseIsActive from "./hook/UseIsActive"
import './App.css'
import UseFetch from "./hook/UseFetch"

function App() {

  const [isActive, setIsActive] = UseIsActive(true)
  const [isCompleted, setIsCompleted] = UseIsActive(false)
  const { getTodo, createTodo, updateTodo, deleteTack, allDeleteTacks } = UseFetch()

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
    <main className={`todo ${isActive && "dark"}`}>

      {/* IMAGEN FONDO  */}
      <picture className='todo__image'>
        {
          isActive ?
            <>
              <source media="(min-width: 500px)" srcSet={imgDesktopDark} className="todo__img-desktop" />
              <img src={imgMobileDark} alt='' className='todo__img' />
            </>
            :
            <>
              <source media="(min-width: 500px)" srcSet={imgDesktopLight} className="todo__img-desktop" />
              <img src={imgMobileLight} alt='' className='todo__img' />
            </>
        }
      </picture>

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
        <form className='todo__new item' onSubmit={handlerTodo}>
          <div onClick={setIsCompleted} className={`todo__isCompleted ${isCompleted && "todo__isCompleted-active"}`}>
            {isCompleted && (
              <img src={check} alt="chulo" className="todo__isCompleted-check" />
            )}
          </div>
          <input name="task" type="text" className='todo__input' placeholder='Create a new todo...' />
        </form>

        <div className='listo__container'>

          {/* LIST TASKS  */}
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
                  {/* TACK TEXT */}
                  <span className={`${item.state && "list__text-disabled"}`}>{item.title}</span>
                  <img onClick={() => deleteTack(item.id)} src={iconX} alt="x" className="list__item-icon" />
                </li>
              ))
            }
          </ul>

          {/* OPTIONS FILTERS DESKTOP*/}
          <ul className='filter__desktop'>
            <li className='filter__item'>5 items left</li>
            <li className='filter__item'>All</li>
            <li className='filter__item'>Active</li>
            <li className='filter__item'>Completed</li>
            <li className='filter__item'>Clear Completed</li>
          </ul>

          {/* INFO MOBILE  */}
          <div className="infoList item">
            <p className="infoList__items">5 items left</p>
            <p onClick={allDeleteTacks} className="infoList__clear">Clear Completed</p>
          </div>
        </div>

        {/* OPTION FILTERS MOBILE  */}
        <div className='filter__mobile item'>
          <span className='filter__item filter__item-active'>All</span>
          <span className='filter__item'>Active</span>
          <span className='filter__item'>Completed</span>
        </div>

      </div>
      <footer className="footer">
        Drag and drop to reader list
      </footer>
    </main>
  )
}

export default App
