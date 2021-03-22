import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PokeDetails = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [abilityDetails, setAbilityDetails] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [moves, setMoves] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((response) => {
        setImage(response.sprites.other.dream_world.front_default);
        setName(response.name);
        setAbilityDetails(response.abilities);
        setHeight(response.height);
        setWeight(response.weight);
        setMoves(response.moves);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);

  return (
    <div>
      {error ? (
        <ul>
          <li className="error">Sorry, Details Not Found</li>
        </ul>
      ) : (
        <ul className="details-list">
          <li className="details">Pokemon Name : {name}</li>
          <img className="image" src={image} alt="Pokemon" />
          <li className="details">
            Abilities :
            {abilityDetails.map((detail) => (
              <span key={detail.ability.name}> {detail.ability.name} </span>
            ))}
          </li>
          <li className="details">Height : {height}</li>
          <li className="details">Weight : {weight}</li>
          <li className="details">
            Moves :
            <ul>
              {moves.map((moveName) => (
                <li key={moveName.move.name} className="details moves">
                  {moveName.move.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
      <ul>
        <li>
          <Link style={{ margin: "auto", textShadow: "none" }} to="/">
            Go Back
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PokeDetails;
