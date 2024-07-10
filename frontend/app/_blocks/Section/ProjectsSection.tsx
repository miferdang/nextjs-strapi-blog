import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { ComponentBlocksSectionProjects } from "@/graphql/codegen/graphql";
import { Box, Button, Card, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define - type of props
export type TProjectsSectionProps = Readonly<
    ComponentBlocksSectionProjects & {
        className: string;
    }
>;

// Section - projects section
const ProjectsSection = ({ className = "bg-white", title, projects }: TProjectsSectionProps) => {
    const router = useRouter();

    return (
        <Section className={className} size="4">
            <Container size="4">
                <Flex direction="column" gap="8" align="center" px="4">
                    {/* Title */}
                    <Heading as="h2" size="6" className="text-center">
                        {title}
                    </Heading>

                    {/* List - projects */}
                    <Grid columns={{ initial: "2", md: "4" }} gap="4" width="100%">
                        {projects?.data?.length
                            ? projects?.data?.map((project, idx) => (
                                  <Card
                                      key={idx}
                                      className="text-center"
                                      onClick={() => router.push(`/projects/${project.id}/${project.attributes?.slug}`)}
                                  >
                                      <Image
                                          width={120}
                                          height={120}
                                          loader={cmsImageLoader}
                                          src={project?.attributes?.thumbnail?.data?.attributes?.url || ""}
                                          alt={project?.attributes?.thumbnail?.data?.attributes?.alternativeText || ""}
                                          className="w-full mb-4"
                                      />
                                      {/* Title - project name */}
                                      <Heading as="h6" size="3" mb="1">
                                          {project?.attributes?.name}
                                      </Heading>

                                      {/* Text - time start project */}
                                      <Text color="gray">Date start: {project?.attributes?.startedAt}</Text>
                                  </Card>
                              ))
                            : null}
                    </Grid>

                    {/* Button - navigate to Projects Page */}
                    <Button variant="outline" highContrast onClick={() => router.push("/projects")}>
                        See All <ArrowRight />
                    </Button>
                </Flex>
            </Container>
        </Section>
    );
};

export default ProjectsSection;
