"use client";

import { Container, Flex } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import Footer from "./_components/Footer/Footer";
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
            <Flex flexGrow="0" className="border-b border-gray-300">
                <Container size="4">
                    <Navbar />
                </Container>
            </Flex>

            {/* Page - dynamic */}
            <Flex flexGrow="1">{children}</Flex>

            {/* Component - Footer */}
            <Flex flexGrow="0" className="border-t border-gray-300">
                <Container size="4" p="4">
                    <Footer />
                </Container>
            </Flex>
        </Flex>
    );
}
