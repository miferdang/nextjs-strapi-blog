"use client";

import { GetAboutMePageDocument, GetAboutMePageQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import RichText from "../_components/RichText/RichText";

// Page - contact me
const AboutMePage = () => {
    const { data: pageData }: { data: GetAboutMePageQuery } = useSuspenseQuery(GetAboutMePageDocument);
    const { title, description, content } = pageData.aboutMePage?.data?.attributes ?? {};

    return (
        <Container size="4" px="4">
            {/* Component */}
            <Flex direction="column" align="center" justify="center" gap="6" py="8">
                {/* Component - header */}
                <Flex direction="column" gap="4">
                    {/* Title - title page */}
                    <Heading as="h1" size="6" className="text-center">
                        {title}
                    </Heading>

                    {/* Component - description */}
                    <Box maxWidth="600px" className="text-center">
                        <Text color="gray">{description}</Text>
                    </Box>
                </Flex>

                {/* Text - content */}
                <Flex direction="column" gap="4">
                    <RichText content={content} />
                </Flex>
            </Flex>
        </Container>
    );
};

export default AboutMePage;
