import { gql } from "@apollo/client";

// Get - contact page
gql`
    query GetContactPage {
        contactPage {
            data {
                attributes {
                    title
                    description
                }
            }
        }
    }
`;
