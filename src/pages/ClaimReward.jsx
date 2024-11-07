import { Link } from "react-router-dom";

const ClaimReward = () => {
  return (
    <div>
      <header className="w-full bg-green-200 py-10 text-center">
        <h1 className="text-4xl font-bold">Rewards</h1>
      </header>
      <div className="p-6 max-w-5xl mx-auto">
        <Link to="/Rewards" className="text-green-500 no-underline">
          <p>← Rewards</p>
        </Link>
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">You Got Rewards!</h1>
          <div className="border border-orange-300 rounded-lg px-8 py-2 text-right">
            <p className="text-orange-500 font-semibold text-xl">My Points</p>
            <p className="text-green-500 text-xl font-bold">1.405</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full px-8 pb-6 border border-gray-300 rounded-full">
            <p className="text-justify mb-1 pt-1 font-bold">
              450 poin Trash+ to find a treasure
            </p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-green-400 h-4 rounded-full"
                style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>

        {/* Reward Cards */}
        <div className="flex justify-around mt-8 space-x-4">
          {/* Card 1 */}
          <div className="w-1/3 border rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="./src/assets/images/claimreward.png"
              alt="Reward 1"
              className="mb-4 w-50 h-50"
            />{" "}
            {/* Redeem Button*/}
            <button className="bg-gray-200 py-1 px-4 rounded-full text-sm mb-2">
              Redeem
            </button>
            <p>1000 Points</p>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 border rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="./src/assets/images/claimreward.png"
              alt="Reward 2"
              className="mb-4 w-50 h-50"
            />{" "}
            {/* Redeem Button */}
            <button className="bg-gray-200 py-1 px-4 rounded-full text-sm mb-2">
              Redeem
            </button>
            <p>2000 Points</p>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 border rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src="./src/assets/images/claimreward.png"
              alt="Reward 3"
              className="mb-4 w-50 h-50"
            />{" "}
            {/* Redeem Button */}
            <button className="bg-gray-200 py-1 px-4 rounded-full text-sm mb-2">
              Redeem
            </button>
            <p>3000 Points</p>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button className="bg-orange-300 text-white w-8 h-8 rounded-full">
            &lt;
          </button>
          <button className="bg-orange-300 text-white w-8 h-8 rounded-full">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimReward;
