import { gql } from "@apollo/client";

gql`
    query GetProjectsPage {
       projectsPage {
            data {
                attributes {
                    title
                    description
                }
            }
        }
    }
`;
