import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import ApolloProvider from "./_providers/ApolloProvider";
import "./globals.css";

// Define - type of props
type TProps = Readonly<{
    children: React.ReactNode;
}>;

// Config - meta tag information
export const metadata: Metadata = {
    title: "Nextjs Strapi Blog",
    description: "The journey of a little fox",
};

// Config - font
const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin", "latin-ext", "vietnamese"],
    weight: ["400", "500", "600", "700"],
});

// Layout - root layout
export default function RootLayout({ children }: TProps) {
    return (
        <html lang="en">
            <body className={beVietnamPro.className}>
                <ApolloProvider>
                    <Theme accentColor="gray" panelBackground="solid">
                        {children}
                    </Theme>
                </ApolloProvider>
            </body>
        </html>
    );
}
