import { ReactElement } from "react";
import Item from "./item";

const ItemList = ({
  items,
  itemClicked,
  updateItem,
  deleteItem,
}: {
  items: Array<{ value: string; done: boolean }>;
  itemClicked: (value: number) => void;
  updateItem: (value: string, index: number) => void;
  deleteItem: (index: number) => void;
}): ReactElement => {
  const listItem: ReactElement[] = items.map(
    (item: { done: boolean; value: string }, index) => {
      return (
        <Item
          key={index}
          item={item}
          itemClicked={() => {
            itemClicked(index);
          }}
          updateItem={(value) => {
            updateItem(value, index);
          }}
          deleteItem={() => deleteItem(index)}
        />
      );
    }
  );
  return <>{items.length ? listItem : "No todos found"}</>;
};

export default ItemList;
