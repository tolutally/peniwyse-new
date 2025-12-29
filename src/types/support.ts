export type TicketStatus =
    | 'open'
    | 'in_progress'
    | 'waiting_on_customer'
    | 'resolved'
    | 'closed';

export type TicketPriority =
    | 'low'
    | 'medium'
    | 'high'
    | 'urgent';

export type TicketCategory =
    | 'account'
    | 'transaction'
    | 'kyc'
    | 'technical'
    | 'billing'
    | 'other';

export interface SupportTicket {
    id: string;
    userId: string;
    subject: string;
    category: TicketCategory;
    priority: TicketPriority;
    status: TicketStatus;
    description: string;
    messages: TicketMessage[];
    createdAt: Date;
    updatedAt: Date;
    resolvedAt?: Date;
}

export interface TicketMessage {
    id: string;
    ticketId: string;
    senderId: string;
    senderName: string;
    senderRole: 'user' | 'support';
    message: string;
    attachments?: string[];
    createdAt: Date;
}

export interface CreateTicketRequest {
    subject: string;
    category: TicketCategory;
    priority: TicketPriority;
    description: string;
    attachments?: File[];
}
