"use client";

import { SearchArticlesDocument, SearchArticlesQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Badge, Box, Card, Container, Flex, Grid, Heading, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { calculateReadingTime } from "../_utils/calculateReadingTime";
import { cmsImageLoader } from "../_utils/imageLoader";

// Page - search result
export default function SearchPage() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get("keyword");
    const router = useRouter();
    const { data, refetch }: { data: SearchArticlesQuery; refetch: any } = useSuspenseQuery(SearchArticlesDocument, {
        variables: { keyword },
    });

    return (
        <Container size="4" px="4">
            {/* Component - heading */}
            <Flex direction="column" align="center" justify="center" gap="4" py="8">
                {/* Title - title page */}
                <Heading as="h1" size="6" className="text-center">
                    Search Results
                </Heading>

                {/* Component - description */}
                <Box maxWidth="600px" className="text-center">
                    {data.articles?.data.length ? (
                        <Text color="gray">
                            There are {<Strong>{data.articles?.meta?.pagination?.total}</Strong>} article results
                            founded for keyword: <Strong>"{keyword}"</Strong>
                        </Text>
                    ) : (
                        <Text color="gray">
                            There are no article results founded for keyword: <Strong>"{keyword}"</Strong>
                        </Text>
                    )}
                </Box>
            </Flex>

            {/* List - articles */}
            <Grid columns={{ initial: "1", sm: "2" }} gap="4" width="100%" mb="8">
                {data.articles?.data.length
                    ? data.articles?.data.map((article: any, idx: number) => (
                          <Card
                              key={idx}
                              className="text-center"
                              onClick={() => router.push(`/articles/${article.id}/${article.attributes?.slug}`)}
                          >
                              {/* Image - thumbnail */}
                              <Image
                                  width={120}
                                  height={120}
                                  loader={cmsImageLoader}
                                  src={article?.attributes?.thumbnail?.data?.attributes?.url || ""}
                                  alt={article?.attributes?.thumbnail?.data?.attributes?.alternativeText || ""}
                                  className="w-full mb-4"
                              />

                              {/* Component - information       */}
                              <Flex direction="column" gap="2" className="text-left">
                                  <Flex gap="2">
                                      {/* Tag - category */}
                                      <Badge variant="outline" className="w-fit" mb="2">
                                          {article?.attributes?.category?.data?.attributes?.title}
                                      </Badge>

                                      {/* Divider - bullet point */}
                                      <Text>•</Text>

                                      {/* Text - time start article */}
                                      <Text color="gray">{calculateReadingTime(article?.attributes?.content)}</Text>
                                  </Flex>

                                  {/* Title - title */}
                                  <Heading as="h6" size="3" mb="1">
                                      {article?.attributes?.title}
                                  </Heading>

                                  {/* Text - description */}
                                  <Text color="gray">{article?.attributes?.description}</Text>

                                  <Flex gap="2">
                                      {/* Text - author name */}
                                      <Text>{article?.attributes?.author?.data?.attributes?.username}</Text>

                                      {/* Divider - bullet point */}
                                      <Text>•</Text>

                                      {/* Text - time start article */}
                                      <Text color="gray"> {article?.attributes?.date}</Text>
                                  </Flex>
                              </Flex>
                          </Card>
                      ))
                    : null}
            </Grid>

            {/* Text - loading more */}
        </Container>
    );
}
