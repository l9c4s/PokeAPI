
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import logo from "../assets/Pokemon-logo.png";
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const AppPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async (term: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}?limit=1000`);
      const newPokemonList = response.data.results;
      setPokemonList(newPokemonList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setLoading(false);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filteredList = pokemonList.filter((pokemon) =>
        pokemon.name.includes(term)
      );
      setFilteredPokemonList(filteredList);
    } else {
      setFilteredPokemonList(pokemonList);
    }
  };

  useEffect(() => {
    fetchPokemon("");
  }, []);

  useEffect(() => {
    handleSearchChange({
      target: { value: searchTerm },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [searchTerm, pokemonList]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img src={logo} alt="Logo" className="logo" />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <PokemonList pokemonList={filteredPokemonList} loading={loading} />
    </div>
  );
};

export default AppPage;

