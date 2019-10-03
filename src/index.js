import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import styled from "styled-components";

const OpacityDiv = styled.div`
  opacity: ${props => props.opacity};
  transition: ${props => `opacity ${props.transitionDuration}ms`};
`;

const Panel = ({ components, transitionDuration }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [opacity, setopacity] = useState(1);
  const tabPanel = components.map(({ title }, index) => (
    <button
      key={index}
      onClick={() => {
        setopacity(0);
        setTimeout(() => {
          setTabIndex(index);
          setopacity(1);
        }, transitionDuration / 2);
      }}
    >
      {title}
    </button>
  ));
  const Component = components[tabIndex].component;

  return (
    <Fragment>
      <div>{tabPanel}</div>
      <OpacityDiv opacity={opacity} transitionDuration={transitionDuration / 2}>
        <Component />
      </OpacityDiv>
    </Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Panel
        components={[
          {
            title: "Tab1",
            component: () => <a>Super div</a>
          },
          {
            title: "Tab2",
            component: () => <a>Super div 2</a>
          }
        ]}
        transitionDuration={400}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
