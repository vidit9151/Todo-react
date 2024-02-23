import { useState } from "react";
import "./App.css";

function App() {
  let [input, setInput] = useState("");
  let [desc, setDesc] = useState("");
  let [todos, setTodos] = useState([
    { title: "Go to gym", description: "go to gym 7-9", completed: false },
    { title: "Go to study", description: "go to study 9-10", completed: false },
  ]);
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <h1>TODO LIST</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input && desc) {
              const newEntry = {
                title: input,
                description: desc,
                completed: false,
              };
              setDesc("");
              setInput("");
              setTodos((cV) => {
                let newVal = [...cV, newEntry];
                return newVal;
              });
            }

            return;
          }}
        >
          <input
            type="text"
            style={{
              background: "white",
              color: "black",
              height: "2rem",
              borderRadius: "2rem",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            value={input}
            onChange={(e) => {
              let value = e.target.value;
              setInput((cV) => {
                let newVal = value;
                return newVal;
              });
            }}
            placeholder="Title"
          />
          <br />
          <br />
          <input
            type="text"
            style={{
              background: "white",
              color: "black",
              height: "2rem",
              borderRadius: "2rem",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            value={desc}
            onChange={(e) => {
              let value = e.target.value;
              setDesc((cV) => {
                let newVal = value;
                return newVal;
              });
            }}
            placeholder="Description"
          />
          <br />
          <br />
          <button
            type="submit"
            style={input && desc ? { color: "green" } : { color: "white" }}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {todos.map(({ title, description, completed }, index) => {
          return (
            <div key={index}>
              <h2
                style={
                  completed
                    ? { textDecoration: "line-through", color: "grey" }
                    : { color: " #eddedd" }
                }
              >
                {" "}
                <span>{index + 1}. </span>
                {title}
              </h2>

              <p
                style={
                  completed
                    ? { textDecoration: "line-through", color: "grey" }
                    : {}
                }
              >
                {description}
              </p>
              <button
                onClick={() => {
                  setTodos((curVal) => {
                    curVal[index].completed = !curVal[index].completed;
                    const newVal = [...curVal];
                    return newVal;
                  });
                }}
              >
                {completed ? "undone" : "done"}
              </button>
              <button
                style={{ color: "red" }}
                type="button"
                onClick={() => {
                  const newValue = todos.filter((el) => {
                    return el.title != title;
                  });
                  setTodos(newValue);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
        <br />
        <br />
        <button
          type="button"
          onClick={() => {
            setTodos([]);
          }}
          style={{ background: "white", color: "black" }}
        >
          Clear All
        </button>
      </div>
    </>
  );
}

export default App;
