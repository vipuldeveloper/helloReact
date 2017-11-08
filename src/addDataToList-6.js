import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem';
import TodoForm from "./components/TodoForm";

class TodoList extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.state = {
         tasks:[
             {
                 name:"Buy Milk",
                 completed: false
             },
             {
                 name:"Buy Cheeps",
                 completed: false
             },
             {
                 name:"Buy Butter",
                 completed: false
             }
         ],
            currentTask : ''
        }
    }
    changeStatus(index) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks:tasks
        })
    }
    updateTask(newValue) {
        this.setState({
            currentTask: newValue.target.value
        })
    }
    addTask(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name: currentTask,
            completed: false
        });

        this.setState({
            tasks
        })
    }

    render(){
        return (
            <section>
                <TodoForm
                    currentTask = {this.state.currentTask}
                    updateTask = {this.updateTask}
                    addTask = {this.addTask}
                />
                <ul>
                    {
                        this.state.tasks.map((task, index) => {
                            return <TodoItem key={task.name} index={index} clickHandler={this.changeStatus} detail={task}/>
                        })
                    }
                </ul>
            </section>
        )
    }
}


ReactDOM.render(<TodoList />, document.getElementById('root'));