import { gql } from "@apollo/client";

// Mutation - create message
gql`
    mutation CreateMessage($name: String, $phone: String, $email: String, $message: String) {
        createMessage(data: { name: $name, phone: $phone, email: $email, message: $message }) {
            id
        }
    }
`;
