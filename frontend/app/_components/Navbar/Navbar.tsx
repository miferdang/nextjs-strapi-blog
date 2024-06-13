import { makeClient } from "@/apollo/client.apollo";
import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { GetNavigationDocument, GetNavigationQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Box, Button, Flex, Link, TextField } from "@radix-ui/themes";
import { useAtom } from "jotai";
import { atomsWithQuery } from "jotai-apollo";
import { Search } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

// Jotai - navigation atom
const [navigationAtom] = atomsWithQuery<{ navigation: GetNavigationQuery["navigation"] }>(
    () => ({
        query: GetNavigationDocument,
    }),
    () => makeClient()
);

// Component - navbar
const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [data] = useAtom(navigationAtom);

    return (
        <Flex align="center" justify="between" flexBasis="auto" flexGrow="0" flexShrink="1">
            {/* Component - left side */}
            <Flex gap="4">
                {/* Component - logo */}
                <Box py="2" px="4">
                    <Image
                        width={40}
                        height={40}
                        loader={cmsImageLoader}
                        src={data.navigation?.data?.attributes?.Logo.data?.attributes?.url || ""}
                        alt={data.navigation?.data?.attributes?.Logo.data?.attributes?.alternativeText || ""}
                    />
                </Box>

                {/* Component - menus */}
                <Flex align="center" gap="6" py="2" px="4">
                    {data.navigation?.data?.attributes?.Menus?.length
                        ? data.navigation?.data?.attributes?.Menus.map((menu: any, idx: number) => {
                              return (
                                  <Link
                                      key={idx}
                                      href={menu?.Url || ""}
                                      color="gray"
                                      highContrast={pathname === menu?.Url ? true : false}
                                  >
                                      {menu?.Label}
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
    );
};

export default Navbar;
