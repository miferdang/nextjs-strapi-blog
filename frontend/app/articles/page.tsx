"use client";

import {
    GetArticlesDocument,
    GetArticlesPageDocument,
    GetArticlesPageQuery,
    GetArticlesQuery,
} from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Badge, Box, Card, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cmsImageLoader } from "../_utils/imageLoader";
import { calculateReadingTime } from "../_utils/calculateReadingTime";

// Page - articles
export default function ArticlesPage() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isIntersecting, setIsIntersecting] = useState<any>(null);
    const [visibleArticles, setVisibleArticles] = useState<any>([]);
    const ref = useRef<any>(null);
    const { data: pageData }: { data: GetArticlesPageQuery } = useSuspenseQuery(GetArticlesPageDocument);
    const { data: articlesData, refetch: refetchArticles }: { data: GetArticlesQuery; refetch: any } = useSuspenseQuery(
        GetArticlesDocument,
        {
            variables: { page: currentPage, pageSize: 16 },
        }
    );
    const { title, description } = pageData.articlesPage?.data?.attributes ?? {};
    const { articles } = articlesData ?? {};

    // Observer - check is the load more element intersecting
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });
        observer.observe(ref.current);
        if (currentPage > (articles?.meta?.pagination?.pageCount || 1)) {
            observer.disconnect();
        }
        return () => observer.disconnect();
    }, [isIntersecting]);

    // Set - new articles page fetched to the previous
    useEffect(() => {
        articles?.data?.length && setVisibleArticles([...visibleArticles, ...articles?.data]);
    }, [articles]);

    // Check - if the read more are intersecting and current page is not the last page so fetch new page and set current page
    useEffect(() => {
        if (isIntersecting && currentPage <= (articles?.meta?.pagination?.pageCount || 0)) {
            refetchArticles({ page: currentPage + 1, pageSize: 4 });
            setCurrentPage(currentPage + 1);
        }
    }, [isIntersecting]);

    return (
        <Container size="4" px="4">
            {/* Component - heading */}
            <Flex direction="column" align="center" justify="center" gap="4" py="8">
                {/* Title - title page */}
                <Heading as="h1" size="6" className="text-center">
                    {title}
                </Heading>

                {/* Component - description */}
                <Box maxWidth="600px" className="text-center">
                    <Text color="gray">{description}</Text>
                </Box>
            </Flex>

            {/* List - articles */}
            <Grid columns={{ initial: "1", sm: "2" }} gap="4" width="100%" mb="8">
                {visibleArticles.length
                    ? visibleArticles.map((article: any, idx: number) => (
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
            <Text ref={ref} className="text-center">
                {currentPage <= (articles?.meta?.pagination?.pageCount || 0) ? "Loading..." : null}
            </Text>
        </Container>
    );
}
