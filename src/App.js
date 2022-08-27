import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import Ejemplo1 from './hooks/Ejmplo1'
import Ejemplo4 from './hooks/Ejemplo4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/*<TaskListComponent></TaskListComponent>*/}
       {/* <MyComponentWithContext></MyComponentWithContext>*/}
       <Ejemplo4 nombre="asdsa">
        <h1>
          CONTENIDO DEL PROPS.CHILDREN
        </h1>
       </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
