import React from 'react';
import {shallow} from "enzyme";
import Post from "./Post";
import grayPhoto from "../../assets/grayHeart.svg";
import redPhoto from "../../assets/redHeart.svg";

let wrapper;
describe("Post Component", ()=> {
    let toggleFavorite = jest.fn();

    describe('not favorited', function () {
        beforeEach(()=> {
            wrapper = shallow(<Post.WrappedComponent body="testBody" favorite={false} favoriteCount={1} postId={10} toggleFavorite={toggleFavorite}/>);
        });

        it('should render display the favorite countt',  () =>  {
            expect(wrapper.find('.favorite-count').text()).toEqual("1");
        });

        it('should display a gray heart when not favorited', function () {
            expect(wrapper.find('.heart-img').prop('src')).toEqual(grayPhoto);
        });

        it('should call target favorite action', function () {
            wrapper.find('.heart-img').simulate('click');
            expect(toggleFavorite).toHaveBeenCalledWith(10,true)
        });
    });

    describe("favorited", function () {
        beforeEach(()=> {
            wrapper = shallow(<Post.WrappedComponent body="testBody" favorite={true} favoriteCount={1} postId={10} toggleFavorite={toggleFavorite}/>);
        });

        it('should display a red heart when favorite', function () {
            expect(wrapper.find('.heart-img').prop('src')).toEqual(redPhoto);
        });

        it('should call target favorite action', function () {
            wrapper.find('.heart-img').simulate('click');
            expect(toggleFavorite).toHaveBeenCalledWith(10,false)
        });
    });




});
