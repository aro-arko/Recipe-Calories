import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";
import Cook from "../Cook/Cook";

const Recipes = ({ recipes, handleCook, cook, handlePrepare, prepare }) => {
  //   console.log(recipes);
  return (
    <div>
      <div className="text-center mt-20 space-y-3">
        <h2 className="text-3xl font-bold">Our Recipes</h2>
        <p className="w-1/2 mx-auto">
          Our recipes blend simplicity and flavor, making home-cooked meals both
          easy and delicious. Discover dishes that transform everyday
          ingredients into culinary delights with minimal effort.
        </p>
      </div>
      <div className="flex justify-start mt-16">
        <div className="w-2/3 grid lg:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleCook={handleCook}
            ></Recipe>
          ))}
        </div>
        <div className="w-1/3 border-2 border-[#CAD1D6] h-full rounded-2xl ml-6">
          <Cook
            handlePrepare={handlePrepare}
            prepare={prepare}
            cook={cook}
          ></Cook>
        </div>
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleCook: PropTypes.func,
  cook: PropTypes.array,
  handlePrepare: PropTypes.func,
  prepare: PropTypes.array,
};

export default Recipes;
