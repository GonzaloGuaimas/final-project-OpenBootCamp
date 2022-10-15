import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import Greetingstyled from './components/pure/forms/Greetingstyled';
import Father from './components/containers/father';
import LoginFormik from './components/pure/forms/LoginFormik';
import { TaskFormik } from './components/pure/forms/taskFormik';
import AsyncExample from './components/pure/AsyncExample';
import { ObservableExample } from './components/pure/ObservableExample';
import { FetchExample } from './components/pure/FetchExample';


function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <TaskListComponent></TaskListComponent>
       <Greetingstyled name={'gonzalo'}></Greetingstyled>
      </header>*/}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <TaskFormik></TaskFormik> */}

      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample></ObservableExample> */}
      <FetchExample/>
    </div>
  );
}

export default App;
