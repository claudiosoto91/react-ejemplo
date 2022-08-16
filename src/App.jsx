import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';


function App() {
  return (
    <div className='bg-zinc-900 h-screen p-10'>
      <div className='container mx-auto'>
        <TaskForm />
        <TaskList />
      </div>

    </div>
  )
}

export default App