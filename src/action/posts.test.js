import {ADD_POST, addPost, FETCH_POST, fetchPost, TOGGLE_FAVORITE, toggleFavorite} from "./posts";


describe('Post action creator', () => {
    let fetchMock;
    let responseJson;
    let dispatch;
    let path = "http://localhost:5000/api/posts";
    beforeEach( () => {
        fetchMock = jest.fn();
        responseJson = jest.fn();
        dispatch=jest.fn();
        fetchMock.mockReturnValue({json: responseJson});
        window.fetch = fetchMock;
    });

    it('add post - should call the server with the right values and dispatches the server response to the store', async () => {
        let expectedPost = {
            body: 'Hearing that Awkward.af had actual users. 😆',
            favoriteCount: 4,
            updatedDate: '2018-04-17T03:20:36.382+0000',
            guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
            createdDate: '2018-04-13T17:54:11.543+0000'
        };
        responseJson.mockReturnValue(expectedPost);
        let body = "fakeBody";
        let expectedPostBody = {body: body};

        let promise = addPost(body);
        await promise(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: ADD_POST,
            post: expectedPost,
        });
        let path = "http://localhost:5000/api/posts";
        expect(fetchMock).toHaveBeenCalledWith(path, {
            method: "POST",
            body: JSON.stringify(expectedPostBody),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
    });
    it('toggle favorite - should call the server with the right values and dispatches the server response to the store', async () => {
        let postId='1aadcd9f-5b72-457b-8eac-f26cbfefa54b';
        let expectedPost = {
            body: 'Hearing that Awkward.af had actual users. 😆',
            favoriteCount: 4,
            updatedDate: '2018-04-17T03:20:36.382+0000',
            guid: postId,
            createdDate: '2018-04-13T17:54:11.543+0000'
        };
        responseJson.mockReturnValue(expectedPost);

        let promise = toggleFavorite(postId, true);
        await promise(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: TOGGLE_FAVORITE,
            post: {...expectedPost,favorite: true},
        });
        let path = "http://localhost:5000/api/posts/"+postId+"/favorite";
        expect(fetchMock).toHaveBeenCalledWith(path, {
            method: "PATCH",
            body: JSON.stringify({favorite: true}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
    });
    it('fetch post - should call the server with the right values and dispatches the server response to the store', async () => {
        let expectedPost = {
            body: 'Hearing that Awkward.af had actual users. 😆',
            favoriteCount: 4,
            updatedDate: '2018-04-17T03:20:36.382+0000',
            guid: '1aadcd9f-5b72-457b-8eac-f26cbfefa54b',
            createdDate: '2018-04-13T17:54:11.543+0000'
        };
        responseJson.mockReturnValue(expectedPost);

        let promise = fetchPost();
        await promise(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: FETCH_POST,
            posts: expectedPost,
        });
        let path = "http://localhost:5000/api/posts";
        expect(fetchMock).toHaveBeenCalledWith(path, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
    });
});