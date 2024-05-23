import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCook = (recipe) => {
    const newCook = [...cook, recipe];
    setCook(newCook);
    // console.log(cook);
  };

  const [prepare, setPrepare] = useState([]);

  const handlePrepare = (singleCook, id) => {
    const removedCook = cook.filter((pd) => pd.recipe_id != id);
    setCook(removedCook);
    const newPrepare = [...prepare, singleCook];
    setPrepare(newPrepare);
  };

  console.log(prepare);
  return (
    <>
      <div className="ml-32 mr-32">
        <Header></Header>
        <Banner></Banner>
        <Recipes
          cook={cook}
          handleCook={handleCook}
          handlePrepare={handlePrepare}
          prepare={prepare}
          recipes={recipes}
        ></Recipes>
      </div>
    </>
  );
}

export default App;
