import { gql } from "@apollo/client";

// Query - get comments
gql`
    query GetComments($id: ID) {
        comments(filters: { article: { id: { eq: $id } } }) {
            data {
                attributes {
                    name
                    content
                    createdAt
                }
            }
            meta {
                pagination {
                    total
                }
            }
        }
    }
`;

gql`
    mutation CreateComment($name: String!, $email: String!, $content: String!, $articleId: ID!) {
        createComment(data: { name: $name, email: $email, content: $content, article: $articleId }) {
            data {
                id
            }
        }
    }
`;
