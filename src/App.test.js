import React from 'react';
import {shallow} from "enzyme";
import App from "./App";
import {Switch} from "react-router";
import Home from "./component/homescreen/Home";
import CreatePost from "./component/createpost/CreatePost";

let wrapper;
describe("App Component", ()=> {

    beforeEach(()=> {
        wrapper = shallow(<App/>);
    });

    it('should render app container',  () =>  {
        expect(wrapper.find('.App_container').exists()).toBeTruthy();
    });

    it('should render switch with 2 children', ()=> {
        expect(wrapper.find(Switch).exists()).toEqual(true);
        expect(wrapper.find(Switch).children().length).toEqual(2);
    });
    it('should render home route', ()=> {
        expect(wrapper.find(Switch).childAt(0).prop('path')).toEqual('/');
        expect(wrapper.find(Switch).childAt(0).prop('exact')).toEqual(true);
        expect(wrapper.find(Switch).childAt(0).prop('component')).toEqual(Home);
    });
    it('should render CreatePost route', ()=> {
        expect(wrapper.find(Switch).childAt(1).prop('path')).toEqual('/post');
        expect(wrapper.find(Switch).childAt(1).prop('component')).toEqual(CreatePost);
    });
});

