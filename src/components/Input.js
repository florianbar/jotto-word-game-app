import React from 'react';
import { useSelector } from 'react-redux';

const Input = () => {
    const success = useSelector(state => state.success);

    return (
        <div data-test="component-input">            
            {success ? null : (
                <form className="form-inline">
                    <input 
                        data-test="input-box" 
                        type="text" 
                        className="form-control mb-2 mx-sm-3"
                        placeholder="enter guess"
                    />
                    <button 
                        data-test="submit-button"
                        type="submit"
                        className="btn btn-primary mb-2"
                    >
                        Submit
                    </button>
                </form>
            )} 
        </div>
    );
};

export default Input;