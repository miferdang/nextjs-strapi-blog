import { gql } from "@apollo/client";

gql`
    query GetArticlesPage {
        articlesPage {
            data {
                attributes {
                    title
                    description
                }
            }
        }
    }
`;
