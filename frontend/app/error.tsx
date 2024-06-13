"use client";

import { Box, Button } from "@radix-ui/themes";
import PageError from "./_components/Error/PageError";
import { useEffect } from "react";

// Page - 500 error
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    // Initial loading - log the error to an error reporting service
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Box>
            <PageError
                title="Something went wrong!"
                status={500}
                imageUrl=""
                extra={
                    <Button variant="outline" highContrast onClick={reset}>
                        Back to Home Page
                    </Button>
                }
            />
        </Box>
    );
}
