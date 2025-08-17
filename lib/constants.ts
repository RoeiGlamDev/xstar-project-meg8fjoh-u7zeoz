export const BRAND_NAME = "CleanSSR";
export const PRIMARY_COLOR = "#800080"; // Purple
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration settings for the CleanSSR application.
 * This includes brand-specific constants and configurations
 * that apply to the technology cleaning service offered by CleanSSR.
 */
export const CONFIG = {
    siteTitle: ${BRAND_NAME} - Your Technology Cleaning Solution,
    tagline: "Experience the Future of Clean with CleanSSR",
    description: "At CleanSSR, we specialize in providing high-quality cleaning services tailored for technology environments. Our team of experts ensures that your devices and workspaces are impeccably clean, promoting productivity and longevity.",
    contactEmail: "contact@cleanSSR.com",
    phoneNumber: "+1 (800) 555-0199",
    reviews: [
        {
            id: 1,
            reviewer: "Tech Innovators Inc.",
            rating: 5,
            comment: "CleanSSR transformed our office space! Highly recommend their services."
        },
        {
            id: 2,
            reviewer: "Gadget Gurus",
            rating: 4,
            comment: "Professional and thorough, our tech devices have never looked better."
        },
        {
            id: 3,
            reviewer: "Startup Solutions",
            rating: 5,
            comment: "Efficient and effective! CleanSSR is our go-to for cleaning needs."
        }
    ]
};

/
 * Interface for Review object
 */
export interface Review {
    id: number;
    reviewer: string;
    rating: number;
    comment: string;
}

/
 * Exporting the types for external usage
 */
export type { Review };