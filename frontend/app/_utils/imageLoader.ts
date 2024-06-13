import { ImageLoaderProps } from "next/image";

// Utility - nextjs image loader in cms server
export const cmsImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${process.env.NEXT_PUBLIC_CMS_URL}${src}?w=${width}&q=${quality || 75}`;
};
