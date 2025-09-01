
"use client";
import React, { useState } from "react";

const traders = [
  { id: 1, name: "Ali Traders", city: "Gujranwala", phone: "03035265396" },
  { id: 2, name: "Allah Tawakal", city: "Mandi Bahauddin", phone: "03177882287" },
  { id: 3, name: "Al-Rehman Traders", city: "Lala Musa", phone: "03448401641" },
  { id: 4, name: "Umer Traders", city: "Jhelum", phone: "03005422598" },
  { id: 5, name: "PSI Traders", city: "Kunjah", phone: "03066622064" },
  { id: 6, name: "Kashif Traders", city: "Nusreed Koy", phone: "03077981882" },
  { id: 7, name: "Sami Ullah Enterprise", city: "Kotla", phone: "03406217653" },
  { id: 8, name: "Mia Traders", city: "Jalalpur Jattan", phone: "03006258764" },
  { id: 9, name: "Waqas Traders", city: "Gujrat", phone: "03332400786" },
  { id: 10, name: "NS Food Solution", city: "Sialkot", phone: "03336179355" },
  { id: 11, name: "ISA Enterprise", city: "Badian (Mungowal)", phone: "03338472007" },
  { id: 12, name: "Musa Traders", city: "Chakwal", phone: "03370440088" },
  { id: 13, name: "Malik Sabir", city: "Sialkot", phone: "03315120006" },
];

const distributors = [
  { id: 1, name: "Abdullha", distributerName: "Abdullha Trader", area: "Pindi", phone: "03171175376" },
  { id: 2, name: "M.Ahsan", distributerName: "Kareemi Trader", area: "wah Cannt", phone: "03201585139" },
  { id: 3, name: "Shabeer", distributerName: "Qari Shabeer Trader", area: "Manshra", phone: "03111536097" },
  { id: 4, name: "M.Shoail", distributerName: "Data Trader", area: "Abbottabad", phone: "03118883201" },
  { id: 5, name: "Ajaz", distributerName: "Musa Trader", area: "AJK MZD", phone: "03009190040" },
  { id: 6, name: "Ahmad", distributerName: "Marhba Trader", area: "Hajeera", phone: "03558041806" },
  { id: 7, name: "Farooq", distributerName: "Farooq Trader", area: "Peshwar", phone: "03468889798" },
  { id: 8, name: "Bilal", distributerName: "Medina Trader", area: "D.I.Khan", phone: "03468884559" },
  { id: 9, name: "Ahsan", distributerName: "Ahsan Trader", area: "AJK", phone: "03425182305" },
];

export default function TradersTable() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleOption = () => {
    setActiveTab(activeTab === 1 ? 2 : 1);
  };

  const currentData = activeTab === 1 ? traders : distributors;
  const isTraders = activeTab === 1;

  return (
    <div className="w-full max-w-full mx-auto p-8 bg-gray-50 min-h-screen font-sans">
      <style jsx>{`
        .navigation-tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          background: white;
          border-radius: 12px;
          padding: 0.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .tab-button {
          flex: 1;
          padding: 1rem 2rem;
          border: none;
          background: transparent;
          color: #6b7280;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .tab-button.active {
          background: linear-gradient(135deg, #166534, #15803d);
          color: white;
          box-shadow: 0 4px 8px rgba(22, 101, 52, 0.3);
        }

        .tab-button:hover:not(.active) {
          background-color: #f3f4f6;
          color: #374151;
        }

        .table-container {
          width: 100%;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border: 1px solid #e5e7eb;
        }

        .traders-table {
          width: 100%;
          border-collapse: collapse;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }

        .table-header {
          background: linear-gradient(135deg, #166534, #15803d);
          color: white;
        }

        .table-header th {
          padding: 1.5rem;
          text-align: left;
          font-size: 1.25rem;
          font-weight: 600;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          letter-spacing: 0.5px;
        }

        .table-header th:first-child {
          text-align: center;
          width: 80px;
        }

        .table-header th:last-child {
          border-right: none;
        }

        .table-body tr {
          border-bottom: 1px solid #e5e7eb;
          transition: all 0.3s ease;
          opacity: 0;
          animation: slideIn 0.3s ease forwards;
        }

        .table-body tr:hover {
          background-color: #f0fdf4;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }

        .table-body tr:last-child {
          border-bottom: none;
        }

        .table-body tr:nth-child(1) { animation-delay: 0.1s; }
        .table-body tr:nth-child(2) { animation-delay: 0.15s; }
        .table-body tr:nth-child(3) { animation-delay: 0.2s; }
        .table-body tr:nth-child(4) { animation-delay: 0.25s; }
        .table-body tr:nth-child(5) { animation-delay: 0.3s; }
        .table-body tr:nth-child(6) { animation-delay: 0.35s; }
        .table-body tr:nth-child(7) { animation-delay: 0.4s; }
        .table-body tr:nth-child(8) { animation-delay: 0.45s; }
        .table-body tr:nth-child(9) { animation-delay: 0.5s; }
        .table-body tr:nth-child(10) { animation-delay: 0.55s; }
        .table-body tr:nth-child(11) { animation-delay: 0.6s; }
        .table-body tr:nth-child(12) { animation-delay: 0.65s; }
        .table-body tr:nth-child(13) { animation-delay: 0.7s; }

        .table-body td {
          padding: 1.5rem;
          font-size: 1.125rem;
          border-right: 1px solid #e5e7eb;
          vertical-align: middle;
        }

        .table-body td:last-child {
          border-right: none;
        }

        .table-body td:first-child {
          text-align: center;
          font-weight: 500;
          color: #374151;
        }

        .trader-name {
          font-weight: 600;
          color: #111827;
        }

        .trader-city {
          color: #4b5563;
          font-weight: 400;
        }

        .trader-phone {
          font-family: 'Courier New', monospace;
          color: #059669;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .table-header th {
            padding: 1rem;
            font-size: 1rem;
          }

          .table-body td {
            padding: 1rem;
            font-size: 1rem;
          }

          .table-header th:first-child {
            width: 60px;
          }
        }

        @media (max-width: 480px) {
          .table-header th {
            padding: 0.75rem 0.5rem;
            font-size: 0.9rem;
          }

          .table-body td {
            padding: 0.75rem 0.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Toggle Navigation */}
      <div className="navigation-tabs">
        <button 
          className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => setActiveTab(1)}
        >
          GT road belt (Kamoki-Mirpur)
        </button>
        <button 
          className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => setActiveTab(2)}
        >
          North KPK belt
        </button>
      </div>

      {/* Table Container */}
      <div className="table-container">
        <table className="traders-table" key={activeTab}>
          <thead className="table-header">
            <tr>
              <th>#</th>
              <th>{isTraders ? 'Name' : 'Contact Name'}</th>
              <th>{isTraders ? 'City' : 'Distributor Name'}</th>
              <th>{isTraders ? 'Phone' : 'Area'}</th>
              {!isTraders && <th>Phone</th>}
            </tr>
          </thead>
          <tbody className="table-body">
            {currentData.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td className="trader-name">
                  {isTraders ? item.name : item.name}
                </td>
                <td className="trader-city">
                  {isTraders ? item.city : item.distributerName}
                </td>
                <td className={isTraders ? "trader-phone" : "trader-city"}>
                  {isTraders ? item.phone : item.area}
                </td>
                {!isTraders && (
                  <td className="trader-phone">{item.phone}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}