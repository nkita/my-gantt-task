import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Gantt } from "gantt-task-react";
import { Header } from './components/header/header.js';
import { Top } from './components/top/top.js';
// import { Footer } from './components/footer/footer.js';
import "gantt-task-react/dist/index.css";
import {dateConverter as dc,} from './lib/common.js'

const currentDate = new Date();
class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 30),
        name: "プロジェクトA",
        id: "P-0",
        progress: 0,
        type: "project",
        displayOrder: 0
      }],
      new_task_name: '',
      new_task_from: dc.data2str(currentDate),
      new_task_to: dc.data2str(currentDate),
      id: 0
    }

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerAdd = this.handlerAdd.bind(this);
  }
  handlerAdd() {
    console.log('add task');
    const res = this.state.tasks.slice(0);
    const _id = `T-${this.state.id + 1}`;
    const _name = this.state.new_task_name ? this.state.new_task_name : 'No name';
    const _from = function (date) {
      if (date) {
        const [y, m, d] = date.split('-');
        return new Date(y, m - 1, d);
      } else {
        return currentDate;
      }
    }(this.state.new_task_from);

    const _to = function (date) {
      if (date) {
        const [y, m, d] = date.split('-');
        return new Date(y, m - 1, d);
      } else {
        return currentDate;
      }
    }(this.state.new_task_to);

    // タスク追加
    res.push(
      {
        start: _from,
        end: _to,
        name: _name,
        id: _id,
        progress: 0,
        // isDisabled: true,
        type: "task",
        displayOrder: 0
      }
    )
    // タスク追加
    this.setState({ tasks: res, id: _id, new_task_name: '' });
  }
  handlerChange(e) {
    const name = e.name;
    const value = e.value;
    if (name === 'name') {
      this.setState({ new_task_name: value })
    } else if (name === 'from') {
      this.setState({ new_task_from: value })
    } else if (name === 'to') {
      this.setState({ new_task_to: value })
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Top
          handlerAdd={this.handlerAdd}
          handlerChange={(e) => this.handlerChange(e.target)}
          name={this.state.new_task_name}
          from={this.state.new_task_from}
          to={this.state.new_task_to}
        />
        <Gantt
          viewMode={"Day"}
          viewDate={20220317}
          tasks={this.state.tasks}
          ganttHeight={1000}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

ReactDOM.render(
  <Element />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
