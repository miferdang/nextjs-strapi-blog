import { gql } from "@apollo/client";

gql`
    query GetHomePage {
        homePage {
            data {
                attributes {
                    Blocks {
                        ... on ComponentBlockSectionHero {
                            __typename
                            Title
                            Description
                        }
                        ... on ComponentBlockSectionAbout {
                            __typename
                            Title
                            Content
                            MediaFirst
                            Readmore {
                                Label
                                Url
                            }
                            Media {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
