import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { Box, Button, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import { ChevronsDown, MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// Define - type of props
export type TAboutSectionProps = Readonly<{
    Title: string;
    Content: string;
    MediaFirst: boolean;
    Media: {
        url: string;
        alternativeText: string;
    };
    Readmore: {
        Label: string;
        Url: string;
    };
}>;

// Section - hero section
const AboutSection = ({ Title, Content, MediaFirst = false, Media, Readmore }: TAboutSectionProps) => {
    const router = useRouter();

    return (
        <Section className="bg-gray-200">
            <Container>
                <Grid columns="68% 32%" gap="6">
                    {/* Component - title & text */}
                    <Flex direction="column" p="4" gap="4">
                        {/* Title */}
                        <Heading as="h1" size="4">
                            {Title}
                        </Heading>

                        {/* Component - description */}
                        <Flex className="text-justify" gap="4">
                            {/* Text - content */}
                            <Text color="gray" as="div" className="whitespace-preline">
                                {Content}
                            </Text>

                            {/* Button - read more */}
                            <Button onClick={() => router.push(Readmore.Url)} variant="soft" highContrast>
                                {Readmore.Label} <MoveRight />
                            </Button>
                        </Flex>
                    </Flex>

                    {/* Component - logo */}
                    <Box p="4">
                        <Box className="rounded-xl overflow-hidden">
                            <Image
                                width={120}
                                height={120}
                                loader={cmsImageLoader}
                                src={Media.url || ""}
                                alt={Media.alternativeText || ""}
                                className="w-full"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </Section>
    );
};

export default AboutSection;
