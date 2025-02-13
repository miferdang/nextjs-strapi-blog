import { gql } from "@apollo/client";

// Query - get articles
gql`
    query GetArticles($page: Int!, $pageSize: Int!) {
        articles(pagination: { page: $page, pageSize: $pageSize }) {
            data {
                id
                attributes {
                    slug
                    title
                    description
                    date
                    thumbnail {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    author {
                        data {
                            attributes {
                                username
                            }
                        }
                    }
                    category {
                        data {
                            attributes {
                                title
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

// Query - article by id
gql`
    query GetArticle($id: ID!) {
        article(id: $id) {
            data {
                id
                attributes {
                    title
                    description
                    date
                    content
                    thumbnail {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    author {
                        data {
                            attributes {
                                username
                                avatar {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                    category {
                        data {
                            attributes {
                                title
                            }
                        }
                    }
                    tags {
                        data {
                            attributes {
                                label
                            }
                        }
                    }
                }
            }
        }
    }
`;

// Query - search articles
gql`
    query SearchArticles($keyword: JSON) {
        articles(filters: { content: { containsi: $keyword } }) {
            data {
                id
                attributes {
                    slug
                    title
                    description
                    date
                    thumbnail {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    author {
                        data {
                            attributes {
                                username
                            }
                        }
                    }
                    category {
                        data {
                            attributes {
                                title
                            }
                        }
                    }
                }
            }
            meta {
                pagination {
                    total
                    page
                    pageCount
                }
            }
        }
    }
`;
