import { ComponentBlocksSectionHero } from "@/graphql/codegen/graphql";
import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { ChevronsDown } from "lucide-react";
import React from "react";

// Define - type of props
export type THeroSectionProps = Readonly<
    ComponentBlocksSectionHero & {
        className: string;
    }
>;

// Section - hero section
const HeroSection = ({ className = "bg-white", title, description }: THeroSectionProps) => {
    return (
        <Section className={className} p="4" size="2">
            <Container size="4">
                <Flex direction="column" align="center" justify="center" height="360px" gap="4">
                    {/* Title */}
                    <Heading as="h1" size="8" className="text-center">
                        {title}
                    </Heading>

                    {/* Component - description */}
                    <Box maxWidth="600px" className="text-center">
                        <Text color="gray">{description}</Text>
                    </Box>

                    {/* Icon - move down */}
                    <ChevronsDown className="mt-4" />
                </Flex>
            </Container>
        </Section>
    );
};

export default HeroSection;
