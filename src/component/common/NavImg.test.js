import React from 'react';
import {shallow} from "enzyme";
import NavImg from "./NavImg";

let wrapper;
describe("NavImg Component", () => {
    let icon = "fakeSrc";
    let pushMock = jest.fn();
    let history = {push: pushMock};
    let className = "fakeClass";
    let route = "fakeRoute";
    let alt = "fakeAlt";

    beforeEach(() => {
        wrapper = shallow(<NavImg.WrappedComponent icon={icon} history={history} className={className} route={route} alt={alt}/>);
    });

    it('should route to route on click', function () {
        wrapper.find('img').simulate('click');
        expect(pushMock).toHaveBeenCalledWith(route);
    });

    it('should render a img ', () => {
        let img =  wrapper.find("img");

        expect(img.prop('className')).toEqual(className);
        expect(img.prop('src')).toEqual(icon);
        expect(img.prop('alt')).toEqual(alt);
        expect(img.prop('align')).toEqual("right");
    });

});
