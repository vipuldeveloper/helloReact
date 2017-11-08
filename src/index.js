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
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
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
    editTask(index, newValue) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task['name'] = newValue;

        this.setState({
            tasks:tasks
        })
    }
    updateTask(newValue) {
        this.setState({
            currentTask: newValue.target.value
        })
    }
    deleteTask(index) {
        let tasks = this.state.tasks;
        tasks.splice(index, 1);

        this.setState({
            tasks
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
                            return <TodoItem
                                key={index}
                                index={index}
                                deleteTask={this.deleteTask}
                                editTask={this.editTask}
                                clickHandler={this.changeStatus}
                                detail={task}
                            />
                        })
                    }
                </ul>
            </section>
        )
    }
}


ReactDOM.render(<TodoList />, document.getElementById('root'));