import React from 'react';
import {shallow} from "enzyme";
import Home from "./Home";
import Posts from "./Posts";
import post from "../../assets/post.svg"

let wrapper;
describe("Home Component", ()=> {

    beforeEach(()=> {
        wrapper = shallow(<Home/>);
    });

    it('should render Posts Component',  () =>  {
        expect(wrapper.find(Posts).exists()).toEqual(true);
    });

    it('should render logo icon as NavImg', ()=> {
        let header_logo = wrapper.find('.header_logo');
        expect (header_logo.prop('route')).toEqual("/");
        expect (header_logo.prop('align')).toEqual('right');
        expect (header_logo.prop('alt')).toEqual('Home');
        expect (header_logo.prop('icon')).toEqual('logo.svg')
    });

    it('should render Create Post icon as NavImg', ()=> {
        let header_logo = wrapper.find('.createPost_img');
        expect (header_logo.prop('route')).toEqual("/post");
        expect (header_logo.prop('align')).toEqual('right');
        expect (header_logo.prop('alt')).toEqual('Create Post');
        expect (header_logo.prop('icon')).toEqual('post.svg')
    });

});
