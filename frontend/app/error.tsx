"use client";

import { Button } from "@radix-ui/themes";
import { useEffect } from "react";
import PageError from "./_components/Error/PageError";
import { ArrowLeftIcon } from "lucide-react";

// Page - 500 error
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    // Initial loading - log the error to an error reporting service
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <PageError
            title="Something went wrong!"
            status={500}
            extra={
                <Button variant="outline" highContrast onClick={reset}>
                    <ArrowLeftIcon />
                    Back to Home Page
                </Button>
            }
        />
    );
}
