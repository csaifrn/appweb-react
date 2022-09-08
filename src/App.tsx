import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const Label = function (props: any) {
   return (
      <h2>
         {props.title} : {props.value}
      </h2>
   );
};

// class LabelArrow extends React.Component {
//    render() {
//       return <h2>Arrow teste {this.props.count}</h2>;
//    }
// }

const LabelArrow = (props: any) => <h2>{props.count}</h2>;

const App = (props: any) => {
   const [count, setCount] = useState(0);

   return (
      <div className="App">
         <div>
            <a href="https://vitejs.dev" target="_blank">
               <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <Label value={count} title="meu texto" />
            <LabelArrow count={count} />
         </div>
      </div>
   );
};

export default App;
