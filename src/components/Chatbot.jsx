import React, { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

const ChatbotForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, description, file });
    setMessage("Issue submitted successfully!");
  };

  return (
    <div>
      {/* Chatbot Icon */}
      <button
        className="fixed bottom-4 right-6 bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700"
        onClick={() => setChatOpen(!chatOpen)}
      >
        {chatOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>
      
      {/* Chatbot Form */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 bg-white shadow-lg rounded-lg w-80 p-4 border border-gray-300">
          <h1 className="text-lg font-bold mb-2">Submit Your Issue</h1>
          <form onSubmit={handleSubmit} className="space-y-2 max-h-[300px] overflow-y-auto">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <textarea
              placeholder="Describe your issue"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
              required
            ></textarea>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded-md"
              accept="image/*, .pdf, .doc, .docx"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          {message && <p className="mt-2 text-center text-green-600">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default ChatbotForm;
