import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// jest.enableAutomock();
// jest.unmock('../node_modules/enzyme/');
// jest.unmock('../node_modules/react/');
