import { Droppable } from "react-beautiful-dnd";
import { ImageItemType } from "../types";
import ImageItem from "./ImageItem";

type Props = {
  data: ImageItemType[];
  handleSelect: (id: number) => void;
};

export default function GalleryArea({ data, handleSelect }: Props) {
  return (
    <Droppable droppableId="imageItems">
      {(provided) => (
        <section
          className="container grid grid-cols-5 gap-5 mt-5"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {data?.map((el, idx) => (
            <ImageItem
              item={el}
              index={idx}
              id={`id-${el.id}`}
              key={`id-${el.id}`}
              handleSelect={handleSelect}
            />
          ))}
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
}
