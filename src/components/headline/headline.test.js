import React from 'react';
import {shallow} from 'enzyme'
import HeadLine from './index'
import { findByTestArr, checkProps } from '../../Utils';

const setUp = (props={}) => {
    const component = shallow(<HeadLine {...props}/>)
    return component
}

describe("Headline Component",()=>{
   describe('Checking PropTypes',()=>{
       it('Should not throw a warning',()=>{

        const expectedProps ={
            header: 'Test Header',
            desc: 'Test Desc',
            tempArr: [{
                fName: 'Test fName',
                lName: 'Test lName',
                email: 'test@email.com',
                age: 33,
                onlineStatus: false
            }]
        }
        const propsErr = checkProps(HeadLine, expectedProps)
        expect(propsErr).toBeUndefined();
   })

 describe("Have props",()=>{
    let wrapper;
    beforeEach(()=>{
        const props = {
            header: 'Test Header',
            desc: 'Test Desc'
        }
        wrapper =setUp(props)
    })
    it('Should render without errors',()=>{
        const component = findByTestArr(wrapper,'headlineComponent')
        expect(component.length).toBe(1)
    })
    it('Should Render a H1',()=>{
        const h1 = findByTestArr(wrapper,'header')
        expect(h1.length).toBe(1)
    })
    it('Should Render a desc',()=>{
        const desc = findByTestArr(wrapper,'desc')
        expect(desc.length).toBe(1)
    })

 })

 describe("Have No props",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setUp()
    })
    it('Should not render',()=>{
        const component = findByTestArr(wrapper,'headlineComponent')
        expect(component.length).toBe(0)
    })
 })
})
})
