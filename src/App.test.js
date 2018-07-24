jest.mock('./request')

import Adapter from 'enzyme-adapter-react-16'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import {shallow, mount,configure} from 'enzyme';
import Header from './Header.js';
import ServiceList from './ServiceList.js';

configure({adapter : new Adapter()})


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App hello="world 2019" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App correctly', () => {
    const tree = renderer.create(<App hello="world 2019" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders App correctly', () => {
    const show = shallow(<App hello="world 2019" />);
    expect(show.find('p').text()).toEqual("react demo");
    // show.find('button').last().simulate('click');
    show.find('#btn2').simulate('click');
    expect(show.find('p').text()).toEqual("react demo 2018");

});

it('renders App correctly', () => {

    const service = mount(<ServiceList/>)

    return new Promise(resolve => setTimeout(resolve, 0)).then(() => {
        console.log(service.text(), '------')
        expect(service.text()).toEqual('12341234')
    });

});

