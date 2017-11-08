import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem(evt) {
        evt.preventDefault();
        this.props.editTask(this.props.index, this.input.value);
        this.toggleState()
    }

    renderForm() {
        return (
            <form onSubmit={this.updateItem}>
                <input type="text" ref={(value) => {
                    this.input = value;
                }} defaultValue={this.props.detail.name}/>
                <button type="submit">Update Item</button>
            </form>
        )
    }

    renderItem() {
        return (
            <li onClick={ () => {
                this.props.clickHandler(this.props.index);
            }} className={this.props.detail.completed?"completed":""}>
                {this.props.detail.name}
                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.toggleState()
                }}>Edit Item</button>

                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.props.deleteTask(this.props.index);
                }}>Delete</button>
            </li>
        )
    }

    toggleState() {
        const { isEditing } = this.state;

        this.setState({
            isEditing:!isEditing
        })
    }

    render() {
        const { isEditing } = this.state;
        return (
            <section>
                {
                    isEditing ? this.renderForm() : this.renderItem()
                }
            </section>
        )
    }
}

export default TodoItem;