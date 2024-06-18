import { generateIdFromText } from "@/app/_utils/genarateIdFromText";
import { Heading } from "@radix-ui/themes";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// Component - rich text
const RichText = ({ content }: any) => {
    return content ? (
        <BlocksRenderer
            content={content}
            blocks={{
                heading: ({ children, level }) => {
                    const heading = Array.isArray(children) ? children[0].props?.text : "";
                    const id = generateIdFromText(String(heading));
                    return (
                        <Heading id={id} as={`h${level}`}>
                            {children}
                        </Heading>
                    );
                },
            }}
        />
    ) : null;
};

export default RichText;
