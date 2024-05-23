import PropTypes from "prop-types";
import Currentcook from "../Currentcook/Currentcook";

const Cook = ({ cook, handlePrepare, prepare }) => {
  console.log(prepare);
  return (
    <div>
      <h3 className="text-3xl font-medium text-center m-4">
        Want to cook: {cook.length}
      </h3>
      <hr className="w-2/3 mx-auto h-2" />
      <table className="table-auto w-full text-[#878787]">
        <thead className="mx-auto">
          <tr className="h-14">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cook.map((singleCook, idx) => (
            <tr className="bg-[#f8f8f8] h-14" key={idx}>
              <td className="w-8 pl-4">{idx + 1}</td>
              <td className="pl-4">{singleCook.recipe_name}</td>
              <td className="pl-4">{singleCook.preparing_time} minutes</td>
              <td className="pl-4">{singleCook.calories} calories</td>
              <td className="pl-4">
                <button
                  onClick={() =>
                    handlePrepare(singleCook, singleCook.recipe_id)
                  }
                  className="btn btn-primary bg-[#0BE58A] px-4 font-medium py-2 rounded-full text-black"
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
          <tr className="h-14">
            <td></td>
          </tr>
        </tbody>
      </table>

      <Currentcook prepare={prepare}></Currentcook>
    </div>
  );
};

Cook.propTypes = {
  cook: PropTypes.array,
  handlePrepare: PropTypes.func,
  prepare: PropTypes.array,
};

export default Cook;
