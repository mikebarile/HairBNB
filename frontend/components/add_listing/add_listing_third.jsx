import React from 'react';
import { Link, withRouter } from 'react-router';

class AddListingThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.textUpdate = this.textUpdate.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentDidMount() {
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

  handleNext() {
    if (this.state.title < 50 && this.state.title >=0 &&
      this.state.description < 500 && this.state.description >= 0 &&
      this.state.url !== null && this.state.image_errors.length === 0) {
        return "alf-next";
    }
    else {
      return "alf-next-dead";
    }
  }

  handleNextClick(e) {
    e.preventDefault;
    if (this.state.title < 50 && this.state.title >=0 &&
      this.state.description < 500 && this.state.description >= 0 &&
      this.state.url !== null && this.state.image_errors.length === 0) {
        this.props.updateListingForm({current_form: "set-the-scene"});
        this.props.router.push('/become-a-host/scene');
    }
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-listing-form">
        <div className="alf-first-half">
          <div className="alf-col-first">
            <div className="alf-form">
              <span className="alf-field-title alf-extra-margin">Where's your place located?</span>

              <span className="alf-add-title">Country</span>
              <div className="alf-input-row">
                <select
                  ref="countryField"
                  className="alf-country">
                  <option value='Afghanistan'>Afghanistan</option>
                  <option value='Algeria'>Algeria</option>
                  <option value='Angola'>Angola</option>
                  <option value='Argentina'>Argentina</option>
                  <option value='Armenia'>Armenia</option>
                  <option value='Australia'>Australia</option>
                  <option value='Austria'>Austria</option>
                  <option value='Azerbaijan'>Azerbaijan</option>
                  <option value='Bahrain'>Bahrain</option>
                  <option value='Bangladesh'>Bangladesh</option>
                  <option value='Belarus'>Belarus</option>
                  <option value='Belgium'>Belgium</option>
                  <option value='Bolivia'>Bolivia</option>
                  <option value='Brazil'>Brazil</option>
                  <option value='Bulgaria'>Bulgaria</option>
                  <option value='Burkina Faso'>Burkina Faso</option>
                  <option value='Cambodia'>Cambodia</option>
                  <option value='Cameroon'>Cameroon</option>
                  <option value='Canada'>Canada</option>
                  <option value='Chad'>Chad</option>
                  <option value='Chile'>Chile</option>
                  <option value='China'>China</option>
                  <option value='Colombia'>Colombia</option>
                  <option value='Costa Rica'>Costa Rica</option>
                  <option value='Cuba'>Cuba</option>
                  <option value='Czech Republic'>Czech Republic</option>
                  <option value='Democratic Republic of the Congo'>Democratic Republic of the Congo</option>
                  <option value='Denmark'>Denmark</option>
                  <option value='Dominican Republic'>Dominican Republic</option>
                  <option value='Ecuador'>Ecuador</option>
                  <option value='Egypt'>Egypt</option>
                  <option value='El Salvador'>El Salvador</option>
                  <option value='Ethiopia'>Ethiopia</option>
                  <option value='Finland'>Finland</option>
                  <option value='France'>France</option>
                  <option value='Georgia'>Georgia</option>
                  <option value='Germany'>Germany</option>
                  <option value='Ghana'>Ghana</option>
                  <option value='Greece'>Greece</option>
                  <option value='Guatemala'>Guatemala</option>
                  <option value='Guinea'>Guinea</option>
                  <option value='Haiti'>Haiti</option>
                  <option value='Honduras'>Honduras</option>
                  <option value='Hungary'>Hungary</option>
                  <option value='India'>India</option>
                  <option value='Indonesia'>Indonesia</option>
                  <option value='Iran'>Iran</option>
                  <option value='Iraq'>Iraq</option>
                  <option value='Ireland'>Ireland</option>
                  <option value='Israel'>Israel</option>
                  <option value='Italy'>Italy</option>
                  <option value='Ivory Coast'>Ivory Coast</option>
                  <option value='Japan'>Japan</option>
                  <option value='Jordan'>Jordan</option>
                  <option value='Kazakhstan'>Kazakhstan</option>
                  <option value='Kenya'>Kenya</option>
                  <option value='Kuwait'>Kuwait</option>
                  <option value='Lebanon'>Lebanon</option>
                  <option value='Liberia'>Liberia</option>
                  <option value='Libya'>Libya</option>
                  <option value='Madagascar'>Madagascar</option>
                  <option value='Malaysia'>Malaysia</option>
                  <option value='Mali'>Mali</option>
                  <option value='Mexico'>Mexico</option>
                  <option value='Mongolia'>Mongolia</option>
                  <option value='Morocco'>Morocco</option>
                  <option value='Mozambique'>Mozambique</option>
                  <option value='Myanmar'>Myanmar</option>
                  <option value='Nepal'>Nepal</option>
                  <option value='Netherlands'>Netherlands</option>
                  <option value='New Zealand'>New Zealand</option>
                  <option value='Niger'>Niger</option>
                  <option value='Nigeria'>Nigeria</option>
                  <option value='North Korea'>North Korea</option>
                  <option value='Pakistan'>Pakistan</option>
                  <option value='Panama'>Panama</option>
                  <option value='Paraguay'>Paraguay</option>
                  <option value='Peru'>Peru</option>
                  <option value='Philippines'>Philippines</option>
                  <option value='Poland'>Poland</option>
                  <option value='Portugal'>Portugal</option>
                  <option value='Puerto Rico'>Puerto Rico</option>
                  <option value='Qatar'>Qatar</option>
                  <option value='Republic of the Congo'>Republic of the Congo</option>
                  <option value='Romania'>Romania</option>
                  <option value='Russia'>Russia</option>
                  <option value='Rwanda'>Rwanda</option>
                  <option value='Saudi Arabia'>Saudi Arabia</option>
                  <option value='Senegal'>Senegal</option>
                  <option value='Serbia'>Serbia</option>
                  <option value='Sierra Leone'>Sierra Leone</option>
                  <option value='Singapore'>Singapore</option>
                  <option value='Somalia'>Somalia</option>
                  <option value='South Africa'>South Africa</option>
                  <option value='South Korea'>South Korea</option>
                  <option value='Spain'>Spain</option>
                  <option value='Sri Lanka'>Sri Lanka</option>
                  <option value='Sudan'>Sudan</option>
                  <option value='Sweden'>Sweden</option>
                  <option value='Switzerland'>Switzerland</option>
                  <option value='Syria'>Syria</option>
                  <option value='Taiwan'>Taiwan</option>
                  <option value='Tanzania'>Tanzania</option>
                  <option value='Thailand'>Thailand</option>
                  <option value='Togo'>Togo</option>
                  <option value='Tunisia'>Tunisia</option>
                  <option value='Turkey'>Turkey</option>
                  <option value='Uganda'>Uganda</option>
                  <option value='Ukraine'>Ukraine</option>
                  <option value='United Arab Emirates'>United Arab Emirates</option>
                  <option value='United Kingdom'>United Kingdom</option>
                  <option value='United States' selected>United States</option>
                  <option value='Uruguay'>Uruguay</option>
                  <option value='Uzbekistan'>Uzbekistan</option>
                  <option value='Venezuela'>Venezuela</option>
                  <option value='Vietnam'>Vietnam</option>
                  <option value='Yemen'>Yemen</option>
                  <option value='Zambia'>Zambia</option>
                  <option value='Zimbabwe'>Zimbabwe</option>
                </select>
              </div>

              <span className="alf-add-title">Street Address</span>
              <div className="alf-input-row">
                <textarea
                  ref="streetField"
                  placeholder="e.g. 123 Main Street"
                  className="alf-text-full-add"
                  onKeyUp={this.textUpdate("street_address", 50)}>
                </textarea>
              </div>

              <span className="alf-add-title">Apt, Suite, Bldg. (optional)</span>
              <div className="alf-input-row">
                <textarea
                  ref="aptField"
                  placeholder="e.g. Apt #7"
                  className="alf-text-full-add"
                  onKeyUp={this.textUpdate("apt_num", 50)}>
                </textarea>
              </div>

              <div className="alf-add-row">
                <div className="alf-add-col">
                  <span className="alf-add-title">City</span>
                  <div className="alf-input-row">
                    <textarea
                      placeholder="e.g. San Francisco"
                      ref="cityField"
                      className="alf-text-half-add"
                      onKeyUp={this.textUpdate("city")}>
                    </textarea>
                  </div>
                </div>

                <div className="alf-add-col">
                  <span className="alf-add-title">State</span>
                  <div className="alf-input-row">
                    <textarea
                      placeholder="e.g. CA"
                      ref="stateField"
                      className="alf-text-half-add"
                      onKeyUp={this.textUpdate("city")}>
                    </textarea>
                  </div>
                </div>
              </div>

              <span className="alf-add-title">Zip Code</span>
              <div className="alf-input-row">
                <textarea
                  placeholder="e.g. 94102"
                  ref="zipField"
                  className="alf-text-half-add"
                  onKeyUp={this.textUpdate("zip_code", 50)}>
                </textarea>
              </div>

              <span className="alf-add-title">Price Per Night</span>
              <div className="alf-input-row">
                <textarea
                  placeholder="e.g. 100.00"
                  ref="priceField"
                  className="alf-text-full-add"
                  onKeyUp={this.textUpdate("price")}>
                </textarea>
              </div>
            </div>

            <div className="alf-nav">
              <Link to="/become-a-host/scene" className="alf-back">Back</Link>
              <button className={this.handleNext()} onClick={this.handleNextClick}>Submit</button>
            </div>
          </div>
        </div>

        <div className="alf-second-half">
          <div className="alf-col-second">
            <div className="alf-tip-box">
              <img className="alh-tip-icon" src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478477881/Icons/Screen_Shot_2016-11-06_at_4.17.32_PM.png"/>
              <span className="alf-tip-content">
                It's the final stretch! Fill out your address information, set a price and you'll be ready to get started hosting.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddListingThird);
