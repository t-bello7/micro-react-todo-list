import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
    render(){
        const {completed, id, title} = this.props.todo;
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        return (<li className={styles.item}> 
                <input type="checkbox" checked={completed} onChange={()=>this.props.handleChangeProps(id)}/> 
                   <span style={completed ? completedStyle : null}>
                        {title} 
                    </span>
                <button onClick={()=> this.props.handleDeleteTodo(id)}>Delete</button> 
                </li>)
    }
}


// const TodoItem = (props) => {
//     return <li>{props.todo.title}</li>
// }
export default TodoItem;