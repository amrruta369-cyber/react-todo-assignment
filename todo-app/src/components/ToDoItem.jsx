import { useState } from "react";

function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.text);

  return (
    <div style={{ margin: "10px", padding: "10px", background: "#eee" }}>
      {edit ? (
        <input value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <span
          onClick={() => toggleComplete(task.id)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {task.text}
        </span>
      )}

      {edit ? (
        <button onClick={() => { editTask(task.id, text); setEdit(false); }}>
          Save
        </button>
      ) : (
        <button onClick={() => setEdit(true)}>Edit</button>
      )}

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
