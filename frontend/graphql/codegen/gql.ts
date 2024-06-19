/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetArticles($page: Int!, $pageSize: Int!) {\n        articles(pagination: { page: $page, pageSize: $pageSize }) {\n            data {\n                id\n                attributes {\n                    slug\n                    title\n                    description\n                    date\n                    content\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    author {\n                        data {\n                            attributes {\n                                username\n                            }\n                        }\n                    }\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                }\n            }\n            meta {\n                pagination {\n                    page\n                    pageCount\n                }\n            }\n        }\n    }\n": types.GetArticlesDocument,
    "\n    query GetArticle($id: ID!) {\n        article(id: $id) {\n            data {\n                attributes {\n                    title\n                    description\n                    date\n                    content\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    author {\n                        data {\n                            attributes {\n                                username\n                                avatar {\n                                    data {\n                                        attributes {\n                                            url\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                    tags {\n                        data {\n                            attributes {\n                                label\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.GetArticleDocument,
    "\n    query GetProjects($page: Int!, $pageSize: Int!) {\n        projects(pagination: { page: $page, pageSize: $pageSize }) {\n            data {\n                id\n                attributes {\n                    slug\n                    name\n                    description\n                    startedAt\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n            meta {\n                pagination {\n                    page\n                    pageCount\n                }\n            }\n        }\n    }\n": types.GetProjectsDocument,
    "\n    query GetProject($id: ID!) {\n        project(id: $id) {\n            data {\n                attributes {\n                    slug\n                    name\n                    description\n                    content\n                    startedAt\n                    finishedAt\n                    media {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.GetProjectDocument,
    "\n    query GetArticlesPage {\n        articlesPage {\n            data {\n                attributes {\n                    title\n                    description\n                }\n            }\n        }\n    }\n": types.GetArticlesPageDocument,
    "\n    query GetHomePage {\n        homePage {\n            data {\n                attributes {\n                    blocks {\n                        ... on ComponentBlocksSectionHero {\n                            __typename\n                            title\n                            description\n                        }\n                        ... on ComponentBlocksSectionAbout {\n                            __typename\n                            title\n                            content\n                            mediaFirst\n                            action {\n                                label\n                                url\n                            }\n                            media {\n                                data {\n                                    attributes {\n                                        url\n                                    }\n                                }\n                            }\n                        }\n                        ... on ComponentBlocksSectionProjects {\n                            __typename\n                            title\n                            description\n                            projects {\n                                data {\n                                    id\n                                    attributes {\n                                        slug\n                                        name\n                                        description\n                                        startedAt\n                                        thumbnail {\n                                            data {\n                                                attributes {\n                                                    url\n                                                    alternativeText\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                        ... on ComponentBlocksSectionArticles {\n                            __typename\n                            title\n                            description\n                            articles {\n                                data {\n                                    id\n                                    attributes {\n                                        slug\n                                        title\n                                        date\n                                        description\n                                        content\n                                        thumbnail {\n                                            data {\n                                                attributes {\n                                                    url\n                                                }\n                                            }\n                                        }\n                                        author {\n                                            data {\n                                                attributes {\n                                                    username\n                                                }\n                                            }\n                                        }\n                                        category {\n                                            data {\n                                                attributes {\n                                                    title\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.GetHomePageDocument,
    "\n    query GetNavigation {\n        navigation {\n            data {\n                attributes {\n                    logo {\n                        data {\n                            attributes {\n                                url\n                                alternativeText\n                                caption\n                            }\n                        }\n                    }\n                    menus {\n                        label\n                        title\n                        target\n                        url\n                    }\n                }\n            }\n        }\n    }\n": types.GetNavigationDocument,
    "\n    query GetProjectsPage {\n       projectsPage {\n            data {\n                attributes {\n                    title\n                    description\n                }\n            }\n        }\n    }\n": types.GetProjectsPageDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetArticles($page: Int!, $pageSize: Int!) {\n        articles(pagination: { page: $page, pageSize: $pageSize }) {\n            data {\n                id\n                attributes {\n                    slug\n                    title\n                    description\n                    date\n                    content\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    author {\n                        data {\n                            attributes {\n                                username\n                            }\n                        }\n                    }\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                }\n            }\n            meta {\n                pagination {\n                    page\n                    pageCount\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetArticles($page: Int!, $pageSize: Int!) {\n        articles(pagination: { page: $page, pageSize: $pageSize }) {\n            data {\n                id\n                attributes {\n                    slug\n                    title\n                    description\n                    date\n                    content\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    author {\n                        data {\n                            attributes {\n                                username\n                            }\n                        }\n                    }\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                }\n            }\n            meta {\n                pagination {\n                    page\n                    pageCount\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetArticle($id: ID!) {\n        article(id: $id) {\n            data {\n                attributes {\n                    title\n                    description\n                    date\n                    content\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    author {\n                        data {\n                            attributes {\n                                username\n                                avatar {\n                                    data {\n                                        attributes {\n                                            url\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                    tags {\n                        data {\n                            attributes {\n                                label\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetArticle($id: ID!) {\n        article(id: $id) {\n            data {\n                attributes {\n                    title\n                    description\n                    date\n                    content\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                    author {\n                        data {\n                            attributes {\n                                username\n                                avatar {\n                                    data {\n                                        attributes {\n                                            url\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                    category {\n                        data {\n                            attributes {\n                                title\n                            }\n                        }\n                    }\n                    tags {\n                        data {\n                            attributes {\n                                label\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetProjects($page: Int!, $pageSize: Int!) {\n        projects(pagination: { page: $page, pageSize: $pageSize }) {\n            data {\n                id\n                attributes {\n                    slug\n                    name\n                    description\n                    startedAt\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n            meta {\n                pagination {\n                    page\n                    pageCount\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProjects($page: Int!, $pageSize: Int!) {\n        projects(pagination: { page: $page, pageSize: $pageSize }) {\n            data {\n                id\n                attributes {\n                    slug\n                    name\n                    description\n                    startedAt\n                    thumbnail {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n            meta {\n                pagination {\n                    page\n                    pageCount\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetProject($id: ID!) {\n        project(id: $id) {\n            data {\n                attributes {\n                    slug\n                    name\n                    description\n                    content\n                    startedAt\n                    finishedAt\n                    media {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProject($id: ID!) {\n        project(id: $id) {\n            data {\n                attributes {\n                    slug\n                    name\n                    description\n                    content\n                    startedAt\n                    finishedAt\n                    media {\n                        data {\n                            attributes {\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetArticlesPage {\n        articlesPage {\n            data {\n                attributes {\n                    title\n                    description\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetArticlesPage {\n        articlesPage {\n            data {\n                attributes {\n                    title\n                    description\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetHomePage {\n        homePage {\n            data {\n                attributes {\n                    blocks {\n                        ... on ComponentBlocksSectionHero {\n                            __typename\n                            title\n                            description\n                        }\n                        ... on ComponentBlocksSectionAbout {\n                            __typename\n                            title\n                            content\n                            mediaFirst\n                            action {\n                                label\n                                url\n                            }\n                            media {\n                                data {\n                                    attributes {\n                                        url\n                                    }\n                                }\n                            }\n                        }\n                        ... on ComponentBlocksSectionProjects {\n                            __typename\n                            title\n                            description\n                            projects {\n                                data {\n                                    id\n                                    attributes {\n                                        slug\n                                        name\n                                        description\n                                        startedAt\n                                        thumbnail {\n                                            data {\n                                                attributes {\n                                                    url\n                                                    alternativeText\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                        ... on ComponentBlocksSectionArticles {\n                            __typename\n                            title\n                            description\n                            articles {\n                                data {\n                                    id\n                                    attributes {\n                                        slug\n                                        title\n                                        date\n                                        description\n                                        content\n                                        thumbnail {\n                                            data {\n                                                attributes {\n                                                    url\n                                                }\n                                            }\n                                        }\n                                        author {\n                                            data {\n                                                attributes {\n                                                    username\n                                                }\n                                            }\n                                        }\n                                        category {\n                                            data {\n                                                attributes {\n                                                    title\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetHomePage {\n        homePage {\n            data {\n                attributes {\n                    blocks {\n                        ... on ComponentBlocksSectionHero {\n                            __typename\n                            title\n                            description\n                        }\n                        ... on ComponentBlocksSectionAbout {\n                            __typename\n                            title\n                            content\n                            mediaFirst\n                            action {\n                                label\n                                url\n                            }\n                            media {\n                                data {\n                                    attributes {\n                                        url\n                                    }\n                                }\n                            }\n                        }\n                        ... on ComponentBlocksSectionProjects {\n                            __typename\n                            title\n                            description\n                            projects {\n                                data {\n                                    id\n                                    attributes {\n                                        slug\n                                        name\n                                        description\n                                        startedAt\n                                        thumbnail {\n                                            data {\n                                                attributes {\n                                                    url\n                                                    alternativeText\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                        ... on ComponentBlocksSectionArticles {\n                            __typename\n                            title\n                            description\n                            articles {\n                                data {\n                                    id\n                                    attributes {\n                                        slug\n                                        title\n                                        date\n                                        description\n                                        content\n                                        thumbnail {\n                                            data {\n                                                attributes {\n                                                    url\n                                                }\n                                            }\n                                        }\n                                        author {\n                                            data {\n                                                attributes {\n                                                    username\n                                                }\n                                            }\n                                        }\n                                        category {\n                                            data {\n                                                attributes {\n                                                    title\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetNavigation {\n        navigation {\n            data {\n                attributes {\n                    logo {\n                        data {\n                            attributes {\n                                url\n                                alternativeText\n                                caption\n                            }\n                        }\n                    }\n                    menus {\n                        label\n                        title\n                        target\n                        url\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetNavigation {\n        navigation {\n            data {\n                attributes {\n                    logo {\n                        data {\n                            attributes {\n                                url\n                                alternativeText\n                                caption\n                            }\n                        }\n                    }\n                    menus {\n                        label\n                        title\n                        target\n                        url\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetProjectsPage {\n       projectsPage {\n            data {\n                attributes {\n                    title\n                    description\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProjectsPage {\n       projectsPage {\n            data {\n                attributes {\n                    title\n                    description\n                }\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;