import { gql } from '@apollo/client'

export const AUTHENTICATE = gql`
  query {
    authenticate {
      _id
      email
      username
    }
  }
`

// Get a single user as well as their whiskey collection
export const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    getUserById(userId: $userId) {
      _id
      email
      username
      userCollection {
        _id
        userId
        whiskeyId {
          _id
          name
          image
          rating
          type
          stats {
            distiller
            bottler
            abv
            age
            price
          }
        }
        rating
        userNotes {
          nose
          taste
          finish
        }
      }
    }
  }
`

// Get whiskey based off search or get all whiskeys if no search
export const GET_WHISKEYS = gql`
  query GetWhiskeys($search: String, $page: Int!, $perPage: Int!, $sortByName: String, $sortByScore: String) {
    whiskeys(search: $search, page: $page, perPage: $perPage, sortByName: $sortByName, sortByScore: $sortByScore) {
      whiskeys {
        _id
        name
        image
        type
        rating
        link
        stats {
          distiller
          abv
        }
      }
      count
    }
  }
`

// Get single whiskey by id
export const GET_SINGLE_WHISKEY = gql`
  query GetWhiskeyById($whiskeyId: ID!) {
    getWhiskeyById(whiskeyId: $whiskeyId) {
      _id
      name
      image
      type
      rating
      link
      stats {
        distiller
        bottler
        abv
        age
        price
      }
      houseReviews {
        intro
        nose
        taste
        finish
        overall
        score
      }
    }
  }
`
