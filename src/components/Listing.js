import { BrowserRouter as Router, Route } from "react-router-dom";
import PokeDetails from "./PokeDetails";
import PokeList from "./PokeList";

const Listing = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={PokeList} />
        <Route path="/details/:id" component={PokeDetails}></Route>
      </div>
    </Router>
  );
};

export default Listing;
