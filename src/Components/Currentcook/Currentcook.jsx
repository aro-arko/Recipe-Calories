import PropTypes from "prop-types";

const Currentcook = ({ prepare }) => {
  // Calculate total time and calories
  const total = prepare.reduce(
    (acc, curr) => {
      acc.time += curr.preparing_time;
      acc.calories += curr.calories;
      return acc;
    },
    { time: 0, calories: 0 }
  );

  return (
    <div>
      <h3 className="text-3xl font-medium text-center m-4">
        Currently Cooking: {prepare.length}
      </h3>

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
          {prepare.map((curr, idx) => (
            <tr className="bg-[#f8f8f8] h-14" key={idx}>
              <td className="w-8 pl-4">{idx + 1}</td>
              <td className="pl-4">{curr.recipe_name}</td>
              <td className="pl-4">{curr.preparing_time} minutes</td>
              <td className="pl-4">{curr.calories} calories</td>
            </tr>
          ))}
          <tr className="h-14 font-bold">
            <td className="w-8 pl-4"></td>
            <td className="pl-4"></td>
            <td className="pl-4"> Total Time = {total.time} minutes</td>
            <td className="pl-4"> Total Calories = {total.calories}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Currentcook.propTypes = {
  prepare: PropTypes.arrayOf(
    PropTypes.shape({
      recipe_name: PropTypes.string.isRequired,
      preparing_time: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Currentcook;
