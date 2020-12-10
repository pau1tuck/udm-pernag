import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  Register: Scalars['Boolean'];
  Login?: Maybe<User>;
  createTrack: Track;
  updateTrack?: Maybe<Track>;
  deleteTrack: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  isAdmin: Scalars['Boolean'];
  password: Scalars['String'];
  email: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateTrackArgs = {
  input: TrackInput;
};


export type MutationUpdateTrackArgs = {
  youTubeId: Scalars['String'];
  label: Scalars['String'];
  version: Scalars['String'];
  title: Scalars['String'];
  artist: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteTrackArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  Users: Array<User>;
  Me?: Maybe<User>;
  Tracks: Array<Track>;
  Track?: Maybe<Track>;
  hello: Scalars['String'];
};


export type QueryTrackArgs = {
  id: Scalars['Int'];
};

export type Track = {
  __typename?: 'Track';
  id: Scalars['Float'];
  artist: Scalars['String'];
  title: Scalars['String'];
  version: Scalars['String'];
  label: Scalars['String'];
  youTubeId: Scalars['String'];
  points: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TrackInput = {
  artist: Scalars['String'];
  title: Scalars['String'];
  version: Scalars['String'];
  label: Scalars['String'];
  youTubeId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  isMember: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { Me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'country' | 'email' | 'isMember' | 'isAdmin'>
  )> }
);

export type TracksQueryVariables = Exact<{ [key: string]: never; }>;


export type TracksQuery = (
  { __typename?: 'Query' }
  & { Tracks: Array<(
    { __typename?: 'Track' }
    & Pick<Track, 'id' | 'artist' | 'title' | 'version' | 'label' | 'youTubeId' | 'points' | 'updatedAt'>
  )> }
);


export const MeDocument = gql`
    query me {
  Me {
    id
    firstName
    lastName
    country
    email
    isMember
    isAdmin
  }
}
    `;
export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
    } & TChildProps;
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const TracksDocument = gql`
    query tracks {
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
export type TracksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TracksQuery, TracksQueryVariables>
    } & TChildProps;
export function withTracks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TracksQuery,
  TracksQueryVariables,
  TracksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TracksQuery, TracksQueryVariables, TracksProps<TChildProps, TDataName>>(TracksDocument, {
      alias: 'tracks',
      ...operationOptions
    });
};

/**
 * __useTracksQuery__
 *
 * To run a query within a React component, call `useTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTracksQuery(baseOptions?: Apollo.QueryHookOptions<TracksQuery, TracksQueryVariables>) {
        return Apollo.useQuery<TracksQuery, TracksQueryVariables>(TracksDocument, baseOptions);
      }
export function useTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TracksQuery, TracksQueryVariables>) {
          return Apollo.useLazyQuery<TracksQuery, TracksQueryVariables>(TracksDocument, baseOptions);
        }
export type TracksQueryHookResult = ReturnType<typeof useTracksQuery>;
export type TracksLazyQueryHookResult = ReturnType<typeof useTracksLazyQuery>;
export type TracksQueryResult = Apollo.QueryResult<TracksQuery, TracksQueryVariables>;