
import PropTypes from 'prop-types';

function Card({ username, btnText = "Visit me"}) {

  console.log(username);
  

  return (
    <div className="max-w-xs text-gray-100 bg-black rounded-md shadow-md m-3">
      <img
        src="https://images.pexels.com/photos/26385152/pexels-photo-26385152/free-photo-of-footpath-in-valley-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="object-cover object-center w-full bg-gray-500 rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide text-gray-200 bg-gray-800 rounded-md"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
  btnText: PropTypes.string,
};

export default Card;
