import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ImageItemType } from "../types";

type Props = {
  item: ImageItemType;
  className?: string;
  id: string;
  index: number;
  handleSelect: (id: number) => void;
};

export default function ImageItem({
  item,
  className,
  id,
  index,
  handleSelect,
}: Props) {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={`border border-solid border-gray-300 relative transition-colors hover:after:content-[''] after:absolute after:bg-gray-900/50 after:rounded-lg after:w-full after:h-full z-10 after:left-0 after:top-0 rounded-lg ${
            index === 0 ? "col-span-2 row-span-2 " : ""
          } ${item?.checked ? "show-check " : ""} ${
            mouseHover ? "show-check" : ""
          } ${className}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => handleSelect(item.id)}
          onMouseOver={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          <input
            type="checkbox"
            checked={item?.checked}
            className="absolute top-5 left-5 w-6 h-6 z-50 hidden"
            readOnly
          />
          <img
            className={`w-full h-full rounded-lg object-cover ${
              item?.checked ? "opacity-50 z-10" : ""
            }`}
            src={item.img}
            alt={`image_${item.id}`}
          />
        </div>
      )}
    </Draggable>
  );
}
