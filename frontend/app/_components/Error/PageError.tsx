import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

// Define - type of props
type Props = Readonly<{
    status: number;
    title: string;
    imageUrl?: string;
    extra: React.ReactNode;
}>;

// Component - error display for page
const PageError = ({ status, title, imageUrl, extra }: Props) => {
    return (
        <Box flexBasis="auto" flexGrow="1" flexShrink="1">
            <Container size="4">
                <Flex direction="column" align="center" justify="between" gap="4" my="6">
                    {/* Title  - error's title */}
                    <Heading as="h1">{title}</Heading>

                    {/* Text - error status code */}
                    <Text>Error code: {status}</Text>

                    {/* Image - error image */}
                    {imageUrl ? <Image width={400} height={400} src={imageUrl} alt={title} /> : null}

                    {/* Component - action */}
                    {extra}
                </Flex>
            </Container>
        </Box>
    );
};

export default PageError;
