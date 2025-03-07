"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface EditTicketPageProps {
  params: {
    bookedTicketId: string;
  };
}

const EditTicketPage: React.FC<EditTicketPageProps> = ({ params }) => {
  const router = useRouter();
  const bookedTicketId = params.bookedTicketId;
  const [ticketCode, setTicketCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [ticketFound, setTicketFound] = useState(true);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      if (bookedTicketId) {
        const response = await fetch(`/api/v1/get-booked-ticket/${bookedTicketId}`);
        const data = await response.json();

        console.log('Fetched ticket details:', data);

        if (data) {
          setTicketCode(data.ticketCode);
          setQuantity(data.quantity);
          setTicketFound(true);
        } else {
          setTicketFound(false);
        }
      }
    };

    fetchTicketDetails();
  }, [bookedTicketId]);

  const handleUpdate = async () => {
    await fetch(`/apiv1//edit-booked-ticket/${bookedTicketId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ticketCode, quantity }), // Send as an object
    });
    router.push(`/my-ticket/${bookedTicketId}`);
  };

  return (
    <div className="container mx-auto p-17 pt-25">
      <h1 className="text-2xl font-bold mb-4">Edit Ticket</h1>
      {ticketFound ? (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Ticket Code:</label>
            <input
              type="text"
              value={ticketCode}
              onChange={(e) => setTicketCode(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
        </>
      ) : (
        <p className="p-17 pt-25 text-red-500">No tickets found</p>
      )}
    </div>
  );
};

export default EditTicketPage;