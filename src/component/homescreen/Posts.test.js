import React from 'react';
import {shallow} from "enzyme";
import Post from "./Post";
import Posts from "./Posts";

let wrapper;
describe("Posts Component", ()=> {

    beforeEach(()=> {
        wrapper = shallow(<Posts.WrappedComponent postsId={[1,2,3]}/>);
    });

    it('should render all post',  () =>  {
        expect(wrapper.find(Post).length).toEqual(3);
    });

    it('should render post with right props', ()=> {
        expect(wrapper.find(Post).at(0).prop('postId')).toEqual(1);
        // expect(wrapper.find(Post).at(0).prop('key')).toEqual(1);
        expect(wrapper.find(Post).at(1).prop('postId')).toEqual(2);
        // expect(wrapper.find(Post).at(1).prop('key')).toEqual(2);
        expect(wrapper.find(Post).at(2).prop('postId')).toEqual(3);
        // expect(wrapper.find(Post).at(2).prop('key')).toEqual(3);

    });
});
