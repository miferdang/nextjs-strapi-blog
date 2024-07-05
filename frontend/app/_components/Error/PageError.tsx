import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

// Define - type of props
type TProps = Readonly<{
    status: number;
    title: string;
    imageUrl?: string;
    extra: React.ReactNode;
}>;

// Component - error display for page
const PageError = ({ status, title, imageUrl, extra }: TProps) => {
    return (
        <Flex direction="column" align="center" justify="center" gap="4" width="100%" height="100%">
            {/* Title  - error's title */}
            <Heading as="h1">{title}</Heading>

            {/* Text - error status code */}
            <Text>Error code: {status}</Text>

            {/* Image - error image */}
            {imageUrl ? <Image width={400} height={400} src={imageUrl} alt={title} /> : null}

            {/* Component - action */}
            {extra}
        </Flex>
    );
};

export default PageError;
