// app/my-tickets/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BookedTicket {
  bookedTicketId: number;
  ticketCode: string;
  ticketName: string;
  eventDate: string;
  quantity: number;
  categoryName: string;
}

const MyTicketsPage: React.FC = () => {
  const [bookedTickets, setBookedTickets] = useState<BookedTicket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookedTickets = async () => {
      try {
        const response = await fetch('/api/v1/get-booked-ticket');
        if (!response.ok) {
          throw new Error('Failed to fetch booked tickets');
        }
        const data = await response.json();
        setBookedTickets(data);
      } catch (error) {
        console.error('Failed to fetch booked tickets:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookedTickets();
  }, []);

  const handleDelete = async (bookedTicketId: number, ticketCode: string) => {
    const qty = prompt('Enter the quantity you want to delete:');
    if (qty && !isNaN(Number(qty))) {
      const response = await fetch(`/api/v1/revoke-ticket/${bookedTicketId}/${ticketCode}/${qty}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Ticket deleted successfully!');
        // Refresh the ticket list after deletion
        setBookedTickets((prev) => prev.filter(ticket => ticket.bookedTicketId !== bookedTicketId));
      } else {
        alert('Failed to delete ticket.');
      }
    }
  };

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-17 pt-25">
      <h1 className="text-2xl font-bold mb-4">My Tickets</h1>
      {bookedTickets.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Ticket Code</th>
              <th className="py-3 px-6 text-left">Ticket Name</th>
              <th className="py-3 px-6 text-left">Event Date</th>
              <th className="py-3 px-6 text-left">Quantity</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {bookedTickets.map(ticket => (
              <tr key={ticket.bookedTicketId} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{ticket.categoryName}</td>
                <td className="py-3 px-6">{ticket.ticketCode}</td>
                <td className="py-3 px-6">{ticket.ticketName}</td>
                <td className="py-3 px-6">{ticket.eventDate}</td>
                <td className="py-3 px-6">{ticket.quantity}</td>
                <td className="py-3 px-6">
                  <Link href={`/my-ticket/edit/${ticket.bookedTicketId}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(ticket.bookedTicketId, ticket.ticketCode)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
};

export default MyTicketsPage;