import { Flex, Heading, Text } from "@radix-ui/themes";

// Define - type of tocs
type TProps = {
    name?: string;
    content?: string;
    createdAt?: string;
};

// Component - comment
const Comment = ({ name, content, createdAt }: TProps) => {
    return (
        <Flex direction="column" gap="3">
            {/* Component - author name & create date */}
            <Flex direction="column" gap="1">
                {/* Title - author comment's name */}
                <Heading as="h6" size="3">
                    {name}
                </Heading>

                {/* Text - date comment */}
                <Text color="gray" size="2">
                    {createdAt}
                </Text>
            </Flex>

            {/* Text - comment */}
            <Text>{content}</Text>
        </Flex>
    );
};

export default Comment;
