import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
    state = {
        editing: false,
    }
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }

    handleUpdatedDone = (e) =>{
        if(e.key === 'Enter'){
            this.setState({
                editing: false
            })
        }
    }

    componentWillUnmount(){
        console.log("Cleaning up...")
    }
    render(){
        const {completed, id, title} = this.props.todo;
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        let viewMode = {}
        let editMode = {}
        if (this.state.editing){
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (<li className={styles.item}> 
                    <div onDoubleClick={this.handleEditing} style={viewMode}>
                        <input type="checkbox" checked={completed} onChange={()=>this.props.handleChangeProps(id)}/> 
                        <span style={completed ? completedStyle : null}>
                            {title} 
                        </span>
                    </div>
                    <input type="text" value={title} className={styles.textInput} style={editMode} onChange={ e => {this.props.handleEditTodo(e.target.value, id)}} onKeyDown={this.handleUpdatedDone} />
                <button onClick={()=> this.props.handleDeleteTodo(id)}>Delete</button> 
                </li>)
    }
}

export default TodoItem;