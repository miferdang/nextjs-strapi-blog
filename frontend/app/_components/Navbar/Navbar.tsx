import { cmsImageLoader } from "@/app/_utils/imageLoader";
import { GetNavigationDocument, GetNavigationQuery } from "@/graphql/codegen/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { Box, Button, Card, Flex, Link, TextField } from "@radix-ui/themes";
import { MenuIcon, Search } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

// Component - navbar
const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [keyword, setKeyword] = useState("");
    const { data }: { data: GetNavigationQuery } = useSuspenseQuery(GetNavigationDocument);
    const { logo, menus } = data.navigation?.data?.attributes ?? {};

    // Handle - enter search by pressing enter key down
    const onKeyDown = useCallback(
        (e: any) => {
            if (e.key === "Enter" && keyword) {
                router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
            }
        },
        [keyword]
    );

    // Handle - change input search
    const onSearchChange = useCallback((e: any) => {
        setKeyword(e.target.value);
    }, []);

    return (
        <Flex align="center" justify="between" p="4">
            {/* Component - left side */}
            <Flex gap={{ sm: "6", initial: "4" }} align="center">
                {/* Component - logo */}
                <Box onClick={() => router.push("/")}>
                    <Image
                        width={40}
                        height={40}
                        loader={cmsImageLoader}
                        src={logo?.data?.attributes?.url || ""}
                        alt={logo?.data?.attributes?.alternativeText || ""}
                    />
                </Box>

                {/* Component - menus */}
                <Flex align="center" gap="6" className="md:flex hidden">
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
            <Flex align="center" gap="4">
                {/* Component - search box */}
                <TextField.Root
                    placeholder="Search articles…"
                    value={keyword}
                    onChange={onSearchChange}
                    onKeyDown={onKeyDown}
                >
                    <TextField.Slot>
                        <Search size={16} />
                    </TextField.Slot>
                </TextField.Root>

                {/* Button - contact me */}
                <Button
                    variant="outline"
                    className="md:block hidden"
                    highContrast
                    onClick={() => router.push("/contact")}
                >
                    Contact Me
                </Button>

                {/* Component - dropdown menus */}
                <Dropdown
                    position="right"
                    trigger={<MenuIcon size={20} />}
                    content={
                        menus?.length
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
                            : null
                    }
                />
            </Flex>
        </Flex>
    );
};

export default Navbar;
