import React from 'react';
import * as redux from 'react-redux'
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';

const setup = () => {
    return shallow(<Input />);
};

const useSelectorSpy = jest.spyOn(redux, 'useSelector');

describe("render", () => {
    describe("word has not been guessed", () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: false };
            useSelectorSpy.mockReturnValue(initialState);
            wrapper = setup();
        });

        test("renders component without error", () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test("renders input box", () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });

        test("renders submit button", () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });
    
    describe("word has been guessed", () => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: true };
            useSelectorSpy.mockReturnValue(initialState);
            wrapper = setup();
        });

        test("renders component without error", () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test("does not render input box", () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });

        test("does not render submit button", () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(0);
        });
    });
});

describe("update state", () => {
    //test("", () => {});
});