// app/searchResult/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Ticket, ApiResponse } from '../types';

export default function SearchResultPage() {
  const searchParams = useSearchParams();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [totalTickets, setTotalTickets] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const queryParams = new URLSearchParams();
        searchParams.forEach((value, key) => {
          if (value) queryParams.append(key, value);
        });

        console.log('Fetching tickets with query params:', queryParams.toString());

        const response = await fetch(`/api/tickets?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        console.log('API Response:', data);

        if (data.tickets && Array.isArray(data.tickets)) {
          setTickets(data.tickets);
          setTotalTickets(data.totalTickets);
        } else {
          console.warn('Unexpected data structure:', data);
          setTickets([]);
          setTotalTickets(0);
        }
      } catch (error) {
        console.error('Failed to fetch tickets:', error);
        setTickets([]);
        setTotalTickets(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, [searchParams]);

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-17 pt-25">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
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
                <th className="border border-gray-300 p-2">Price</th> {/* Ensure price is included in the response */}
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
          <p className="mt-4">Total Tickets: {totalTickets}</p>
        </>
      ) : (
        <p>No tickets found matching the criteria.</p>
      )}
    </div>
  );
}