// app/admin/page.tsx

"use client";

import { useState, FormEvent } from 'react';

const AdminPage = () => {
  const [categoryId, setCategoryId] = useState<string>('');
  const [ticketCode, setTicketCode] = useState<string>('');
  const [ticketName, setTicketName] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [quota, setQuota] = useState<string>('');

  const handleAddTicket = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTicket = { categoryId, ticketCode, ticketName, eventDate, price, quota };
    
    // Simulate adding ticket (replace with your API call)
    const response = await fetch('/api/v1/admin/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTicket),
    });

    if (response.ok) {
      alert('Ticket added successfully!');
      // Clear form fields
      setCategoryId('');
      setTicketCode('');
      setTicketName('');
      setEventDate('');
      setPrice('');
      setQuota('');
    } else {
      alert('Failed to add ticket.');
    }
  };

  const handleDownloadReport = async (format: 'pdf' | 'excel') => {
    // Simulate downloading report (replace with your API call)
    const response = await fetch(`/api/v1/reports?format=${format}`);
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `report.${format === 'pdf' ? 'pdf' : 'xlsx'}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      alert('Failed to download report.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Ticket</h2>
      <form onSubmit={handleAddTicket} className="space-y-4 mb-8">
        <div>
          <label className="block">Category ID:</label>
          <input
            type="text"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Ticket Code:</label>
          <input
            type="text"
            value={ticketCode}
            onChange={(e) => setTicketCode(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Ticket Name:</label>
          <input
            type="text"
            value={ticketName}
            onChange={(e) => setTicketName(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Quota:</label>
          <input
            type="number"
            value={quota}
            onChange={(e) => setQuota(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Add Ticket</button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Download Report</h2>
      <div className="space-x-4">
        <button onClick={() => handleDownloadReport('pdf')} className="bg-green-500 text-white p-2">
          Download PDF
        </button>
        <button onClick={() => handleDownloadReport('excel')} className="bg-yellow-500 text-white p-2">
          Download Excel
        </button>
      </div>
    </div>
  );
};

export default AdminPage;