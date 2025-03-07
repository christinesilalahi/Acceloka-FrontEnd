export interface Ticket {
    eventDate: string; // Change from EventDate to eventDate
    quota: number; // Change from Quota to quota
    ticketCode: string; // Change from TicketCode to ticketCode
    ticketName: string; // Change from TicketName to ticketName
    categoryName: string; // Change from CategoryName to categoryName
    price: number; // If price is included in the response, ensure it's here
}
  
  export interface SearchParams {
    categoryName: string;
    ticketCode: string;
    ticketName: string;
    price: string;
    minEventDate: string;
    maxEventDate: string;
  }
  
  export interface ApiResponse {
    tickets: Ticket[];
    totalTickets: number;
  }

  export interface BookedTicket {
    bookedTicketId: number;
    ticketCode: string;
    ticketName: string;
    eventDate: string;
    quantity: number;
    categoryName: string;
  }
  
  export interface EditBookedTicketRequest {
    ticketCode: string;
    quantity: number;
  }