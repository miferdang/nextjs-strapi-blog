import { gql } from "@apollo/client";

// Query - get home page blocks
gql`
    query GetHomePage {
        homePage {
            data {
                attributes {
                    blocks {
                        ... on ComponentBlocksSectionHero {
                            __typename
                            title
                            description
                        }
                        ... on ComponentBlocksSectionAbout {
                            __typename
                            title
                            content
                            mediaFirst
                            action {
                                label
                                url
                            }
                            media {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                        ... on ComponentBlocksSectionProjects {
                            __typename
                            title
                            description
                            projects {
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
                                                    alternativeText
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        ... on ComponentBlocksSectionArticles {
                            __typename
                            title
                            description
                            articles {
                                data {
                                    id
                                    attributes {
                                        slug
                                        title
                                        date
                                        description
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
                            }
                        }
                    }
                }
            }
        }
    }
`;
