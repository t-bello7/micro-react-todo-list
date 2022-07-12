import React from "react";

class InputTodo extends React.Component {
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.handleAddTodo(this.state.title);
            this.setState({
            title: ""
        })
        } else {
            alert("Please write item")
        }
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} className="input-text"/>
                <button type="button" className="input-submit"> Submit</button>
            </form>
        )
    }
}

export default InputTodo;