import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const ClaimReward = () => {
  const [points, setPoints] = useState(1405);
  const [claimedPoints, setClaimedPoints] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [
    showInsufficientPointsNotification,
    setShowInsufficientPointsNotification,
  ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rewardsPerPage = 3;
  const rewards = [
    { id: 1, cost: 1000, pointsText: "1000 Poin" },
    { id: 2, cost: 2000, pointsText: "2000 Poin" },
    { id: 3, cost: 3000, pointsText: "3000 Poin" },
    { id: 4, cost: 4000, pointsText: "4000 Poin" },
    { id: 5, cost: 5000, pointsText: "5000 Poin" },
    { id: 6, cost: 6000, pointsText: "6000 Poin" },
  ];

  const canvasRef = useRef(null);

  const indexOfLastReward = currentPage * rewardsPerPage;
  const indexOfFirstReward = indexOfLastReward - rewardsPerPage;
  const currentRewards = rewards.slice(indexOfFirstReward, indexOfLastReward);

  const handleRedeem = (cost) => {
    if (points >= cost) {
      setIsRedeeming(true);
      setTimeout(() => {
        setPoints(points - cost);
        setClaimedPoints(cost);
        setIsRedeeming(false);
        setShowNotification(true);
        setShowDownloadButton(true);
        drawOnCanvas(cost);
      }, 2000);
    } else {
      setShowInsufficientPointsNotification(true);
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
    setShowInsufficientPointsNotification(false);
  };

  const drawOnCanvas = (cost) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#80C7F7");
    gradient.addColorStop(1, "#4D9EFF");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const borderRadius = 15;
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#006F8E";
    ctx.beginPath();
    ctx.moveTo(borderRadius, 0);
    ctx.lineTo(canvas.width - borderRadius, 0);
    ctx.arcTo(canvas.width, 0, canvas.width, borderRadius, borderRadius);
    ctx.lineTo(canvas.width, canvas.height - borderRadius);
    ctx.arcTo(
      canvas.width,
      canvas.height,
      canvas.width - borderRadius,
      canvas.height,
      borderRadius
    );
    ctx.lineTo(borderRadius, canvas.height);
    ctx.arcTo(0, canvas.height, 0, canvas.height - borderRadius, borderRadius);
    ctx.lineTo(0, borderRadius);
    ctx.arcTo(0, 0, borderRadius, 0, borderRadius);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "#FFFFFF";
    ctx.fill();

    const recycleLogo = new Image();
    recycleLogo.src = "./src/assets/images/logo.png";
    recycleLogo.onload = () => {
      // Draw the logo on canvas once it's loaded
      ctx.drawImage(recycleLogo, 20, 20, 50, 50);
    };

    ctx.fillStyle = "#006F8E";
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText("REDEEM KUPON", canvas.width / 2, 50);

    ctx.fillStyle = "#333333";
    ctx.font = "16px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";

    const padding = 100;
    ctx.fillText(`Poin yang diklaim: ${cost}`, 80, padding);
    ctx.fillText(`Sisa Poin: ${points - cost}`, 80, padding + 25);

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 3);

    const day = String(expirationDate.getDate()).padStart(2, "0");
    const month = String(expirationDate.getMonth() + 1).padStart(2, "0");
    const year = expirationDate.getFullYear();
    const expirationString = `Kadaluarsa pada: ${day}/${month}/${year}`;

    ctx.fillText(expirationString, 80, padding + 55);

    ctx.font = "italic 14px Arial";
    ctx.fillText(
      "Tukarkan sebelum tanggal kupon kadaluarsa!",
      80,
      canvas.height - 30
    );

    ctx.strokeStyle = "#006F8E";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 50);
    ctx.lineTo(canvas.width, canvas.height - 50);
    ctx.stroke();
  };

  const downloadRedeemProof = () => {
    const canvas = canvasRef.current;
    const imageURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "bukti-reedeem.png";

    link.click();
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(rewards.length / rewardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <header className="w-full bg-green-200 py-10 text-center">
        <h1 className="text-4xl font-bold">Hadiah</h1>
      </header>
      <div className="p-6 max-w-5xl mx-auto">
        <Link to="/Rewards" className="text-green-500 no-underline">
          <p>← Hadiah</p>
        </Link>

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Anda Mendapat Hadiah!</h1>
          <div className="border border-orange-300 rounded-lg px-8 py-2 text-right">
            <p className="text-orange-500 font-semibold text-xl">Poin Saya</p>
            <p className="text-green-500 text-xl font-bold">{points}</p>
          </div>
        </div>

        {/* Rewards Display */}
        <div className="flex justify-around mt-8 space-x-4">
          {currentRewards.map((reward) => (
            <div
              key={reward.id}
              className="w-1/3 border rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src="./src/assets/images/claimreward.png"
                alt={`Reward ${reward.id}`}
                className="mb-4 w-50 h-50"
              />
              <button
                onClick={() => handleRedeem(reward.cost)}
                className="bg-gray-200 py-1 px-4 rounded-full text-sm mb-2"
                disabled={isRedeeming}
              >
                Redeem {reward.pointsText}
              </button>
              <p>{reward.pointsText}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="bg-orange-300 text-white w-8 h-8 rounded-full"
            onClick={handlePreviousPage}
          >
            &lt;
          </button>
          <span className="text-xl">{currentPage}</span>
          <button
            className="bg-orange-300 text-white w-8 h-8 rounded-full"
            onClick={handleNextPage}
          >
            &gt;
          </button>
        </div>

        {/* Notifications */}
        {showNotification && (
          <div className="fixed bottom-4 right-4 bg-green-100 border border-green-400 p-4 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="flex flex-col">
              <p>
                Redeem berhasil! Anda telah menukar {claimedPoints} poin. Kirim
                notifikasi ke pengepul untuk pengambilan.
              </p>
              <p className="font-bold text-lg mt-2">
                Screenshot bukti ini dan serahkan ke pengepul.
              </p>
            </div>
            <button
              onClick={handleCloseNotification}
              className="ml-4 text-red-500 font-bold"
            >
              X
            </button>
          </div>
        )}

        {showInsufficientPointsNotification && (
          <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 p-4 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="flex flex-col">
              <p>Poin tidak mencukupi! Silakan kumpulkan lebih banyak poin.</p>
            </div>
            <button
              onClick={handleCloseNotification}
              className="ml-4 text-red-500 font-bold"
            >
              X
            </button>
          </div>
        )}

        {showDownloadButton && (
          <div className="mt-6">
            <button
              onClick={downloadRedeemProof}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg"
            >
              Unduh Bukti Redeem.
            </button>
          </div>
        )}
      </div>

      <canvas
        ref={canvasRef}
        width="500"
        height="300"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ClaimReward;
