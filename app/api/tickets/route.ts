// app/api/tickets/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const params = {
      categoryName: searchParams.get('categoryName'),
      ticketCode: searchParams.get('ticketCode'),
      ticketName: searchParams.get('ticketName'),
      price: searchParams.get('price'),
      minEventDate: searchParams.get('minEventDate'),
      maxEventDate: searchParams.get('maxEventDate'),
      orderBy: searchParams.get('orderBy') || 'TicketCode',
      orderState: searchParams.get('orderState') || 'ASC',
      page: searchParams.get('page') || '1',
      pageSize: searchParams.get('pageSize') || '10',
    };

    const backendUrl = new URL('http://localhost:5292/api/v1/get-available-ticket');

    // Append only non-null parameters to avoid sending empty values
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null) backendUrl.searchParams.append(key, value);
    });

    const response = await fetch(backendUrl.toString());

    if (!response.ok) {
      return NextResponse.json(
        { message: `Error fetching tickets: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.tickets)) {
      return NextResponse.json({ tickets: [], totalTickets: 0 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', tickets: [], totalTickets: 0 },
      { status: 500 }
    );
  }
}
