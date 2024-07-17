import { gql } from "@apollo/client";

// Get - about me page
gql`
    query GetAboutMePage {
        aboutMePage {
            data {
                attributes {
                    title
                    description
                    content
                }
            }
        }
    }
`;
