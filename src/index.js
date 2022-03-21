import { React, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Gantt } from "gantt-task-react";
import { Header } from './components/header/header.js';
import { Top } from './components/top/top.js';
import { Footer } from './components/footer/footer.js';
import "gantt-task-react/dist/index.css";

const currentDate = new Date();
const tasks = [
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    name: "Some Project",
    id: "ProjectSample",
    progress: 25,
    type: "project",
    hideChildren: false,
    displayOrder: 1,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    end: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      2,
      12,
      28
    ),
    name: "Idea",
    id: "Task 0",
    progress: 45,
    type: "task",
    project: "ProjectSample",
    displayOrder: 2,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
    name: "Research",
    id: "Task 1",
    progress: 25,
    dependencies: ["Task 0"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 3,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
    name: "Discussion with team",
    id: "Task 2",
    progress: 10,
    dependencies: ["Task 1"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 4,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    name: "Developing",
    id: "Task 3",
    progress: 2,
    dependencies: ["Task 2"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 5,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    name: "Review",
    id: "Task 4",
    type: "task",
    progress: 70,
    dependencies: ["Task 2"],
    project: "ProjectSample",
    displayOrder: 6,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    name: "Release",
    id: "Task 6",
    progress: currentDate.getMonth(),
    type: "milestone",
    dependencies: ["Task 4"],
    project: "ProjectSample",
    displayOrder: 7,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    name: "Party Time",
    id: "Task 9",
    progress: 0,
    isDisabled: true,
    type: "task",
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    name: "Party Time2",
    id: "Task 10",
    progress: 0,
    isDisabled: true,
    type: "task",
  },
];

const element = (
  <div>
    <Header />
    <Top />
    <Gantt
      viewMode={"Day"}
      viewDate={20220317}
      tasks={tasks}
      ganttHeight={350}
    />
    <Footer />
  </div>
)
ReactDOM.render(
  element,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
