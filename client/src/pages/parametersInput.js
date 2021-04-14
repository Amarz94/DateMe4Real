<<<<<<< HEAD
function Param() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Preferred Age:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="range1">18-23</option>
                        <option value="range2">24-30</option>
                        <option value="range3">31-45</option>
                        <option value="range4">46+</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />

                <label>
                        Preferred Sex:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

                <label>
                        Preferred Bodystyle:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

                <label>
                        Preferred Race:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

            </form>
            </div>
    )}


export default Param;
=======
class ParametersForm extends Parameters {
  constructor(props) {
    super(props);
    this.state = { value: "" };

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
          Preferred Age:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="range1">18-23</option>
            <option value="range2">24-30</option>
            <option value="range3">31-45</option>
            <option value="range4">46+</option>
          </select>
        </label>
        <input type="submit" value="Submit" />

        <label>
          Preferred Sex:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />

        <label>
          Preferred Bodystyle:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />

        <label>
          Preferred Race:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports = ParametersForm;
>>>>>>> 5c76440e1bfd4e881b6d6e56de3ed3b7a0391336
