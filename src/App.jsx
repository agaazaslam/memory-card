import { useState, useEffect } from "react";
import Card from "./Card.jsx";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [display, setDisplay] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState([]);

  const showPokemon = async (pokemonsList) => {
    try {
      const relevantUrl = pokemonsList.map((pokemon) => pokemon.url);

      const finalData = await Promise.all(
        relevantUrl.map(async (url) => {
          const data = await fetch(url);
          const jsonifiedData = await data.json();
          return jsonifiedData;
        })
      );

      console.log("Storing final Data of 10 pokemons In Local Storage");
      const info = finalData.map((pokemon) => {
        return {
          name: pokemon.name,
          sprite: pokemon.sprites.other["official-artwork"].front_default,
        };
      });
      setPokemons(info);
      setDisplay(true);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemonCustom = () => {
    const pokemonUrlList = [];

    for (let i = 0; i < 12; i++) {
      const randomValue = Math.floor(Math.random() * (800 + 1));
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomValue}/`;
      const urlObject = { url: pokemonUrl };
      pokemonUrlList.push(urlObject);
      console.log(pokemonUrlList);
    }

    showPokemon(pokemonUrlList);
  };

  const fetchPokemonUrls = async () => {
    console.log("fetching data from api");

    try {
      const randomOffset = Math.floor(Math.random() * (600 + 1));
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${randomOffset}`
      );
      const data = await response.json();
      const result = data.results;
      localStorage.setItem("data", JSON.stringify(result));
      console.log(result);
      showPokemon(result);
    } catch (error) {
      console.error("error fetching data", error);
      throw error;
    }
  };

  const shuffle = (name) => {
    if (currentScore.includes(name)) {
      setBestScore(
        currentScore.length > bestScore ? currentScore.length : bestScore
      );
      setCurrentScore([]);
    }
    if (!currentScore.includes(name)) {
      setCurrentScore([...currentScore, name]);
    }
    const shuffledArray = [...pokemons].sort(() => Math.random() - 0.5);
    setPokemons(shuffledArray);
  };

  useEffect(() => {
    fetchPokemonCustom();
  }, []);

  return (
    <div className=" flex flex-col m-0 bg-white min-h-screen md:h-screen ">
      <div className="flex  flex-col md:flex-row justify-evenly bg-black text-white p">
        <h1 className="flex  justify-center items-center font-semibold lg:text-2xl sm:text-xl m-2 ">
          BEST SCORE : {bestScore}{" "}
        </h1>
        <div className="flex justify-center ">
          <h1 className="py-3 px-5 bg-red-900 rounded-4xl m-3 sm:text-2xl md:text-3xl xl:text-4xl text-white">
            Pokémon Memory Card Game
          </h1>
        </div>
        <h1 className="flex  justify-center items-center font-semibold lg:text-2xl sm:text-xl m-2 ">
          CURRENT SCORE : {currentScore.length}{" "}
        </h1>
      </div>
      {display ? (
        <div className=" m-5 p-3 max-w-8xl mx-auto grid gap-6 grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
          {pokemons.map((pokemon, index) => (
            <div key={index}>
              <Card
                name={pokemon.name}
                sprite={pokemon.sprite}
                shuffle={shuffle}
              ></Card>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="flex flex-grow items-center justify-center text-5xl">
          Loading Pokémon...
        </h2>
      )}
    </div>
  );
}

export default App;
