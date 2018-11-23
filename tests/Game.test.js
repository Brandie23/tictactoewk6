//import jest from jest
import React from "react"
import { shallow } from 'enzyme'
import Game from "../client/components/Game"



it('should render correctly with no props', () => {
    const component = rendering(<Game/>);
    
    expect(component).toMatchSnapshot();
  });

  