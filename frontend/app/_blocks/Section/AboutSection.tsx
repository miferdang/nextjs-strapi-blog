import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { ComponentBlocksSectionAbout } from "@/graphql/codegen/graphql";
import { Box, Button, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define - type of props
export type TAboutSectionProps = Readonly<
    ComponentBlocksSectionAbout & {
        className: string;
    }
>;

// Section - hero section
const AboutSection = ({ className, title, content, media, action }: TAboutSectionProps) => {
    const router = useRouter();
    const formattedText = content.replace(/\n/g, "<br />");

    return (
        <Section className={className} size="2">
            <Container size="4">
                <Grid columns="72% 28%" gap="6">
                    {/* Component - title & text */}
                    <Flex direction="column" p="4" gap="4">
                        {/* Title */}
                        <Heading as="h2" size="4">
                            {title}
                        </Heading>

                        {/* Component - description */}
                        <Flex direction="column" className="text-justify" gap="4">
                            {/* Text - content */}
                            <Text color="gray" dangerouslySetInnerHTML={{ __html: formattedText }} />

                            {/* Button - read more */}
                            <Button
                                onClick={() => router.push(action.url)}
                                variant="outline"
                                highContrast
                                style={{ width: "fit-content" }}
                            >
                                {action.label} <ArrowRight />
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
                                src={media.data?.attributes?.url || ""}
                                alt={media.data?.attributes?.alternativeText || ""}
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
