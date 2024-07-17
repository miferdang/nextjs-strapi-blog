import { calculateReadingTime } from "@/app/_utils/calculateReadingTime";
import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { ComponentBlocksSectionArticles } from "@/graphql/codegen/graphql";
import { Badge, Button, Card, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define - type of props
type Props = Readonly<{
    id: string;
    slug: string;
    thumbnail?: {
        url: string;
        alternativeText: string;
    };
    category: string;
    content: string;
    title: string;
    description: string;
    authorName: string;
    date: string;
}>;

// Component - article card
const ArticleCard = ({ id, slug, thumbnail, category, content, title, description, authorName, date }: Props) => {
    const router = useRouter();

    return (
        <Card key={id} className="text-center" onClick={() => router.push(`/articles/${id}/${slug}`)}>
            {/* Image - thumbnail */}
            <Image
                width={120}
                height={120}
                loader={cmsImageLoader}
                src={thumbnail?.url || ""}
                alt={thumbnail?.alternativeText || ""}
                className="w-full mb-4"
            />

            {/* Component - information       */}
            <Flex direction="column" gap="2" className="text-left">
                <Flex gap="2">
                    {/* Tag - category */}
                    <Badge variant="outline" className="w-fit" mb="2">
                        {category}
                    </Badge>

                    {/* Divider - bullet point */}
                    <Text>•</Text>

                    {/* Text - time start article */}
                    <Text color="gray">{calculateReadingTime(content)}</Text>
                </Flex>

                {/* Title - title */}
                <Heading as="h6" size="3" mb="1">
                    {title}
                </Heading>

                {/* Text - description */}
                <Text color="gray">{description}</Text>

                <Flex gap="2">
                    {/* Text - author name */}
                    <Text>{authorName}</Text>

                    {/* Divider - bullet point */}
                    <Text>•</Text>

                    {/* Text - time start article */}
                    <Text color="gray"> {date}</Text>
                </Flex>
            </Flex>
        </Card>
    );
};

export default ArticleCard;
