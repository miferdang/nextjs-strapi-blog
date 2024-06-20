"use client";

import { GetHomePageDocument, GetHomePageQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Flex } from "@radix-ui/themes";
import { getBlock } from "./_blocks/blocks";

// Page - home page
export default function HomePage() {
    const { data }: { data: GetHomePageQuery } = useSuspenseQuery(GetHomePageDocument);
    const { blocks } = data.homePage?.data?.attributes ?? {};

    return (
        <Flex direction="column">
            {blocks?.map((block, idx: number) => {
                return block ? getBlock(block, idx) : null;
            })}
        </Flex>
    );
}
