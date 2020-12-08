import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Query = {
    __typename?: "Query";
    Users: Array<User>;
    Me?: Maybe<User>;
    Tracks: Array<Track>;
    Track?: Maybe<Track>;
    hello: Scalars["String"];
};

export type QueryTrackArgs = {
    id: Scalars["Int"];
};

export type User = {
    __typename?: "User";
    id: Scalars["ID"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    country: Scalars["String"];
    email: Scalars["String"];
    isMember: Scalars["Boolean"];
    isAdmin: Scalars["Boolean"];
    createdAt: Scalars["String"];
    updatedAt: Scalars["String"];
};

export type Track = {
    __typename?: "Track";
    id: Scalars["Float"];
    artist: Scalars["String"];
    title: Scalars["String"];
    version: Scalars["String"];
    label: Scalars["String"];
    youTubeId: Scalars["String"];
    points: Scalars["Int"];
    createdAt: Scalars["String"];
    updatedAt: Scalars["String"];
};

export type Mutation = {
    __typename?: "Mutation";
    Register: Scalars["Boolean"];
    Login?: Maybe<User>;
    createTrack: Track;
    updateTrack?: Maybe<Track>;
    deleteTrack: Scalars["Boolean"];
};

export type MutationRegisterArgs = {
    isAdmin: Scalars["Boolean"];
    password: Scalars["String"];
    email: Scalars["String"];
    lastName: Scalars["String"];
    firstName: Scalars["String"];
};

export type MutationLoginArgs = {
    password: Scalars["String"];
    email: Scalars["String"];
};

export type MutationCreateTrackArgs = {
    input: TrackInput;
};

export type MutationUpdateTrackArgs = {
    youTubeId: Scalars["String"];
    label: Scalars["String"];
    version: Scalars["String"];
    title: Scalars["String"];
    artist: Scalars["String"];
    id: Scalars["Int"];
};

export type MutationDeleteTrackArgs = {
    id: Scalars["Int"];
};

export type TrackInput = {
    artist: Scalars["String"];
    title: Scalars["String"];
    version: Scalars["String"];
    label: Scalars["String"];
    youTubeId: Scalars["String"];
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = { __typename?: "Query" } & {
    Tracks: Array<
        { __typename?: "Track" } & Pick<
            Track,
            | "id"
            | "artist"
            | "title"
            | "version"
            | "label"
            | "youTubeId"
            | "points"
            | "updatedAt"
        >
    >;
};

export const Document = gql`
    {
        Tracks {
            id
            artist
            title
            version
            label
            youTubeId
            points
            updatedAt
        }
    }
`;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(
    baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>
) {
    return Apollo.useQuery<Query, QueryVariables>(Document, baseOptions);
}
export function useLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>
) {
    return Apollo.useLazyQuery<Query, QueryVariables>(Document, baseOptions);
}
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;
