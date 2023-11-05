import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ImageItemType } from "../types";

type Props = {
  index: number;
  imageItem: ImageItemType;
  className?: string;
  moveItem: (fromIndex: number, toIndex: number) => void;
  handleSelect: (id: number) => void;
};

const ITEM_TYPE = "TYPE_OF_ITEM";

export default function ImageItem({
  index,
  imageItem,
  moveItem,
  className,
  handleSelect,
}: Props) {
  const [mouseHover, setMouseHover] = useState(false);
  const [, ref] = useDrag({
    type: ITEM_TYPE,
    item: { index },
  });

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    drop: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      className={`border border-solid border-gray-300 relative transition-all hover:after:content-[''] after:absolute after:bg-gray-900/50 after:rounded-lg after:w-full after:h-full z-10 after:left-0 after:top-0 rounded-lg ${
        isOver ? "after:bg-gray-900 " : ""
      } ${index === 0 ? "col-span-2 row-span-2 " : ""} ${
        imageItem?.checked ? "show-check " : ""
      } ${mouseHover ? "show-check" : ""} ${className}`}
      onClick={() => handleSelect(imageItem?.id)}
      onMouseOver={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      ref={(node) => ref(drop(node))}
    >
      <input
        type="checkbox"
        checked={imageItem?.checked}
        className="absolute top-5 left-5 w-5 h-5 z-50 hidden"
        readOnly
      />
      <img
        className={`w-full h-full rounded-lg object-cover ${
          imageItem?.checked ? "opacity-50 z-10" : ""
        }`}
        src={imageItem?.img}
        alt={`image_${imageItem?.id}`}
      />
    </div>
  );
}
