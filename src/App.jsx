import React from 'react'
import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
              name: "",
              email: "",  
              phone: "",
              education: "",  
              graduationDate: "",
              company: "",
              position: "",
              responsibilities: "",
              date: "",
            },
            submittingState: 'not-submitted'
        };
    }

    handleChangeField = ({target}) => {
        const { form } = this.state
        this.setState({ form: { ...form, [target.name]: target.value } })
        console.log(this.state);
        
    };

    handleSubmitForm = (e) => {
        e.preventDefault()
        this.setState({ submittingState: 'submitted' })
        console.log(this.state);
    }

    resetForm = () => {
        this.setState({ submittingState: 'not-submitted' })
    }

    renderForm() {
      const { name, email, phone, education, graduationDate, company, position, responsibilities, date } = this.state.form
       
      
      return (
      <form onSubmit={this.handleSubmitForm} name="myForm" className="form">
        <div>
          <div>User Info</div>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
            type="text"
            name="name"
            onChange={this.handleChangeField}
            value={name}
            id="name"
            placeholder="Name"
            className="form-input"
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
            type="email"
            name="email"
            onChange={this.handleChangeField}
            value={email}
            id="email"
            placeholder="Email"
            className="form-input"
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
            type="tel"
            onChange={this.handleChangeField}
            value={phone}
            name="phone"
            id="phone"
            placeholder="+7 (___) ___-__-__"
            pattern="^\+?[0-9\s\-\(\)]{7,}$"
            className="form-input"
            required
            />
        </div>
        </div>

        <div>
          <div>Education</div>
          <div className="form-group">
              <label htmlFor="education" className="form-label">Education</label>
              <input
              type="text"
              onChange={this.handleChangeField}
              value={education}
              name="education"
              id="education"
              placeholder="e.g. Bachelor's Degree in Computer Science"
              className="form-input"
              required
              />
          </div>
          <div className="form-group">
              <label htmlFor="graduationDate" className="form-label">Graduation Date</label>
              <input
              type="date"
              onChange={this.handleChangeField}
              value={graduationDate}
              name="graduationDate"
              id="graduationDate"
              placeholder="Select graduation date"
              className="form-input"
              required
              />
          </div>
        </div>

        <div>
          <div>Work Experience</div>
          <div className="form-group">
              <label htmlFor="company" className="form-label">Company</label>
              <input
              type="text"
              onChange={this.handleChangeField}
              value={company}
              name="company"
              id="company"
              placeholder="e.g. Google"
              className="form-input"
              required
              />
          </div>
          <div className="form-group">
              <label htmlFor="job" className="form-label">Position</label>
              <input
              type="text"
              onChange={this.handleChangeField}
              value={position}
              name="position"
              id="position"
              placeholder="e.g. Software Engineer"
              className="form-input"
              required
              />
          </div>
          <div className="form-group">
              <label htmlFor="responsibilities" className="form-label">Responsibilities</label>
              <input
              type="text"
              onChange={this.handleChangeField}
              value={responsibilities}
              name="responsibilities"
              id="responsibilities"
              placeholder="List your main responsibilities.."
              className="form-input"
              required
              />
          </div>
          <div className="form-group">
              <label htmlFor="date" className="form-label">Date</label>
              <input
              type="month"
              onChange={this.handleChangeField}
              value={date}
              name="date"
              id="date"
              placeholder="Select month and year"
              className="form-input"
              required
              />
          </div>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
      )
    }

    renderResults() {
      return (
        <div className="results">
          <h2>Results</h2>
          <p>Name: {this.state.form.name}</p>
          <p>Email: {this.state.form.email}</p>
          <p>Phone: {this.state.form.phone}</p>
          <p>Education: {this.state.form.education}</p>
          <p>Graduation Date: {this.state.form.graduationDate}</p>
          <p>Company: {this.state.form.company}</p>
          <p>Position: {this.state.form.position}</p>
          <p>Responsibilities: {this.state.form.responsibilities}</p>
          <p>Date: {this.state.form.date}</p>
          <button onClick={this.resetForm}>Reset</button>
        </div>
      );
    }

    render(){
      return(
        this.state.submittingState === 'not-submitted' ? this.renderForm() :
        this.state.submittingState === 'submitted' ? this.renderResults() :
        null
      )
    }
   
  }

