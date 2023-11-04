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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 px-10"
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
