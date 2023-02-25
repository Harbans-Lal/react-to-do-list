import React , {useState} from "react";


function App() {
  const [inputText, setInputText] = useState("");
  const [item , setItem] = useState([]);

  function handleInput(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleSub(){
    setItem(prevState => {
      return [...prevState , inputText];
    })
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={inputText} />
        <button onClick={handleSub}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {item.map(toDoItem => <li>{toDoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
