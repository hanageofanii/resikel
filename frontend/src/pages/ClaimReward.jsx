import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ClaimReward = () => {
  const [points, setPoints] = useState(0);
  const [claimedPoints, setClaimedPoints] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [
    showInsufficientPointsNotification,
    setShowInsufficientPointsNotification,
  ] = useState(false);

  useEffect(() => {
    const savedPoints = parseInt(localStorage.getItem("totalPoints")) || 0;
    setPoints(savedPoints);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const rewardsPerPage = 3;
  const rewards = [
    { id: 1, cost: 1000, pointsText: "1.000 Poin" },
    { id: 2, cost: 2000, pointsText: "2.000 Poin" },
    { id: 3, cost: 3000, pointsText: "3.000 Poin" },
    { id: 4, cost: 4000, pointsText: "4.000 Poin" },
    { id: 5, cost: 5000, pointsText: "5.000 Poin" },
    { id: 6, cost: 6000, pointsText: "6.000 Poin" },
  ];

  const canvasRef = useRef(null);

  const indexOfLastReward = currentPage * rewardsPerPage;
  const indexOfFirstReward = indexOfLastReward - rewardsPerPage;
  const currentRewards = rewards.slice(indexOfFirstReward, indexOfLastReward);

  const handleRedeem = (cost) => {
    if (points >= cost) {
      setIsRedeeming(true);
      setTimeout(() => {
        const newPoints = points - cost;
        setPoints(newPoints);
        setClaimedPoints(cost);
        setIsRedeeming(false);
        setShowNotification(true);
        setShowDownloadButton(true);

        localStorage.setItem("totalPoints", newPoints);
      }, 2000);
    } else {
      setShowInsufficientPointsNotification(true);
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
    setShowInsufficientPointsNotification(false);
  };

  const generateToken = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    return token;
  };

  const drawOnCanvas = async (cost) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the previous canvas content
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set a background gradient
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, "#BBF7D0"); // Light yellow
    gradient.addColorStop(1, "#FF5733"); // Vibrant orange
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the main rounded rectangle
    const margin = 20;
    const width = canvas.width - 2 * margin;
    const height = canvas.height - 2 * margin;
    const borderRadius = 15;
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#FF5733"; // Red border
    ctx.fillStyle = "#FFFFFF"; // White background

    ctx.beginPath();
    ctx.moveTo(margin + borderRadius, margin);
    ctx.arcTo(
      margin + width,
      margin,
      margin + width,
      margin + height,
      borderRadius
    );
    ctx.arcTo(
      margin + width,
      margin + height,
      margin,
      margin + height,
      borderRadius
    );
    ctx.arcTo(margin, margin + height, margin, margin, borderRadius);
    ctx.arcTo(margin, margin, margin + width, margin, borderRadius);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Add "Resikel" text
    ctx.fillStyle = "#000"; // Orange color
    ctx.font = "bold 24px Poppins";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("RESIKEL", canvas.width / 2, margin + 20);

    // Add "Kupon Diskon" text
    ctx.fillStyle = "#FF5733"; // Red
    ctx.font = "bold 24px Poppins";
    ctx.fillText("Kupon Diskon", canvas.width / 2, margin + 60);

    // Generate a unique token and add it to the canvas
    const token = generateToken(8); // Example token length of 8
    ctx.fillStyle = "#FF5733"; // Red color for token
    ctx.font = "bold 10px Poppins";
    ctx.fillText(`Kode Token: ${token}`, canvas.width / 2, margin + 90);

    // Add discount value
    ctx.fillStyle = "#333333"; // Dark text
    ctx.font = "bold 48px Poppins";
    ctx.fillText(`Rp.${cost}`, canvas.width / 2, margin + 110);

    // Add claim and expiration dates
    const claimDate = new Date(); // Current date
    const expirationDate = new Date();
    expirationDate.setDate(claimDate.getDate() + 3); // Add 3 days for expiration

    const claimDateStr = `${claimDate.getDate().toString().padStart(2, "0")}/${(
      claimDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${claimDate.getFullYear()}`;
    const expirationDateStr = `${expirationDate
      .getDate()
      .toString()
      .padStart(2, "0")}/${(expirationDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${expirationDate.getFullYear()}`;

    ctx.font = "16px Poppins";
    ctx.textBaseline = "middle";
    ctx.fillText(
      `Tanggal Klaim: ${claimDateStr}`,
      canvas.width / 2,
      margin + 180
    );
    ctx.fillText(
      `Tanggal Kedaluwarsa: ${expirationDateStr}`,
      canvas.width / 2,
      margin + 210
    );

    // Add reminder text for expiration
    ctx.font = "italic 14px Poppins bold";
    ctx.fillStyle = "#555555"; // Gray
    ctx.fillText(
      "Tukarkan kupon sebelum kedaluwarsa!",
      canvas.width / 2,
      canvas.height - margin - 20
    );

    // Load logos and draw them asynchronously
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
      });
    };

    const logoSrc = "./src/assets/images/logo.png"; // Replace with your logo path
    const [logoLeft, logoRight] = await Promise.all([
      loadImage(logoSrc),
      loadImage(logoSrc),
    ]);

    const logoSize = 60;
    ctx.globalAlpha = 0.8;
    ctx.drawImage(
      logoLeft,
      margin + 10,
      canvas.height - margin - logoSize - 10,
      logoSize,
      logoSize
    );
    ctx.drawImage(
      logoRight,
      canvas.width - margin - logoSize - 10,
      canvas.height - margin - logoSize - 10,
      logoSize,
      logoSize
    );
    ctx.globalAlpha = 1.0;
  };

  const downloadRedeemProof = async () => {
    await drawOnCanvas(claimedPoints); // Ensure canvas is drawn
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
          <h1 className="text-3xl font-bold">Tukarkan Point Anda!</h1>
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
                Klaim {reward.pointsText}
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
                Klaim Point berhasil! Anda telah menukar {claimedPoints} poin.
                Kirim notifikasi ke pengepul untuk pengambilan.
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
              Unduh Bukti Klaim Poin.
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
