const ListItem = ({obj, index, onDone, onDelete}) =>{
    return(
        <div className="todo-box flex flex-row w-screen items-center justify-center mt-[16px]" key={index}>
            <h3 className={obj.completed && "completed"}>{obj.name}</h3>
            <div className="flex flex-row items-center gap-[10px]">
                <button className="bg-green-300 px-[10px] font-semibold rounded hover:bg-green-500" onClick={() => onDone(obj)}>Mark as done</button>
                <button className="bg-red-300 px-[10px] font-semibold rounded hover:bg-red-500" onClick={() => onDelete(obj)}>Delete</button>
            </div>
        </div>
    );
}

export default ListItem;