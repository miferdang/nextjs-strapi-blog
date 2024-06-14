"use client";

import { GetHomePageDocument, GetHomePageQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Flex } from "@radix-ui/themes";
import { IBlock, getBlock } from "./_blocks/blocks";
import { flattenResponse } from "./_utils/flattenResponse";

// Page - home page
export default function HomePage() {
    const { data }: { data: GetHomePageQuery } = useSuspenseQuery(GetHomePageDocument);
    const { homePage } = flattenResponse(data);

    return (
        <Flex direction="column">
            {homePage.Blocks?.map((block: IBlock) => {
                return getBlock(block);
            })}
        </Flex>
    );
}
