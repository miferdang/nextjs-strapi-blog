"use client";

import { Flex } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import PageLoading from "./_components/Loading/PageLoading";
import Navbar from "./_components/Navbar/Navbar";

// Define - type of props
type TProps = Readonly<{
    children: React.ReactNode;
}>;

// Template - root
export default function RootTemplate({ children }: TProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Initial loading
    useEffect(() => {
        setIsLoading(false);
    }, []);

    return isLoading ? (
        <PageLoading />
    ) : (
        <Flex height="100vh" direction="column">
            {/* Component - Navbar */}
            <Navbar />

            {/* Page - dynamic */}
            {children}
        </Flex>
    );
}
