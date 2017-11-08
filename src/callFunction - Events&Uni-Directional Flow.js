import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoList extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
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
         ]
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
    render(){
        return (
            <ul>
                {
                    this.state.tasks.map((task, index) => {
                        return <TodoItem key={task.name} index={index} clickHandler={this.changeStatus} detail={task}/>
                    })
                }
            </ul>
        )
    }
}

class TodoItem extends React.Component {
    render(){
        return (
            <li onClick={ () => {
                this.props.clickHandler(this.props.index);
            }} className={this.props.detail.completed?"completed":''}>
                {this.props.detail.name}
            </li>
        )
    }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));