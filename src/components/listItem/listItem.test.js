import React from 'react'
import { shallow } from 'enzyme'
 import { findByTestArr, checkProps } from './../../Utils/index';
import ListItem from './index';

describe("ListItem Component",()=>{

    describe("Checking PropsTypes",()=>{

        it('Should NOT throw a warning',()=>{
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some Text'
            }
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined() 
        })
    })
    
    describe('Component Renders', () => {
        const props ={
            title: 'Example Title',
            desc: 'Some Text'
        }
        let wrapper;
        beforeEach(()=>{
            wrapper=shallow(<ListItem {...props}/>)
        })

      it('Should render without error',()=>{
        const component = findByTestArr(wrapper, 'ListItemComponent')
        expect(component.length).toBe(1)
      })
      it('Should render a title',()=>{
          const title = findByTestArr(wrapper, 'componentTitle')
          expect(title.length).toBe(1)
      })
      it('Should render a description',()=>{
          const desc = findByTestArr(wrapper, 'componentDesc');
          expect(desc.length).toBe(1)
      })
    })
        describe('Should not Render', () => {
            const props ={
               
                desc: 'Some Text'
            }
            let wrapper;
            beforeEach(()=>{
                wrapper=shallow(<ListItem {...props}/>)
            })
            it('Should not render',()=>{
                const component = findByTestArr(wrapper,'ListItemComponent')
                expect(component.length).toBeFalsy()
            })
    
        })
        
    
})
