const Profile = require("../../../models/profile");

class ProfileForm  extends Profile {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Sex:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

                <label>
                    Date of Birth:
                    <input type="date" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

                <label>
                    Race:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="black">Black/African American</option>
                        <option value="spanish">Hispanic/Latino</option>
                        <option value="asian">Asian</option>
                        <option value="indian">Indian/Native American</option>
                        <option value="white">White/Caucasian</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />

                <label>
                    Bodystyle:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

                <label>
                    Bio:
                     <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

            </form>
        );
    }
}

module.exports = ProfileForm;