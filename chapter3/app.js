import React from "react";
import ReactDOM from "react-dom/client";

const headingOne = React.createElement(
  "h1",
  { className: "title" },
  "Namaste React"
);

const headingTwo = React.createElement(
  "h3",
  { className: "title2" },
  "Lesson Inception"
);

const div1 = React.createElement("div", { className: "head1" }, [headingOne]);

const div2 = React.createElement("div", { className: "head1" }, [headingTwo]);

let welcome = React.createElement(
  "h1",
  { style: { color: "red" } },
  `Welcome to react world`
);

const container = React.createElement("div", { className: "container" }, [
  div1,
  div2,
  welcome,
]);

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

{
  /* 
<div class="header">
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Support</li>
    </ul>
</div> */
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
