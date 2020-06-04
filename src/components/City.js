import React, { useState } from 'react';

function City(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
    	const spacesReplaced = event.target.value.split(' ').join('+');    	
        const cityNamePattern = /^[a-zA-Z\+]+$/;
        const valid = cityNamePattern.test(spacesReplaced);
        console.log(valid);
        console.log(spacesReplaced);
        if (!valid) {
            setValidationError('City Name must be at least 1 character and can consist only of Upper and Lower case letters and Spaces');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onCityChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="NZ City Name"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default City