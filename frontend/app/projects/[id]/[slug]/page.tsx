"use client";

import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { GetProjectDocument, GetProjectQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Box, Container, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";

// Define - type of props
type TProps = Readonly<{
    params: { id: string; slug: string };
}>;

// Page - project
export default function ProjectPage({ params }: TProps) {
    const { data }: { data: GetProjectQuery } = useSuspenseQuery(GetProjectDocument, { variables: { id: params.id } });
    const { name, description, startedAt, finishedAt, content, media } = data.project?.data?.attributes || {};

    return (
        <Container size="4" px="4" py="4">
            {/* Component - heading */}
            <Flex direction="column" gap="4" py="4" px="4">
                {/* Title - title page */}
                <Heading as="h1" size="6" className="text-center">
                    {name}
                </Heading>

                {/* Component - description */}
                <Box maxWidth="600px" className="text-center" mx="auto">
                    <Text color="gray">{description}</Text>
                </Box>

                {/* Text - time */}
                <Text className="text-center">
                    From <Strong>{startedAt}</Strong> to <Strong> {finishedAt}</Strong>
                </Text>
            </Flex>

            {/* Component - media & content */}
            <Flex direction="column" gap="6">
                {/* List - media */}
                {media?.data.length
                    ? media.data.map((item, idx: number) => (
                          <Box className="rounded-xl overflow-hidden">
                              <Image
                                  key={idx}
                                  width={400}
                                  height={400}
                                  loader={cmsImageLoader}
                                  src={item.attributes?.url || ""}
                                  alt={""}
                                  className="w-full h-full"
                              />
                          </Box>
                      ))
                    : null}
            </Flex>
        </Container>
    );
}
