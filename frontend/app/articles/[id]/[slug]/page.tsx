"use client";

import RichText from "@/app/_components/RichText/RichText";
import TableOfContent from "@/app/_components/TableOfContent/TableOfContent";
import { calculateReadingTime } from "@/app/_utils/calculateReadingTime";
import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { GetArticleDocument, GetArticleQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Badge, Box, Container, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";

// Define - type of props
type TProps = Readonly<{
    params: { id: string; slug: string };
}>;

// Page - article
export default function ArticlePage({ params }: TProps) {
    const { data }: { data: GetArticleQuery } = useSuspenseQuery(GetArticleDocument, { variables: { id: params.id } });
    const { title, description, date, content, thumbnail, author, tags, category } =
        data.article?.data?.attributes || {};

    return (
        <Box>
            {/* Container - main */}
            <Container size="2" px="4">
                {/* Component - heading */}
                <Flex direction="column" gap="5" py="8" px="4">
                    {/* Component - title & category & tags */}
                    <Flex direction="column" gap="2">
                        {/* Text - time reading */}
                        <Text color="gray">{calculateReadingTime(content)}</Text>

                        {/* Title - title page */}
                        <Heading as="h1" size="6">
                            {title}
                        </Heading>
                    </Flex>

                    {/* Component - category and tags */}
                    <Flex gap="2">
                        {/* Tag - category */}
                        <Badge variant="outline">{category?.data?.attributes?.title}</Badge>

                        {/* List - tags */}
                        {tags?.data?.length
                            ? tags?.data?.map((tag, idx: number) => (
                                  <Badge key={idx} variant="solid">
                                      {tag.attributes?.label}
                                  </Badge>
                              ))
                            : null}
                    </Flex>

                    {/* Text - description */}
                    <Text>{description}</Text>

                    {/* Component - author and date */}
                    <Flex gap="4">
                        {/* Image - avatar */}
                        <Image
                            width={30}
                            height={30}
                            loader={cmsImageLoader}
                            src={author?.data?.attributes?.avatar?.data?.attributes?.url || ""}
                            alt=""
                        />

                        {/* Component - author name and date */}
                        <Flex gap="2">
                            {/* Text - author name */}
                            <Text className="text-center">
                                <Strong>{author?.data?.attributes?.username}</Strong>
                            </Text>

                            {/* Divider - bullet point */}
                            <Text>•</Text>

                            {/* Text - date */}
                            <Text>{date}</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>

            <Container size="2" px="4" className="relative">
                {/* Components - tocs */}
                <Box className="absolute top-[20px] left-[20px] h-full">
                    <TableOfContent content={content} />
                </Box>

                {/* Component - thumbnail & content */}
                <Flex direction="column" gap="6">
                    {/* List - thumbnail */}
                    <Box className="rounded-xl overflow-hidden">
                        <Image
                            width={400}
                            height={400}
                            loader={cmsImageLoader}
                            src={thumbnail?.data?.attributes?.url || ""}
                            alt={""}
                            className="w-full h-full"
                        />
                    </Box>

                    {/* Text - content */}
                    <Flex direction="column" gap="4">
                        <RichText content={content} />
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
