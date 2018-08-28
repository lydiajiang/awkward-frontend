import React from 'react';
import {shallow} from "enzyme";
import CreatePost from "./CreatePost";
import NavImg from "../common/NavImg";

let wrapper;
describe("CreatePost Component", () => {
    let addPost = jest.fn();
    let history = {push: jest.fn()};

    beforeEach(() => {
        wrapper = shallow(<CreatePost.WrappedComponent addPost={addPost} history={history}/>);
    });

    it('should push back to home page', function () {
        let event = {preventDefault: jest.fn()};

        wrapper.find('.actionButton_back').simulate('click', event);

        expect(history.push).toHaveBeenCalledWith('/')
        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should call add post and route home', function () {
        let event = {preventDefault: jest.fn(), target: {body: {value: 'fakeBody'}}};

        wrapper.find('.form-container').simulate('submit', event);

        expect(event.preventDefault).toHaveBeenCalled();
        expect(history.push).toHaveBeenCalledWith('/');
        expect(addPost).toHaveBeenCalledWith('fakeBody');
    });

    it('should render logo in NavImg', ()=> {
        expect(wrapper.find(NavImg).prop('className')).toEqual('header_logo');
        expect(wrapper.find(NavImg).prop('route')).toEqual("/");
        expect(wrapper.find(NavImg).prop('align')).toEqual('right');
        expect(wrapper.find(NavImg).prop('alt')).toEqual('Home');
        expect(wrapper.find(NavImg).prop('icon')).toEqual('logo.svg');
    });

    it('should display sub-heading', function () {
        expect(wrapper.find('.sub-heading').text()).toEqual("Share an Awkward Moment")
    });

    it('should display render body input field', function () {
        let inputBodyField = wrapper.find('.inputPost');
        expect(inputBodyField.prop('type')).toEqual("text")
        expect(inputBodyField.prop('name')).toEqual("body")
        expect(inputBodyField.prop('placeholder')).toEqual("Write about something awkward")
    });

    it('should display render body input field', function () {
        let inputBodyField = wrapper.find('.actionButton_submit');
        expect(inputBodyField.prop('type')).toEqual("submit")
        expect(inputBodyField.prop('value')).toEqual("Submit")
    });

});
