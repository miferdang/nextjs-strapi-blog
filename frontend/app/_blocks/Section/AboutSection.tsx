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
                <Flex align="start" gap="6" px="4" className="md:flex-row flex-col">
                    {/* Component - title & text */}
                    <Flex direction="column" gap="4" className="xl:basis-[76%] lg:basis-[68%] basis-[50%] md:order-1 order-2">
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
                    <Box className="rounded-xl overflow-hidden xl:basis-[24%] lg:basis-[32%] basis-[50%] md:order-2 order-1 w-full">
                        <Image
                            width={120}
                            height={120}
                            loader={cmsImageLoader}
                            src={media.data?.attributes?.url || ""}
                            alt={media.data?.attributes?.alternativeText || ""}
                            className="w-full"
                        />
                    </Box>
                </Flex>
            </Container>
        </Section>
    );
};

export default AboutSection;
