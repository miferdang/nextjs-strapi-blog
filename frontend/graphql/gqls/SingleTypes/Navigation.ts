import { gql } from "@apollo/client";

// Query - get navigation with Logo and Menus
gql`
    query GetNavigation {
        navigation {
            data {
                attributes {
                    Logo {
                        data {
                            attributes {
                                url
                                alternativeText
                                caption
                            }
                        }
                    }
                    Menus {
                        Label
                        Title
                        Target
                        Url
                    }
                }
            }
        }
    }
`;
