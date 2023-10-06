import { Button, Input } from "@mui/material";
import { ReactElement, useState } from "react";

const AddItem = ({
  addItem,
}: {
  addItem: (value: string) => void;
}): ReactElement => {
  const [value, setValue] = useState("");
  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      saveInput();
    }
  };

  const saveInput = () => {
    if (value.length) {
      addItem(value);
      setValue("");
    }
  };

  return (
    <div>
      <label>
        <Input
          name="newItem"
          value={value}
          placeholder="Enter to add new To-do"
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          style={{ color: "white", width: "40em", fontSize: "1.5em" }}
        />
      </label>
      <Button onClick={saveInput} style={{ color: "white" }}>
        Enter
      </Button>
    </div>
  );
};

export default AddItem;
