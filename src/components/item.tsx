import { Button, Checkbox, Input } from "@mui/material";

import { ReactElement, useEffect, useState } from "react";

const Item = ({
  item,
  key,
  itemClicked,
  updateItem,
  deleteItem,
}: {
  key: number | string;
  item: { value: string; done: boolean };
  itemClicked: () => void;
  updateItem: (value: string) => void;
  deleteItem: () => void;
}): ReactElement => {
  const [value, setValue] = useState(item.value);
  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter" && value.length) {
      updateItem(value);
    }
  };

  useEffect(() => {
    setValue(item.value);
  }, [item]);

  return (
    <div key={key}>
      <label>
        <Checkbox
          checked={item.done}
          onChange={() => itemClicked()}
          style={{ color: "white", fontSize: "1.5em", marginRight: "1em" }}
        />

        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          style={{
            color: "white",
            width: "25em",
            fontSize: "1.5em",
            marginRight: "1em",
          }}
        />
      </label>
      <Button
        style={{
          width: "10em",
          height: "3em",
          color: "white",
        }}
        onClick={() => deleteItem()}
      >
        Delete
      </Button>
    </div>
  );
};

export default Item;
