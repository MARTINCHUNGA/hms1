import React,{Component} from 'react';

class SignUpForm extends Component{
 
    constructor(props){
        super(props)
        this.state = {
            patient: {
                fullName: "",
                phoneNumber: "",
                email : "",
                password: ""
            }
        }
    }

    handleFullNameChanged(event) {
        var patient        = this.state.patient;
        patient.fullName  = event.target.value;

        this.setState({ patient: patient });
      }
    
      handlePhoneNumberChanged(event) {
        var patient     = this.state.patient;
        patient.phoneNumber = event.target.value;
    
        this.setState({ patient: patient });
      }
    
      handleEmailChanged(event) {
        var patient    = this.state.patient;
        patient.email = event.target.value;
    
        this.setState({ patient: patient });
      }

      handlePasswordChanged(event) {
        var patient    = this.state.patient;
        patient.password = event.target.value;
    
        this.setState({ patient: patient });
      }
    
      handleButtonClicked() {
        console.log(this.state.patient);
      }

      
     handleFormSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };

render(){


    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Patient Sign Up 
                </h1>

                <form onSubmit={this.handleFormSubmit.bind(this)}>
                  <div>
                        <label htmlFor='email'>Full Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='fullname'
                            placeholder='Full Name'
                            value={this.state.patient.fullName}
                            onChange={this.handleFullNameChanged.bind(this)}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Phone Number</label>
                        <input
                            type='phone'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='phonenumber'
                            placeholder='Phone number'
                            value={this.state.patient.phoneNumber}
                            onChange={this.handlePhoneNumberChanged.bind(this)}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            value={this.state.patient.email}
                            onChange={this.handleEmailChanged.bind(this)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            value={this.state.patient.password}
                            onChange={this.handlePasswordChanged.bind(this)}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                            onClick={this.handleButtonClicked.bind(this)}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
   
   
    
};

export default SignUpForm;