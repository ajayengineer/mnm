import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import TreeMenu from './TreeMenu';

const AttributeLavelData = [
    {
        value: "Asia",
        id: 1
    },
    {
        value: "Country",
        id: 2
    },
    {
        value: "City",
        id: 3
    },
    {
        value: "State",
        id: 4
    },
    {
        value: "Delhi",
        id: 5
    },
];

const GeographicalHierarchy = () => {
    const initialValues = { AttributeLevel: "", AttributeParent: "", AttributeCode: "", AttributeName: "" };
    const [formsValues, setformsValues] = useState(initialValues);

    //For Error Validation Part
    const [formsErrors, setFormsErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    useEffect(() => {
        console.log(formsErrors);
        if (Object.keys(formsErrors).length === 0 && isSubmit) {
            console.log(formsValues);
        }
    }, [formsErrors]);

    //Validation Inner Items
    const validate = (values) => {
        const errors = {};
        if (!values.AttributeLevel) {
            errors.AttributeLevel = "Attribute Level is required!";
        }
        if (!values.AttributeParent) {
            errors.AttributeParent = "Attribute Parent is required!";
        }
        if (!values.AttributeCode) {
            errors.AttributeCode = "Attribute Code is required!";
        } else if (values.AttributeCode.length < 3) {
            errors.AttributeCode = "Attribute Code Number must be Minimum 3 characters ";
        }
        if (!values.AttributeName) {
            errors.AttributeName = "Attribute Name is required!";
        }
        return errors;
    }

    // End Validation Part

    const handaleChange = (e) => {
        const { name, value } = e.target;
        setformsValues({ ...formsValues, [name]: value });
        console.log(formsValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormsErrors(validate(formsValues));
        setIsSubmit(true);
    }



    return (
        <div className='row d-flex justify-content-center text-center py-5'>

            <div className='row bg-primary'>
                <div className='col-md-5'><TreeMenu /></div>
                <div className='col-md-7'><SearchBar /></div>
            </div>

            <div className='col-md-12 d-flex justify-content-center text-center py-5'>
                {Object.keys(formsErrors).length === 0 && isSubmit ? (<div className='col-md-6 text-success'>Attribute Level Has been Created!</div>) : (
                    <ul className='col-md-6 card mt-5'>
                        <li>
                            <p className='text-primary'>{formsValues.AttributeLevel}</p>
                            <p className='text-secondary'>{formsValues.AttributeParent}</p>
                            <p className='text-info'>{formsValues.AttributeCode}</p>
                            <p className='text-success'>{formsValues.AttributeName}</p>
                        </li>
                    </ul>
                )}
            </div>

            <div className='col-md-5 custom--forms'>
                <form action='' onSubmit={handleSubmit}>
                    <label>
                        Attribute Level
                        <select name="AttributeLevel"
                            value={formsValues.AttributeLevel}
                            onChange={handaleChange}>
                            {AttributeLavelData.map((attlevel) => (
                                <option key={attlevel.id} value={attlevel.value}>{attlevel.value}</option>
                            ))}
                        </select>
                        <p> {formsErrors.AttributeLevel} </p>
                    </label>
                    <label>
                        Parent
                        <input
                            type="text"
                            name="AttributeParent"
                            value={formsValues.AttributeParent}
                            onChange={handaleChange}
                            id="AttributeParent"
                            autoComplete='off'
                        />
                        <p> {formsErrors.AttributeParent} </p>

                    </label>
                    <label>
                        Code
                        <input
                            type="text"
                            name="AttributeCode"
                            value={formsValues.AttributeCode}
                            onChange={handaleChange}
                            id="phone"
                            autoComplete='off'
                        />
                        <p> {formsErrors.AttributeCode} </p>
                    </label>
                    <label>
                        Name
                        <input
                            type="text"
                            name="AttributeName"
                            value={formsValues.AttributeName}
                            onChange={handaleChange}
                            id="AttributeName"
                            autoComplete='off'
                        />
                        <p> {formsErrors.AttributeName} </p>
                    </label>
                    <button className='btn btn-dark'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default GeographicalHierarchy;