import React from 'react'

class AddRobotForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            number: '',
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.number]: e.target.value,
            [e.target.email]: e.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        value={this.state.name}
                    />
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="number"
                        value={this.state.number}
                    />
                    <input
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        value={this.state.email}
                    />

                </form>
            </React.Fragment>
        )
    }
}

export default AddRobotForm