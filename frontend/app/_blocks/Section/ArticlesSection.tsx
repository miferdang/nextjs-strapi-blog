import ArticleCard from "@/app/_components/Card/ArticleCard";
import { calculateReadingTime } from "@/app/_utils/calculateReadingTime";
import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { ComponentBlocksSectionArticles } from "@/graphql/codegen/graphql";
import { Badge, Button, Card, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define - type of props
export type TArticlesSectionProps = Readonly<
    ComponentBlocksSectionArticles & {
        className: string;
    }
>;

// Section - articles section
const ArticlesSection = ({ className = "bg-white", title, articles }: TArticlesSectionProps) => {
    const router = useRouter();

    return (
        <Section className={className} size="4">
            <Container size="4">
                <Flex direction="column" gap="8" align="center" px="4" >
                    {/* Title */}
                    <Heading as="h2" size="6" className="text-center">
                        {title}
                    </Heading>

                    {/* List - articles */}
                    <Grid columns={{ initial: "1", sm: "2" }}  gap="4" width="100%">
                        {articles?.data?.length
                            ? articles?.data?.map((article, idx) => (
                                
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
                                              <Text color="gray">
                                                  {calculateReadingTime(article?.attributes?.content)}
                                              </Text>
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

                    {/* Button - navigate to articles Page */}
                    <Button variant="outline" highContrast onClick={() => router.push("/articles")}>
                        See All <ArrowRight />
                    </Button>
                </Flex>
            </Container>
        </Section>
    );
};

export default ArticlesSection;
