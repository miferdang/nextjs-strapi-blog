// Utility - generate id from text
export const generateIdFromText = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
};
