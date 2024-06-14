import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { ChevronsDown } from "lucide-react";
import React from "react";

// Define - type of props
export type THeroSectionProps = Readonly<{
    Title: string;
    Description: string;
}>;

// Section - hero section
const HeroSection = ({ Title, Description }: THeroSectionProps) => {
    return (
        <Box>
            <Section p="4">
                <Flex direction="column" align="center" justify="center" height="400px" gap="4">
                    {/* Title */}
                    <Heading as="h1" size="8" className="text-center">
                        {Title}
                    </Heading>

                    {/* Component - description */}
                    <Box maxWidth="600px" className="text-center">
                        <Text color="gray">{Description}</Text>
                    </Box>

                    <ChevronsDown  className="mt-4"/>
                </Flex>
            </Section>
        </Box>
    );
};

export default HeroSection;
