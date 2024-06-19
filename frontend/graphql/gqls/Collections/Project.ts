import { gql } from "@apollo/client";

// Query - get projects
gql`
    query GetProjects($page: Int!, $pageSize: Int!) {
        projects(pagination: { page: $page, pageSize: $pageSize }) {
            data {
                id
                attributes {
                    slug
                    name
                    description
                    startedAt
                    thumbnail {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
            meta {
                pagination {
                    page
                    pageCount
                }
            }
        }
    }
`;

// Query - project by id
gql`
    query GetProject($id: ID!) {
        project(id: $id) {
            data {
                attributes {
                    slug
                    name
                    description
                    content
                    startedAt
                    finishedAt
                    media {
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
`;
