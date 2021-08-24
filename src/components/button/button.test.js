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
        let wrapper;
        beforeEach(()=>{
            const props ={
                buttonText: 'Example Button Text',
                emitEvent:()=>{

                }
            }
            wrapper = shallow(<SharedButton {...props} />)
        })
        it('Should Render a Button',()=>{
            const button = findByTestArr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })
        it('Should fire only once',()=>{
            const button = findByTestArr(wrapper,'buttonComponent')
            
        
        })
    })
 })
