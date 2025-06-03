function Card({ name, sprite, shuffle }) {
  return (
    <div
      onClick={() => shuffle(name)}
      className="bg-slate-950 rounded-2xl shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105"
    >
      <h1 className="px-4 py-3 my-3 rounded-xl overflow-hidden bg-red-800 text-white font-bold w-full text-center text-md">
        {name.toUpperCase()}
      </h1>

      {sprite ? (
        <div className=" bg-white w-full h-40  rounded-full overflow-hidden  mb-3">
          <img
            className=" object-contain w-full h-full"
            src={sprite}
            alt={name}
          />
        </div>
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}

export default Card;
