import { useState} from 'react';
import "./Logopg.css";
function ValidatingForm() {
    const initValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const Change=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    const Submit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(val)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const prg=new RegExp("[A-Z]+") 
        const prg1=new RegExp("[a-z]+")
        const prg2=new RegExp("[!@#$%^&*]+")
        if(!val.username)
        errors.username="please fill the column";
        if(!val.email)
        errors.email="invalid email";
        if(!val.password)
        errors.password="invalid password";
        else if(reg.test(val.password) && prg.test(val.password) && prg1.test(val.password) && prg2.test(val.password))
        errors.password="Password is strong";
        else if(reg.test(val.password) && !prg.test(val.password) && !prg1.test(val.password) && !prg2.test(val.password) ||
        !reg.test(val.password) && prg.test(val.password) && !prg1.test(val.password) && !prg2.test(val.password)||
        reg.test(val.password) && !prg.test(val.password) && prg1.test(val.password) && !prg2.test(val.password) ||
        reg.test(val.password) && !prg.test(val.password) && !prg1.test(val.password) && prg2.test(val.password))
        errors.password="Password is weak";
        else if(reg.test(val.password) && prg.test(val.password) && !prg1.test(val.password) && !prg2.test(val.password) ||
        reg.test(val.password) && !prg.test(val.password) && prg1.test(val.password) && !prg2.test(val.password)||
        reg.test(val.password) && !prg.test(val.password) && !prg1.test(val.password) && prg2.test(val.password) ||
        !reg.test(val.password) && prg.test(val.password) && prg1.test(val.password) && !prg2.test(val.password)
        ||!reg.test(val.password) && prg.test(val.password) && !prg1.test(val.password) && prg2.test(val.password)||
        !reg.test(val.password) && !prg.test(val.password) && prg1.test(val.password) && prg2.test(val.password))
        errors.password="Password is Good";
        else if(reg.test(val.password) && prg.test(val.password) && prg1.test(val.password) && !prg2.test(val.password) ||
        reg.test(val.password) && prg.test(val.password) && !prg1.test(val.password) && prg2.test(val.password)||
        reg.test(val.password) && !prg.test(val.password) && prg1.test(val.password) && prg2.test(val.password) ||
        !reg.test(val.password) && prg.test(val.password) && prg1.test(val.password) && prg2.test(val.password))
        errors.password="Password is Good";
        return errors;
    }
    return ( 
        <>
        <center>
        <div className='container'>
            <center>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"green",color:"white"}}>Signed In Successfully</h1>)
                :(<pre>{}</pre>)
            }
        <form onSubmit={Submit}>
            <h1>Form</h1>
            <div className='row'>
                <label>Enter User Name:</label><br/>
                <input type="text" id='username' placeholder='Type User Name Here' 
                value={formValues.username} onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.username}</p>
            <div className='row'>
                <label>Enter E-mail:</label><br/>
                <input type="email" id='email' placeholder='Type Email-id Here'
                 value={formValues.email} onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.email}</p>
            <div className='row'>
                <label>Enter Password:</label><br/>
                <input type="password" id='password' 
                placeholder='Type User Password Here' value={formValues.password} onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p>
            <div className='row'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </center></div>
        </center>
        </>
     );
}
export default ValidatingForm;