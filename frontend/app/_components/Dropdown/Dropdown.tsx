import { Box, Button, Flex } from "@radix-ui/themes";
import { ReactNode, useState } from "react";

// Type - props
type TProps = {
    trigger: ReactNode;
    content: ReactNode;
    position: "left" | "right";
};

// Component - dropdown
const Dropdown = ({ trigger, content, position = "left" }: TProps) => {
    const [isShowContent, setIsShowContent] = useState<boolean>(false);

    return (
        <Box className="relative">
            {/* Button - trigger */}
            <Button variant="outline" className="md:hidden block px-2" onClick={() => setIsShowContent(!isShowContent)}>
                {trigger}
            </Button>

            {/* Component - content */}
            {isShowContent ? (
                <Flex
                    direction="column"
                    gap="6"
                    className={`md:hidden flex bg-white absolute mt-1 ${position}-0 border rounded-md shadow z-50`}
                    p="4"
                    width="160px"
                >
                    {content}
                </Flex>
            ) : null}
        </Box>
    );
};

export default Dropdown;
