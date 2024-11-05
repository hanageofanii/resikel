const Rewards = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-green-200 py-4 text-center">
        <h1 className="text-2xl font-bold">Yuk Kurangi Sampah!</h1>
      </header>
      <main className="w-full max-w-4xl bg-white mt-6 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Add Your Trash Today!</h2>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Track Location
            </a>
          </div>
          <div className="flex items-center border border-orange-300 rounded-lg p-4">
            <i className="fas fa-recycle text-orange-300 text-2xl mr-2"></i>
            <div>
              <p className="text-sm text-gray-500">Total Points</p>
              <p className="text-xl font-bold text-green-500">1.405</p>
              <a href="/claimreward" className="text-sm text-gray-500 hover:underline">
                Claim Reward
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
            <div className="w-full px-8 pb-6 border border-gray-300 rounded-full mb-8">
                <p className="text-justify mb-1 pt-1 font-bold">450 poin Trash+ to find a treasure</p>
                <div className="w-full bg-gray-300 rounded-full h-4">
                <div className="bg-green-400 h-4 rounded-full" style={{ width: '70%' }}></div>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-center text-xl font-bold mb-4">Formulir</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jenis Sampah
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                <option>Pilih jenis sampah</option>
              </select>
            </div>
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-sm font-medium text-gray-700">
                  Berat Sampah
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">Kg</span>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-300 text-white py-2 px-4 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Rewards;
