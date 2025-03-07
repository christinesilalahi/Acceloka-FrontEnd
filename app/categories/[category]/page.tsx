'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ApiResponse, Ticket } from '@/app/types';

export default function CategoryPage() {
  const { category } = useParams(); // Get the category from the URL
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTicketsByCategory = async () => {
      try {
        const response = await fetch(`/api/tickets?categoryName=${category}`);
        const data: ApiResponse = await response.json();

        console.log('API Response:', data); // Debugging: Log the API response

        if (data.tickets && Array.isArray(data.tickets)) {
          setTickets(data.tickets);
        } else {
          setTickets([]);
        }
      } catch (error) {
        console.error('Failed to fetch tickets:', error);
        setTickets([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTicketsByCategory();
  }, [category]);

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-17 pt-25">
      <h1 className="text-2xl font-bold mb-4">Tickets in {category}</h1>
      {tickets.length > 0 ? (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Event Date</th>
                <th className="border border-gray-300 p-2">Quota</th>
                <th className="border border-gray-300 p-2">Ticket Code</th>
                <th className="border border-gray-300 p-2">Ticket Name</th>
                <th className="border border-gray-300 p-2">Category Name</th>
                <th className="border border-gray-300 p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.ticketCode} className="hover:bg-gray-50"> {/* Use ticketCode as a unique key */}
                  <td className="border border-gray-300 p-2">{ticket.eventDate}</td>
                  <td className="border border-gray-300 p-2">{ticket.quota}</td>
                  <td className="border border-gray-300 p-2">{ticket.ticketCode}</td>
                  <td className="border border-gray-300 p-2">{ticket.ticketName}</td>
                  <td className="border border-gray-300 p-2">{ticket.categoryName}</td>
                  <td className="border border-gray-300 p-2">{ticket.price}</td> {/* Ensure price is displayed */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No tickets found in the {category} category.</p>
      )}
    </div>
  );
}