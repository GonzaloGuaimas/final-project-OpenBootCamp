import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import Greetingstyled from './components/pure/forms/Greetingstyled';
import Father from './components/containers/father';


function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <TaskListComponent></TaskListComponent>
       <Greetingstyled name={'gonzalo'}></Greetingstyled>
      </header>*/}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
