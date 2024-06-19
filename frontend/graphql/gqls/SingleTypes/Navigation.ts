import { gql } from "@apollo/client";

// Query - get navigation with Logo and Menus
gql`
    query GetNavigation {
        navigation {
            data {
                attributes {
                    logo {
                        data {
                            attributes {
                                url
                                alternativeText
                                caption
                            }
                        }
                    }
                    menus {
                        label
                        title
                        target
                        url
                    }
                }
            }
        }
    }
`;
