import { cn } from './helpers'; // Assuming cn function is defined in helpers

// Define types for CleanSSR
export interface Review {
    id: number;
    name: string;
    comment: string;
    rating: number; // Scale of 1-5
}

export interface Service {
    id: number;
    title: string;
    description: string;
    price: string; // Use string for currency formatting
}

// Sample data for reviews
const reviews: Review[] = [
    { id: 1, name: 'Alice', comment: 'CleanSSR transformed my workspace!', rating: 5 },
    { id: 2, name: 'Bob', comment: 'Efficient and professional service.', rating: 4 },
    { id: 3, name: 'Charlie', comment: 'Highly recommend CleanSSR for tech companies!', rating: 5 },
];

// Sample data for services offered by CleanSSR
const services: Service[] = [
    { id: 1, title: 'Office Cleaning', description: 'Comprehensive office cleaning services tailored for tech companies.', price: '$200' },
    { id: 2, title: 'Data Center Cleaning', description: 'Specialized cleaning for sensitive electronic environments.', price: '$300' },
    { id: 3, title: 'Post-Event Cleaning', description: 'Efficient clean-up after tech events and conferences.', price: '$250' },
];

/
 * Formats a review for display.
 * @param review - The review object to format.
 * @returns A formatted string of the review.
 */
export function formatReview(review: Review): string {
    return ${review.name} (${review.rating}/5): "${review.comment}";
}

/
 * Formats a service for display.
 * @param service - The service object to format.
 * @returns A formatted string of the service.
 */
export function formatService(service: Service): string {
    return ${service.title}: ${service.description} - Price: ${service.price};
}

// Exporting the data and utility functions for use in other modules
export { reviews, services, formatReview, formatService };