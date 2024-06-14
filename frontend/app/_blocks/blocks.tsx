import HeroSection, { THeroSectionProps } from "./Section/HeroSection";
import AboutSection, { TAboutSectionProps } from "./Section/AboutSection";

// Define - type of Block
export interface IBlock extends THeroSectionProps, TAboutSectionProps {
    __typename: "ComponentBlockSectionHero" | "ComponentBlockSectionAbout";
}

// Function - handle get block
export const getBlock = ({ __typename, ...props }: IBlock) => {
    let Block;

    switch (__typename) {
        case "ComponentBlockSectionHero":
            Block = HeroSection;
            break;
        case "ComponentBlockSectionAbout":
            Block = AboutSection;
            break;
    }

    return Block ? <Block key={__typename} {...props} /> : null;
};
