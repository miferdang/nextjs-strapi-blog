"use client";

import { Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import PageError from "./_components/Error/PageError";

// Page - 404 error
export default function NotFound() {
    const router = useRouter();

    return (
        <Flex flexBasis="auto" flexGrow="1" flexShrink="1" align="center">
            <PageError
                title="Something wen't wrong!"
                status={404}
                extra={
                    <Button variant="outline" highContrast onClick={() => router.push("/")}>
                        Back to Home Page
                    </Button>
                }
            />
        </Flex>
    );
}
