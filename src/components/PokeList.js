import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [offset, setOffSet] = useState(0);
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(offset / limit + 1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((response) => {
        setPokeList(response.results);
        setPageCount(Math.ceil(response.count / limit));
      })
      .catch((err) => console.log(err));
  }, [offset]);

  const paginate = (number) => {
    setOffSet((number - 1) * limit);
    setCurrentPage(number);
  };

  const paginateNext = (nextNumber) => {
    setOffSet((nextNumber - 1) * limit);
    setCurrentPage(nextNumber);
  };

  const paginatePrev = (prevNumber) => {
    setOffSet((prevNumber - 1) * limit);
    setCurrentPage(prevNumber);
  };

  return (
    <div>
      <ul>
        {pokeList.map((pokemon, index) => (
          <li key={pokemon.name} className="pokename">
            {(currentPage - 1) * 10 + index + 1}. Pokemon Name : {pokemon.name}
            <div className="pokelinks">
              click
              <Link
                style={{
                  textShadow: "none",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                to={`/details/${(currentPage - 1) * 10 + index + 1}`}
              >
                here
              </Link>
              to know more
            </div>
          </li>
        ))}
      </ul>

      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        paginate={paginate}
        paginateNext={paginateNext}
        paginatePrev={paginatePrev}
      />
    </div>
  );
};

export default PokeList;
