import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
         name:["atul","vijay"]
        }
    }
    render(){
        return (
            <ul>
                {
                    this.state.name.map(function(name){
                        return <TodoItem key={name} detail={name}/>
                    })
                }
            </ul>
        )
    }
}

class TodoItem extends React.Component {
    render(){
        return (
            <li>{this.props.detail}</li>
        )
    }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));