"use client";

import { Box, Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import PageError from "./_components/Error/PageError";
import { ArrowLeftIcon } from "lucide-react";

// Page - 404 error
export default function NotFound() {
    const router = useRouter();

    return (
        <PageError
            title="Something wen't wrong!"
            status={404}
            extra={
                <Button variant="outline" highContrast onClick={() => router.push("/")}>
                    <ArrowLeftIcon />
                    Back to Home Page
                </Button>
            }
        />
    );
}
