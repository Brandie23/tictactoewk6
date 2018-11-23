import React from "react"
import { shallow } from 'enzyme'
import Game from "../client/components/Timer"


it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<Game list={strings} />);
    expect(component).toMatchSnapshot();
  });