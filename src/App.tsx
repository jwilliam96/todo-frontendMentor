import './App.css'

function App() {

  return (
    <main>
      <header>
        <h1>TODO</h1>

        <div>dark</div>
      </header>

      {/* CREATE TASK  */}
      <div>
        <div></div>
        <input type="text" />
      </div>

      <div>

        {/* LIST TASKS  */}
        <div></div>

        {/* OPTIONS FILTERS */}
        <ul>
          <li>5 items left</li>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
          <li>Clear Completed</li>
        </ul>
      </div>

      <footer>
        Drag and drop to reader list
      </footer>
    </main>
  )
}

export default App
