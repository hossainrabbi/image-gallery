import { data } from "../data/data";

export default function Home() {
  return (
    <section className="container grid grid-cols-5 gap-5 mt-5">
      {data?.map((el, idx) => (
        <div
          className={`border border-solid border-gray-400 rounded-lg ${
            idx === 0 ? "col-span-2 row-span-2" : ""
          }`}
          key={el?.id}
        >
          <img
            className="w-full h-full rounded-lg object-cover"
            src={el?.img}
            alt={`image_${el?.id}`}
          />
        </div>
      ))}
    </section>
  );
}
