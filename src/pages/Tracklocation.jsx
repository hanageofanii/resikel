import { useEffect } from "react";
import L from "leaflet";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "leaflet/dist/leaflet.css";
import "tailwindcss/tailwind.css";

const Tracklocation = () => {
  useEffect(() => {
    // Inisialisasi peta di Batam
    const mapInstance = L.map("map").setView([1.0858, 104.0759], 13); // Koordinat Batam

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    const locations = [
      {
        lat: 1.0838,
        lng: 104.0589,
        name: "Batam Center",
        status: "Belum Penuh",
        color: "green",
      },
      {
        lat: 1.1385,
        lng: 104.0462,
        name: "Nagoya",
        status: "Penuh",
        color: "red",
      },
      {
        lat: 1.1553,
        lng: 104.0375,
        name: "Sekupang",
        status: "Belum Penuh",
        color: "green",
      },
      {
        lat: 1.0283,
        lng: 104.0627,
        name: "Batu Ampar",
        status: "Penuh",
        color: "red",
      },
      {
        lat: 1.1302,
        lng: 104.1484,
        name: "Barelang",
        status: "Belum Penuh",
        color: "green",
      },
    ];

    // Menambahkan marker untuk setiap lokasi
    locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], {
        icon: L.divIcon({
          className: "custom-div-icon",
          html: `<i class="fas fa-map-marker-alt text-${location.color}-600 text-3xl"></i>`,
          iconSize: [30, 42],
          iconAnchor: [15, 42],
        }),
      }).addTo(mapInstance);

      // Menambahkan popup untuk setiap marker
      const popupContent = `
        <div class="text-center">
          <h2 class="text-xl font-bold">${location.name}</h2>
          <p>Status Sampah: ${location.status}</p>
        </div>
      `;
      marker.bindPopup(popupContent);
    });

    // Cleanup function untuk menghapus peta saat komponen dibongkar
    return () => {
      mapInstance.remove();
    };
  }, []);

  return (
    <div>
      <div className="bg-green-200 py-16 px-8 lg:px-24 text-center ">
        <h1 className="text-3xl font-bold mb-10">Lacak Lokasi</h1>
        <div id="map" style={{ height: "400px" }}></div>
      </div>
      <div className="bg-white p-10">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-gray-300"></div>
          {[
            {
              name: "Kelurahan Duriangkang",
              status: "Belum Penuh",
              color: "green",
            },
            { name: "Kelurahan Duriangkang", status: "Penuh", color: "red" },
            {
              name: "Kelurahan Duriangkang",
              status: "Belum Penuh",
              color: "green",
            },
            { name: "Kelurahan Duriangkang", status: "Penuh", color: "red" },
            {
              name: "Kelurahan Duriangkang",
              status: "Belum Penuh",
              color: "green",
            },
          ].map((item, index) => (
            <div className="flex items-center mb-10" key={index}>
              <div className="w-1/2 text-right pr-10">
                <h2 className="text-blue-600 font-bold">{item.name}</h2>
                <p className="text-gray-600">Status Sampah: {item.status}</p>
              </div>
              <div className="w-1/2 text-left pl-10">
                <div
                  className={`w-8 h-8 bg-${item.color}-600 rounded-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracklocation;
