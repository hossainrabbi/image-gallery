import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ImageItemType } from "../types";
import ImageItem from "./ImageItem";

type Props = {
  data: ImageItemType[];
  handleSelect: (id: number) => void;
};

export default function GalleryArea({ data, handleSelect }: Props) {
  const [items, setItems] = useState(data);

  const moveItem = (fromIndex: any, toIndex: any) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <DndProvider backend={HTML5Backend as any}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 px-10">
        {items.map((item, index) => (
          <ImageItem
            key={index}
            imageItem={item}
            index={index}
            moveItem={moveItem}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    </DndProvider>
  );
}
