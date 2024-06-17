import { ITocs } from "@/app/_components/TableOfContent/TableOfContent";
import { generateIdFromText } from "./genarateIdFromText";

// Utility - render tocs from content rich text blocks
export const renderTocs = (content: any): ITocs => {
    // Check - if no content so return empty array
    if (!content?.length) return [];

    // Handle - get headings from content
    const headings = content.filter((block: { type: string }) => block.type === "heading") || [];

    // Check - if no heading so return empty array
    if (!headings.length) return [];

    // Handle - genarate tocs from heading
    const tocs: ITocs = headings.map((heading: any) => {
        const label = heading.children[0].text;
        const id = generateIdFromText(label);
        return { label, id };
    });

    return tocs;
};
