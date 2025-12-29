import { format, formatDistance, formatRelative, isToday, isYesterday, parseISO } from 'date-fns';

/**
 * Format a date as a full date string
 */
export function formatDate(date: Date | string): string {
    const d = typeof date === 'string' ? parseISO(date) : date;
    return format(d, 'MMM d, yyyy');
}

/**
 * Format a date with time
 */
export function formatDateTime(date: Date | string): string {
    const d = typeof date === 'string' ? parseISO(date) : date;
    return format(d, 'MMM d, yyyy h:mm a');
}

/**
 * Format a date as a relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date | string): string {
    const d = typeof date === 'string' ? parseISO(date) : date;
    return formatDistance(d, new Date(), { addSuffix: true });
}

/**
 * Format a date with smart formatting (Today, Yesterday, or date)
 */
export function formatSmartDate(date: Date | string): string {
    const d = typeof date === 'string' ? parseISO(date) : date;

    if (isToday(d)) {
        return `Today at ${format(d, 'h:mm a')}`;
    }

    if (isYesterday(d)) {
        return `Yesterday at ${format(d, 'h:mm a')}`;
    }

    return formatDateTime(d);
}

/**
 * Format a month for statements (e.g., "January 2024")
 */
export function formatMonth(date: Date | string): string {
    const d = typeof date === 'string' ? parseISO(date) : date;
    return format(d, 'MMMM yyyy');
}
