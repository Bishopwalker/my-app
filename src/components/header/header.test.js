import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'
import { findByTestArr } from '../../Utils'

//this is setting up the function so i dont need to run a render every time
const setUp = (props={})=>{
    const component = shallow(<Header {...props} />)
    return component
}
//Function to refactor and easily find by test ID

describe("Header Component",()=>{
    //this is creating component for each test
    let component
    beforeEach(()=>{
        component= setUp()
    })
    it('should render without errors',()=>{
       
        const wrapper = findByTestArr(component,'header-component')
        expect(wrapper.length).toBe(1)
    })
    it('Should render a logo',()=>{
        
        const logo = findByTestArr(component,'logo-img')
        expect(logo.length).toBe(1)
    })
})