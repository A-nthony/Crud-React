import React, {useState, useEffect} from 'react';
import { db } from '../firebase';

const LinkForm = (props) => {

    const initialStateValues = {
        url: '',
        name: '',
        description: ''
    };
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }
    
    const handleSubtmit = e => {
        e.preventDefault();

        
        props.addOrEditLink(values);
        setValues({...initialStateValues});
    }

    const getLinkById = async (id)=> {
        const doc = await db.collection('links').doc(id).get();
        setValues({...doc.data()})
    }

    useEffect(() => {
        if (props.currentId === "") {
            setValues({...initialStateValues});
        }else{
            getLinkById(props.currentId);
        }
    }, [props.currentId]); 

    return (
        <div className="">
        <form className="card card-body" onSubmit={handleSubtmit}>
                <div className="form-group input-group pb-3">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">insert_link</i>
                    </div>
                    <input type="text" className="form-control" placeholder="https://someurl.com" name="url" onChange={handleInputChange} value={values.url}/>
                </div>
                <div className="form-group input-group pb-3">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">create</i>
                    </div>
                    <input type="text" className="form-control" name="name" placeholder="Website name" onChange={handleInputChange} value={values.name}/>
                </div>
                <div className="form-group pb-3">
                    <textarea name="description" rows="3" className="form-control" placeholder="Write a description" onChange={handleInputChange} value={values.description}></textarea>
                </div>
                <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                    {props.currentId===''?'Save':'Update'}
                </button>
                </div>
            </form>
        </div>
        
    )
}

export default LinkForm;