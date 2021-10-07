import './App.css';
import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';
import ControlledComponent from './components/2-10.Form/ControlledComponent';
// import Condition from './components/2-8.ConditionalRendering/Condition';
// import List from './components/2-9.List/List';
// import Composition from './components/2-4.Props/Composition';
// import Extraction from './components/2-4.Props/Extraction/Extraction';
// import ClassComponent from './components/2-5.State/ClassComponent';
// import FunctionalComponent from './components/2-5.State/FunctionalComponent';
// import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
// import Event from './components/2-7.Event/Event';

function App() {
  return (
    <div className="App">
      {/* <Composition />
      <Extraction />
      <ClassComponent />
      <FunctionalComponent />
      <ClassComponent2 />
      <Event /> */}
      {/* <Condition /> */}
      {/* <List /> */}
      <ControlledComponent />
      <UncontrolledComponent />
    </div>
  );
}

export default App;
