import React from 'react'
import signUp from '../../assets/signup-bg.jpg';

function SingupForm() {
    return (
        <div>
            <div className="modal modalOne fade" id="signupForm" role="dialog" aria-labelledby="signupFormTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="login_Sign">
                        <div className="loginSign_left">
                            <div className="loginSign_thumb">
                                <img src={signUp} alt="Sign Up" />
                            </div>
                        </div>
                        <div className="loginSign_right">
                            <div className="loginSign_wraper">
                                <h2 className="font50 sec_title">Welcome to Cannabis Capitol</h2>
                                <h3>Create your account</h3>
                                <div className="form_logSign">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="" />
                                    </div>
                                    <button type="submit" className="btn form_logSignSubmit">Sign Up</button>
                                </div>
                                <h5>Already have an account? <button type="button" className="close" data-dismiss="modal"
                                        data-toggle="modal" data-target="#loginForm">
                                        Login Here
                                    </button> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default SingupForm
