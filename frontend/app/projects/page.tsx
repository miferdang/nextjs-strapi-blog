"use client";

import {
    GetProjectsDocument,
    GetProjectsPageDocument,
    GetProjectsPageQuery,
    GetProjectsQuery,
} from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Box, Card, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cmsImageLoader } from "../_utils/imageLoader";

// Page - projects
export default function ProjectsPage() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isIntersecting, setIsIntersecting] = useState<any>(null);
    const [visibleProjects, setVisibleProjects] = useState<any>([]);
    const ref = useRef<any>(null);
    const { data: pageData }: { data: GetProjectsPageQuery } = useSuspenseQuery(GetProjectsPageDocument);
    const { data: projectsData, refetch: refetchProjects }: { data: GetProjectsQuery; refetch: any } = useSuspenseQuery(
        GetProjectsDocument,
        {
            variables: { page: currentPage, pageSize: 16 },
        }
    );
    const { title, description } = pageData.projectsPage?.data?.attributes ?? {};
    const { projects } = projectsData ?? {};

    // Observer - check is the load more element intersecting
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });
        observer.observe(ref.current);
        if (currentPage > (projects?.meta?.pagination?.pageCount || 1)) {
            observer.disconnect();
        }
        return () => observer.disconnect();
    }, [isIntersecting]);

    // Set - new projects page fetched to the previous
    useEffect(() => {
        projects?.data?.length && setVisibleProjects([...visibleProjects, ...projects?.data]);
    }, [projects]);

    // Check - if the read more are intersecting and current page is not the last page so fetch new page and set current page
    useEffect(() => {
        if (isIntersecting && currentPage <= (projects?.meta?.pagination?.pageCount || 0)) {
            refetchProjects({ page: currentPage + 1, pageSize: 4 });
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

            {/* List - projects */}
            <Grid columns="4" gap="4" width="100%" mb="8">
                {visibleProjects.length
                    ? visibleProjects.map((project: any, idx: number) => (
                          <Card
                              key={idx}
                              className="text-center"
                              onClick={() => router.push(`/projects/${project.id}/${project.attributes?.slug}`)}
                          >
                              <Image
                                  width={120}
                                  height={120}
                                  loader={cmsImageLoader}
                                  src={project.attributes?.thumbnail?.data?.attributes?.url || ""}
                                  alt={project.attributes?.name || ""}
                                  className="w-full mb-4"
                              />
                              {/* Title - project name */}
                              <Heading as="h6" size="3" mb="1">
                                  {project.attributes?.name}
                              </Heading>

                              {/* Text - time start project */}
                              <Text color="gray">Date start: {project.attributes?.startedAt}</Text>
                          </Card>
                      ))
                    : null}
            </Grid>

            {/* Text - loading more */}
            <Text ref={ref} className="text-center">
                {currentPage <= (projects?.meta?.pagination?.pageCount || 0) ? "Loading..." : null}
            </Text>
        </Container>
    );
}
