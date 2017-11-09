import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem';
import TodoForm from "./components/TodoForm";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }
        console.log("constructor")
    }
    incCount = () => {
        this.setState({
            count:this.state.count+1
        })
    }
    shouldComponentUpdate() {
        if(this.state.count >= 10){
            return false;
        }
        return true;
    }
    componentWillMount(){
        console.log("will mount");
    }
    componentDidMount(){
        console.log("Did Mount")
    }
    render(){
        console.log("rendering");
        return (
            <section>
                {this.state.count}
                <button onClick={this.incCount}>Increment</button>
            </section>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));