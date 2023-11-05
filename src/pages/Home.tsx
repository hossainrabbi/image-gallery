import { useState } from "react";
import GalleryArea from "../components/GalleryArea";
import { data } from "../data/data";
import { ImageItemType } from "../types";
import { singleOrMultiple } from "../utils/string";

const dataItems = data?.map((el) => ({
  ...el,
  checked: false,
}));

export default function Home() {
  // const [allChecked, setAllChecked] = useState(false);
  const [imageGallery, setImageGallery] = useState(
    dataItems as ImageItemType[]
  );

  const selectedImage = imageGallery?.filter((el) => el?.checked);

  // const handleAllSelect = () => {
  //   setImageGallery(
  //     imageGallery?.map((el) => ({
  //       ...el,
  //       checked: !allChecked,
  //     }))
  //   );

  //   setAllChecked(!allChecked);
  // };

  // select to checked image
  const handleSelect = (id: number) => {
    const item = imageGallery?.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          checked: !el?.checked,
        };
      }

      return el;
    });

    setImageGallery(item);
  };

  // remove selected image handler
  const handleRemoveImages = () => {
    setImageGallery(imageGallery?.filter((el) => !el?.checked));
  };

  // useEffect(() => {
  //   setAllChecked(dataItems.length === selectedImage.length);
  // }, [selectedImage.length]);

  return (
    <main className="bg-slate-100 py-5">
      <div className="container max-w-6xl shadow px-0 bg-white rounded-md pb-5">
        <header className="border-b border-gray-300 border-solid border-x-0 border-t-0 py-5 px-10">
          {selectedImage?.length > 0 ? (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {/* <input
                    checked={allChecked}
                    className="w-5 h-5"
                    type="checkbox"
                    onChange={handleAllSelect}
                  /> */}

                <input
                  checked={selectedImage?.length ? true : false}
                  className="w-5 h-5"
                  type="checkbox"
                  readOnly
                />
                <h4>
                  {selectedImage?.length}{" "}
                  {singleOrMultiple(selectedImage?.length, ["File", "Files"])}{" "}
                  Selected
                </h4>
              </div>

              <button
                className="text-red-600 hover:underline border-none bg-transparent font-medium cursor-pointer"
                onClick={handleRemoveImages}
              >
                Delete{" "}
                {singleOrMultiple(selectedImage?.length, ["file", "files"])}
              </button>
            </div>
          ) : (
            <h4>Gallery</h4>
          )}
        </header>

        <GalleryArea data={imageGallery} handleSelect={handleSelect} />
      </div>
    </main>
  );
}
