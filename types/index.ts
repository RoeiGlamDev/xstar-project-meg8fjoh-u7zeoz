export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
}

/
 * Represents a customer review for CleanSSR.
 * @property {string} reviewerName - The name of the reviewer.
 * @property {number} rating - The rating given by the reviewer (1-5).
 * @property {string} comment - The review comment from the customer.
 */
export interface Review {
    reviewerName: string;
    rating: number;
    comment: string;
}

/
 * Represents the business information for CleanSSR.
 * @property {string} name - The name of the business.
 * @property {string} tagline - A brief tagline describing the business.
 * @property {string} contactEmail - The contact email for inquiries.
 * @property {string} phoneNumber - The contact phone number for customer service.
 * @property {string} address - The physical address of CleanSSR.
 */
export interface BusinessInfo {
    name: "CleanSSR";
    tagline: string;
    contactEmail: string;
    phoneNumber: string;
    address: string;
}

/
 * Represents a technology service offered by CleanSSR.
 * @property {Service[]} services - An array of services provided by CleanSSR.
 * @property {Review[]} reviews - An array of customer reviews for CleanSSR.
 * @property {BusinessInfo} businessInfo - Information about the CleanSSR business.
 */
export interface CleanSSRData {
    services: Service[];
    reviews: Review[];
    businessInfo: BusinessInfo;
}

/
 * Function to get the CleanSSR data.
 * @returns {CleanSSRData} - The data related to CleanSSR services, reviews, and business information.
 */
export const getCleanSSRData = (): CleanSSRData => {
    return {
        services: [
            {
                id: 1,
                name: "Deep Cleaning",
                description: "Comprehensive cleaning service for homes and offices.",
                price: 150,
            },
            {
                id: 2,
                name: "Regular Maintenance",
                description: "Scheduled cleaning service to maintain cleanliness.",
                price: 80,
            },
            {
                id: 3,
                name: "Tech Equipment Sanitization",
                description: "Specialized cleaning for electronic devices and office equipment.",
                price: 100,
            },
        ],
        reviews: [
            {
                reviewerName: "Alice Johnson",
                rating: 5,
                comment: "Exceptional service! My office has never looked better.",
            },
            {
                reviewerName: "Mark Smith",
                rating: 4,
                comment: "Very satisfied with the results, highly recommend CleanSSR!",
            },
            {
                reviewerName: "Sarah Lee",
                rating: 5,
                comment: "Professional and thorough cleaning. A great experience!",
            },
        ],
        businessInfo: {
            name: "CleanSSR",
            tagline: "Innovative Cleaning Solutions for a Better Tomorrow",
            contactEmail: "info@cleanSSR.com",
            phoneNumber: "+1 (555) 123-4567",
            address: "123 Clean St, Tech City, CA 90210",
        },
    };
};