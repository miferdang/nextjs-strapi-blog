"use client";

import { GetContactPageDocument, GetContactPageQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import ContactForm from "../_components/Form/ContactForm";

// Page - contact me
const ContactPage = () => {
    const { data: pageData }: { data: GetContactPageQuery } = useSuspenseQuery(GetContactPageDocument);
    const { title, description } = pageData.contactPage?.data?.attributes ?? {};

    return (
        <Container size="4" px="4">
            {/* Component - heading */}
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

                {/* Component - contact form */}
                <ContactForm />
            </Flex>
        </Container>
    );
};

export default ContactPage;
