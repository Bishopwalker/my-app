import React from 'react'
 import { findByTestArr, checkProps } from './../../Utils/index';
 import { shallow } from 'enzyme';
 import SharedButton from '.';
import { fetchPosts } from '../../actions';
 describe('SharedButton Component',()=>{

    describe('Checking PropTypes',()=>{
        it('Should NOT throw a warning',()=>{
            const expectedProps ={
                buttonText: 'Example Button Text',
                emitEvent:()=>{

                }
            }
            const propsError = checkProps(SharedButton, expectedProps)
            expect(propsError).toBe(undefined)
        })
    })
    describe('It Renders',()=>{
        let wrapper, mockFunc;
        beforeEach(()=>{
            mockFunc = jest.fn()
            const props ={
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            }
            wrapper = shallow(<SharedButton {...props} />)
        })
        it('Should Render a Button',()=>{
            const button = findByTestArr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
        it('Should emit callback on click even',()=>{
            const button = findByTestArr(wrapper,'buttonComponent');
          button.simulate('click');
            const callBack=mockFunc.mock.calls.length;
            expect(callBack).toBe(1)

        })
    })
 })
