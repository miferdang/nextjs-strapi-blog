import { Flex, Spinner } from "@radix-ui/themes";
import React from "react";

// Component - page loading
const PageLoading = () => {
    return (
        <Flex height="100vh" align="center" justify="center">
            <Spinner size="3" />
        </Flex>
    );
};

export default PageLoading;
