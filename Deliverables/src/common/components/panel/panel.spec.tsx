import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {Panel} from './panel';

describe('common/components/panel', ()=>{
    it('should render as expected passing req. props',()=>{
        const props = {title: 'title'};
        // Esto es de integración ya que montamos todos los componentes
        const component = mount(<Panel title={props.title}>
        <h2>Test children</h2>
            
        </Panel>)

        expect(component).toMatchSnapshot();
    })
});