import { useEffect, useState } from "react";
import axios from "axios";

const ContactAdmin = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContact = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/contact"); // Sesuaikan URL API
      const filteredContact = response.data.map((contact) => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        message: contact.message,
      }));
      console.log("Contact data fetched:", response.data); // Tambahkan log
      setContactData(filteredContact);
    } catch (error) {
      console.error("Error fetching contact:", error); // Log error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <div className="pl-72 pt-8 pr-8">
      <h2 className="text-2xl font-bold mb-6 ml-8">
        Manage Contact / Feedback
      </h2>
      <div className="ml-8 bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Nama
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact) => (
              <tr key={contact.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactAdmin;
