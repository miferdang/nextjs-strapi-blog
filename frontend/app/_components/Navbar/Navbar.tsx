import { flattenResponse } from "@/app/_utils/flattenResponse";
import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { GetNavigationDocument, GetNavigationQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Box, Button, Container, Flex, Link, TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

// Component - navbar
const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { data }: { data: GetNavigationQuery } = useSuspenseQuery(GetNavigationDocument);
    const { logo, menus } = data.navigation?.data?.attributes ?? {};

    return (
        <Flex flexBasis="auto" flexGrow="0" flexShrink="1" className="border-b border-gray-300">
            <Container size="4">
                <Flex align="center" justify="between">
                    {/* Component - left side */}
                    <Flex gap="4">
                        {/* Component - logo */}
                        <Box p="4">
                            <Image
                                width={40}
                                height={40}
                                loader={cmsImageLoader}
                                src={logo?.data?.attributes?.url || ""}
                                alt={logo?.data?.attributes?.alternativeText || ""}
                            />
                        </Box>

                        {/* Component - menus */}
                        <Flex align="center" gap="6" p="4">
                            {menus?.length
                                ? menus.map((menu, idx: number) => {
                                      return (
                                          <Link
                                              key={idx}
                                              href={menu?.url || ""}
                                              color="gray"
                                              highContrast={pathname === menu?.url ? true : false}
                                          >
                                              {menu?.label}
                                          </Link>
                                      );
                                  })
                                : null}
                        </Flex>
                    </Flex>

                    {/* Component - right side */}
                    <Flex align="center" gap="4" py="2" px="4">
                        {/* Component - search box */}
                        <TextField.Root placeholder="Search the content…">
                            <TextField.Slot>
                                <Search size={16} />
                            </TextField.Slot>
                        </TextField.Root>

                        {/* Button - contact me */}
                        <Button variant="outline" highContrast onClick={() => router.push("/contact-me")}>
                            Contact Me
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};

export default Navbar;
