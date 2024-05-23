import PropTypes from "prop-types";
import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { SlFire } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe, handleCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  const firstThreeIngredients = ingredients.slice(0, 3);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      handleCook(recipe);
      setClicked(true);
    }
    if (clicked) {
      toast("Already added!");
    }
  };

  return (
    <div>
      <div className="card text-[#878787] rounded-2xl w-full bg-base-100 shadow-xl  border-2 border-[#CAD1D6]">
        <figure className="p-6 rounded-2xl">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center space-y-4 p-6">
          <h2 className="card-title text-[#282828] text-xl font-semibold">
            {recipe_name}
          </h2>
          <p className="">{short_description}</p>
          <hr />
          <h6 className="text-[#282828] text-lg font-semibold">
            Ingredients: {ingredients.length}
          </h6>
          <ul className="px-8 list-disc">
            {firstThreeIngredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <div className="flex justify-start text-[#535353]">
            <div className="flex items-center mr-7">
              <IoTimeOutline className="mr-1"></IoTimeOutline>
              <p>{preparing_time} minutes</p>
            </div>
            <div className="flex items-center">
              <SlFire className="mr-1"></SlFire>
              <p>{calories} calories</p>
            </div>
          </div>

          <div className="card-actions">
            <button
              onClick={handleClick}
              className="btn btn-primary text-[#150B2B] font-medium bg-[#0BE58A] hover:bg-[#0be58abe] px-6 py-4 rounded-full"
            >
              Want to Cook
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleCook: PropTypes.func,
};

export default Recipe;
