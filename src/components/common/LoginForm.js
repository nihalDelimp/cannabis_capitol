import React from 'react'

function LoginForm() {
    return (
     <div className="modal modalTwo fade" id="loginForm" role="dialog" aria-labelledby="loginFormTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="login_Sign">
                        <div className="loginSign_right">
                            <div className="loginSign_wraper">
                                <h2 className="font50 sec_title">Cannabis Capitol Account login</h2>
                                <form action="" className="form_logSign">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="" />
                                    </div>
                                    <button type="submit" className="btn form_logSignSubmit">Login</button>
                                </form>
                                <h5>Don't have an account? &nbsp; 
                                    <button type="button" className="close" data-dismiss="modal"
                                        data-toggle="modal" data-target="#signupForm">
                                        Sign Up Here
                                    </button> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LoginForm
