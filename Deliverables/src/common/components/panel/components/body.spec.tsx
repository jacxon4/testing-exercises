import * as React from 'react';
import {shallow} from 'enzyme';
import {Body} from './body';

describe('common/components/panel/components/body',()=>{
    it('should render when passing required properites',()=>{
        const component = shallow(<Body>
            <h1>Test childred</h1>
        </Body>);

        expect(component).toMatchSnapshot();

    })

})