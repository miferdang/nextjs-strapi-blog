"use client";
import { Flex, Heading, Link } from "@radix-ui/themes";
import { renderTocs } from "@/app/_utils/renderTocs";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

// Define - type of tocs
export type ITocs = {
    id?: string;
    label?: string;
}[];

// Define - type of props
type TProps = Readonly<{
    tocs: { id?: string; label?: string }[];
    currentTocId: string;
    navigateToTocId: (tocId: string) => void;
}>;

// Component - table of content
const TableOfContent = ({ content }: any) => {
    const [currentTocId, setCurrentTocId] = useState<string>(window.location.hash.substring(1));
    const pathname = usePathname();
    const router = useRouter();

    // Handle - navigate to tocId
    const navigateToTocId = useCallback(
        (tocId: string) => {
            router.push(`${pathname}#${tocId}`);
            setCurrentTocId(tocId);
        },
        [router, pathname]
    );

    // Define - get tocs from content
    const tocs = renderTocs(content);

    return (
        <Flex direction="column" className="sticky top-[100px] max-w-[320px]" gap="4">
            {/* Title  */}
            <Heading as="h5" size="4" highContrast>
                Table of contents
            </Heading>

            {/* List - tocs */}
            {tocs?.map((toc: any, idx: number) => (
                <Link
                    key={idx}
                    color="gray"
                    highContrast={currentTocId === toc?.id}
                    onClick={() => navigateToTocId(toc?.id)}
                >
                    • {toc?.label}
                </Link>
            ))}
        </Flex>
    );
};

export default TableOfContent;
