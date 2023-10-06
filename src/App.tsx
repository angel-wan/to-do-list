import { useState } from "react";
import "./App.css";
import ItemList from "./components/item-list";
import AddItem from "./components/add-item";

function App() {
  const [list, setList] = useState<{ done: boolean; value: string }[]>([]);
  const addToDo = (value: string) => {
    setList([...list, { done: false, value }]);
  };

  const onItemClicked = (index: number) => {
    console.log({ index });
    const updatedList = [...list];
    updatedList[index].done = !updatedList[index].done;
    setList(updatedList);
  };

  const onItemUpdate = (value: string, index: number) => {
    const updatedList = [...list];
    updatedList[index].value = value;
    setList(updatedList);
  };

  const onItemDelete = (index: number) => {
    let updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 50,
          left: 100,
          alignItems: "flex-start",
          gap: "3em",
        }}
      >
        <h1>To-do List</h1>
        <AddItem addItem={addToDo} />
        <ItemList
          items={list}
          itemClicked={onItemClicked}
          updateItem={onItemUpdate}
          deleteItem={onItemDelete}
        />
      </div>
      <p
        className="read-the-docs"
        style={{
          position: "absolute",
          bottom: 0,
          left: 100,
        }}
      >
        Feel free to add your To-dos!
      </p>
    </>
  );
}

export default App;
