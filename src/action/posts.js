const baseUrl = "http://localhost:5000";
// const baseUrl = "http://awkwardserver-env.us-east-2.elasticbeanstalk.com";

export const ADD_POST = 'ADD_POST';
export const addPost = (body) => {
    return async (dispatch) => {
        const newPost = await makeApiCallWithResponse({ body: body});
        dispatch({
            type: ADD_POST,
            post: newPost,
        })
    }
};

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const  toggleFavorite = (postId, favorite) => {
    return async (dispatch) => {

        const url = baseUrl + "/api/posts/"+postId+"/favorite";
        const updatePost = await makeApiCallWithResponse({ favorite: favorite}, "PATCH", url );
        dispatch({
            type: TOGGLE_FAVORITE,
            post: {...updatePost, favorite: favorite},
        })
    }
};

export const FETCH_POST = 'FETCH_POST';
export const fetchPost = () => {
    return async (dispatch) => {
        const posts = await makeGetCall();
        dispatch({
            type: FETCH_POST,
            posts: posts,
        })
    }
};

const makeGetCall = async (method = "GET", path = baseUrl + "/api/posts" ) => {
    let response = await fetch(path, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    return await response.json();
};

const makeApiCallWithResponse = async(body, method = "POST", path = baseUrl+ "/api/posts" ) => {
    let response = await fetch(path, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    return await response.json();
};
