
// import logo from './logo.svg';
import './App.css';

// import Course from './components/Course';
// import CourseList from './components/CourseList';

// import Greet from "./components/Greet";
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import Conditional from './components/Conditional';
// import StyleSheet from './components/StyleSheet';
// import Form from './components/Form';
// import Lifecycle from './components/Lifecycle';
// import FragmentDemo from './components/fragment/FragmentDemo';
// import ParentComp from './components/pure_component/ParentComp';
// import Input from './components/refs/RefDemo';
// import FocusInput from './components/refs/FocusInput';
// import FRParent from './components/refs/FRParent';
// import Parent from './components/portals/Parent';
// import Sample from './components/errorBoundary/Sample';
// import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
// import ClickCounter from './component2/ClickCounter';
// import HoverCounter from './component2/HoverCounter';

// import ClickCounterTwo from './component2/ClickCounterTwo';
// import HoverCounterTwo from './component2/HoverCounterTwo';
// import Counter from './component2/Counter';

// import { UserProvider } from './context/UserContext';
// import ComponentA from './context/ComponentA';

import PostList from './reactHttp/PostList';


function App() {
  return (
    <div className="App">
      {/* <Greet name="wade" age="25"> <h1>What is the question?</h1> </Greet>
      <Greet name="bety" age="28"/>  */}
      {/* <Welcome name="Venessa" age="25"/>
      <Welcome name="Alex" age="28"/> */}
      {/* <Message  /> */}
      {/* <Counter/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <Conditional/> */}
      {/* <CourseList/> */}
      {/* <StyleSheet begin = {true}/> */}
      {/* <Form/> */}
      {/* <Lifecycle/> */}
      {/* <FragmentDemo/> */}
      {/* <ParentComp/> */}
      {/* <FocusInput/> */}
      {/* <FRParent/>/ */}
      {/* <Parent/> */}

      {/* <ErrorBoundary>
        <Sample veggie = "salad"/>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Sample veggie = "mango"/>
      </ErrorBoundary>
        
      <ErrorBoundary>
        <Sample veggie = "meatball"/>
      </ErrorBoundary> */}
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}

      {/* 
      <Counter render = {(count, incrementCounter) => (
        <ClickCounterTwo count = {count} incrementCounter = {incrementCounter}/>
      )}/>

      <Counter render = { (count, incrementCounter) => (
        <HoverCounterTwo count = {count} incrementCounter = {incrementCounter}/>
      )}/> */}

      {/* 
      <UserProvider value="magi">
        <ComponentA/>
      </UserProvider> */}

      <PostList/>
      
      
    </div>
  );
}


export default App;
