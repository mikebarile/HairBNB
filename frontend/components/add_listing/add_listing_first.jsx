import React from 'react';
import { Link, withRouter } from 'react-router';

class AddListingFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "title": 50,
      "description": 500,
      image_errors: []
    };
    this.textUpdate = this.textUpdate.bind(this);
    this.handleCounter = this.handleCounter.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    this.props.updateListingForm({host_id: this.props.currentUser.id});
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
  }

  textUpdate(field, max) {
    return (e) => {
      e.target.style.height = "0px";
      e.target.style.height = (e.target.scrollHeight + 1)+"px";
      this.setState({[field]: max - e.target.value.length});
      this.props.updateListingForm({[field]: e.target.value});
    };
  }

  handleCounter(field, min) {
    if (this.state[field] <= min) {
      return `alf-${field}-counter alf-low`;
    }
    else {
      return `alf-${field}-counter`;
    }
  }

  handleFile(e) {
    let file = e.target.files[0];
    let newErrors = [];
    if (file.size > 10000000) {
      newErrors.push("File size cannot exceed 10 MB");
    }
    if (file.type !== "image/jpeg" && file.type !== "image/tif" && file.type !== "png") {
      newErrors.push("File type must be JPEG, TIF, or PNG");
    }
    this.setState({image_errors: newErrors});
    if (newErrors.length === 0) {
      
    }
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-listing-form">
        <div className="alf-first-half">
          <div className="alf-col-first">
            <div className="alf-form">
              <span className="alf-field-title">Name your place</span>
              <div className="alf-input-row">
                <textarea
                  className="alf-text-full"
                  onKeyUp={this.textUpdate("title", 50)}>
                </textarea>
                <span className={this.handleCounter("title", 10)}>{this.state.title}</span>
              </div>

              <span className="alf-field-title">Edit your description</span>
                <div className="alf-input-row">
                  <textarea
                    className="alf-text-full"
                    onKeyUp={this.textUpdate("description", 500)}>
                  </textarea>
                  <span className={this.handleCounter("description", 50)}>{this.state.description}</span>
                </div>

              <span className="alf-field-title">Upload a photo</span>
              <ul className="alf-errors">
                {this.state.image_errors.map((error, idx) => (
                  <span key={idx} className="alf-error">{error}</span>
                ))}
              </ul>
              <input type="file" onChange={this.handleFile}/>
            </div>
            <div className="alf-nav">
              <Link to="/become-a-host" className="alf-back">Back</Link>
              <button className="alf-next">Next</button>
            </div>


          </div>
        </div>

        <div className="alf-second-half">
          <div className="alf-col-second">
            <div className="alf-tip-box">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddListingFirst);
