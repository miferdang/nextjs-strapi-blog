import HeroSection, { THeroSectionProps } from "./Section/HeroSection";
import AboutSection, { TAboutSectionProps } from "./Section/AboutSection";
import ProjectsSection, { TProjectsSectionProps } from "./Section/ProjectsSection";
import ArticlesSection, { TArticlesSectionProps } from "./Section/ArticlesSection";

// Define - type of Block
export type IBlock = Omit<
    | THeroSectionProps
    | TAboutSectionProps
    | TProjectsSectionProps
    | TArticlesSectionProps
    | { __typename?: "Error" | undefined },
    "id" | "title"
>;

// Function - handle get block
export const getBlock = ({ __typename, ...props }: IBlock, idx: number) => {
    let Block: any;

    switch (__typename) {
        case "ComponentBlocksSectionHero":
            Block = HeroSection;
            break;
        case "ComponentBlocksSectionAbout":
            Block = AboutSection;
            break;
        case "ComponentBlocksSectionProjects":
            Block = ProjectsSection;
            break;
        case "ComponentBlocksSectionArticles":
            Block = ArticlesSection;
            break;
    }

    return Block ? <Block key={__typename} {...props} className={idx % 2 ? "bg-gray-200" : "bg-white"} /> : null;
};
