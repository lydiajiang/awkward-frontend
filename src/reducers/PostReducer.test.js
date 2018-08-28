import {posts} from './PostReducer'
import * as action from '../action/posts'
import deepFreeze from 'deep-freeze'

describe('Post reducer', () => {
    it('should return the initial state', () => {
        expect(posts(undefined, {})).toEqual({
            allIds: [],
            byId: {},
        })
    })

    it('should handle FETCH_POST', () => {
        const currentState = {}
        deepFreeze(currentState)

        expect(
            posts(currentState, {
                type: action.FETCH_POST,
                posts: [
        {
            body: 'Hearing that Awkward.af had actual users. 😆',
                favoriteCount: 4,
            updatedDate: '2018-04-17T03:20:36.382+0000',
            guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
            createdDate: '2018-04-13T17:54:11.543+0000'
        },
        {
            body: 'A coworker was talking about an office mandate. I misheard and ask who was taking him out...',
                favoriteCount: 1,
            updatedDate: '2018-04-17T03:20:08.881+0000',
            guid: '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
            createdDate: '2018-04-12T09:23:20.357+0000'
        },
                ]
            })
        ).toEqual({
            allIds: [
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
            ],
            byId: {
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b': {
                    body: 'Hearing that Awkward.af had actual users. 😆',
                    favoriteCount: 4,
                    updatedDate: '2018-04-17T03:20:36.382+0000',
                    guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                    createdDate: '2018-04-13T17:54:11.543+0000'
                },
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c': {
                    body: 'A coworker was talking about an office mandate. I misheard and ask who was taking him out...',
                    favoriteCount: 1,
                    updatedDate: '2018-04-17T03:20:08.881+0000',
                    guid: '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
                    createdDate: '2018-04-12T09:23:20.357+0000'
                },
            }
        })
    })
    it('should handle ADD_POST', () => {
        const currentState = {
            allIds: [
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
            ],
            byId: {
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b': {
                    body: 'Hearing that Awkward.af had actual users. 😆',
                    favoriteCount: 4,
                    updatedDate: '2018-04-17T03:20:36.382+0000',
                    guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                    createdDate: '2018-04-13T17:54:11.543+0000'
                },
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c': {
                    body: 'A coworker was talking about an office mandate. I misheard and ask who was taking him out...',
                    favoriteCount: 1,
                    updatedDate: '2018-04-17T03:20:08.881+0000',
                    guid: '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
                    createdDate: '2018-04-12T09:23:20.357+0000'
                },
            }
        }
        deepFreeze(currentState)

        expect(
            posts(currentState, {
                type: action.ADD_POST,
                post: {
                    body: 'Sometimes when I win a game (any game) or something goes my way, I\'ll put both hands in the air and yell, "JENJA!!!"',
                    favoriteCount: 1,
                    updatedDate: '2018-04-17T03:20:18.578+0000',
                    guid: 'dd0510e1-70e4-466b-821c-4f14d8147214',
                    createdDate: '2018-04-09T16:36:15.857+0000'
                }
            })
        ).toEqual({
            allIds: [
                'dd0510e1-70e4-466b-821c-4f14d8147214',
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
            ],
            byId: {
                'dd0510e1-70e4-466b-821c-4f14d8147214':{
                    body: 'Sometimes when I win a game (any game) or something goes my way, I\'ll put both hands in the air and yell, "JENJA!!!"',
                    favoriteCount: 1,
                    updatedDate: '2018-04-17T03:20:18.578+0000',
                    guid: 'dd0510e1-70e4-466b-821c-4f14d8147214',
                    createdDate: '2018-04-09T16:36:15.857+0000'
                },
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b': {
                    body: 'Hearing that Awkward.af had actual users. 😆',
                    favoriteCount: 4,
                    updatedDate: '2018-04-17T03:20:36.382+0000',
                    guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                    createdDate: '2018-04-13T17:54:11.543+0000'
                },
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c': {
                    body: 'A coworker was talking about an office mandate. I misheard and ask who was taking him out...',
                    favoriteCount: 1,
                    updatedDate: '2018-04-17T03:20:08.881+0000',
                    guid: '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
                    createdDate: '2018-04-12T09:23:20.357+0000'
                },
            }
        })
    })
    it('should handle TOGGLE_FAVORITE', () => {
        const currentState = {
            allIds: [
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
            ],
            byId: {
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b': {
                    body: 'Hearing that Awkward.af had actual users. 😆',
                    favoriteCount: 4,
                    updatedDate: '2018-04-17T03:20:36.382+0000',
                    guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                    createdDate: '2018-04-13T17:54:11.543+0000'
                },
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c': {
                    body: 'A coworker was talking about an office mandate. I misheard and ask who was taking him out...',
                    favoriteCount: 1,
                    updatedDate: '2018-04-17T03:20:08.881+0000',
                    guid: '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
                    createdDate: '2018-04-12T09:23:20.357+0000'
                },
            }
        }
        deepFreeze(currentState)

        expect(
            posts(currentState, {
                type: action.TOGGLE_FAVORITE,
                post: {
                    body: 'Hearing that Awkward.af had actual users. 😆',
                    favoriteCount: 8,
                    updatedDate: '2018-04-17T03:20:36.382+0000',
                    guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                    createdDate: '2018-04-13T17:54:11.543+0000',
                    favorite: true,
                }
            })
        ).toEqual({
            allIds: [
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
            ],
            byId: {
                '1aadcd9f-5b72-457b-8eac-f26cbfefa54b': {
                    body: 'Hearing that Awkward.af had actual users. 😆',
                    favoriteCount: 8,
                    updatedDate: '2018-04-17T03:20:36.382+0000',
                    guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
                    createdDate: '2018-04-13T17:54:11.543+0000',
                    favorite: true,
                },
                '0eb1e6bc-865a-449a-ad67-c0c823cb235c': {
                    body: 'A coworker was talking about an office mandate. I misheard and ask who was taking him out...',
                    favoriteCount: 1,
                    updatedDate: '2018-04-17T03:20:08.881+0000',
                    guid: '0eb1e6bc-865a-449a-ad67-c0c823cb235c',
                    createdDate: '2018-04-12T09:23:20.357+0000'
                },
            }
        })
    })
})