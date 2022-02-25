// import logo from './logo.svg';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClassApp from "./ClassComponent/ClassComponent";
// import LoginControl from "./ClassComponent/control";
import FuncApp from "./FunctionalComponent/FunctionComponent";
import Conditional from "./FunctionalComponent/Conditional";
// import ComponentDidMount from "./ClassComponent/componentDidMount";
// import ComponentShouldUpdate from "./ClassComponent/shouldComponentUpdate";
// import ComponentDidUpdate from "./ClassComponent/componentDidUpdate";
// import ComponentWillUnmount from "./ClassComponent/componentWillUnmount";
// import FuncLife from "./FunctionalComponent/funcLife"
// import Header from './FunctionalComponent/header'
// import Login from "./FunctionalComponent/login";
// import BasicTable from "./FunctionalComponent/table"
// import Counter from "./ClassComponent/counter";
// import App1 from "./FunctionalComponent/portal";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FuncApp />
        <ClassApp />
      <Conditional />
        {/* <LoginControl /> */}
        {/* <ComponentDidMount /> */}
        {/* <ComponentShouldUpdate /> */}
        {/* <ComponentDidUpdate /> */}
        {/* <ComponentWillUnmount /> */}
        {/* <FuncLife /> */}
        {/* <Header />
        <Login />
        <BasicTable />
        <Counter /> */}
      </header>
    </div>
  );
}

export default App;
