import React from "react";

const ListItem = (props) =>{
    return(
        <div className={props.obj.completed && "completed"}>
            <p>{props.obj.name}</p>
            <button onClick={() => props.onDone(props.obj)}>Mark as done</button>
            <button onClick={() => props.onDelete(props.obj)}>Delete</button>
        </div>
    );
}

export default ListItem;