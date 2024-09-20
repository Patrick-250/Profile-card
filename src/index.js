import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="avator.jpeg" alt="Avatar" className="avatar" />;
}

function Intro() {
  return (
    <div className="intro">
      <h1>Patrick T</h1>
      <p>
        Full stack software developer With a strong educational background in
        computer science and over four years of experience as a full-stack
        developer, committed to delivering results that exceed expectations.
        Let's collaborate and create something amazing together.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👌" color="#1e596e" />
      <Skill skill="Node JS" emoji="💪" color="orangered" />
      <Skill skill="Python" emoji="💪" color="yellow" />
      <Skill skill="SQL" emoji="💪" color="orange" />
      <Skill skill="Mongodb" emoji="💪" color="#449aba" />
      <Skill skill="C# dotNet" emoji="👍" color="#295915" />
      <Skill skill="Git and Github" emoji="👍" color="#7f5d00" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
