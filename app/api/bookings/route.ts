// app/api/bookings/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://localhost:5292/api/v1/get-booked-ticket'); // Adjust the URL
    if (!response.ok) {
      return NextResponse.json(
        { message: `Error fetching booked tickets: ${response.statusText}` },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching booked tickets:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { bookedTicketId, ticketCode, qty } = await request.json();
    const response = await fetch(`http://localhost:5292/api/v1/revoke-ticket/${bookedTicketId}/${ticketCode}/${qty}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: `Error revoking ticket: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error revoking ticket:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { bookedTicketId, quantity } = await request.json(); // Adjusted to match the expected body
    const response = await fetch(`http://localhost:5292/api/v1/edit-booked-ticket/${bookedTicketId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }), // Send quantity as an object
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: `Error editing booked ticket: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error editing booked ticket:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}