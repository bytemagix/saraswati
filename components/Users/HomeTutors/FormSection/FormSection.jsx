import styles from "./FormSection.module.css";
import InputBox3 from "../../../Utils/UI/InputBox3/InputBox3";
import { useState, useEffect } from "react";
import SelectCityBox from "./SelectCityBox/SelectCityBox";
import SelectSubjectBox from "./SelectSubjectBox/SelectSubjectBox";
import AddressBox from "./AddressBox/AddressBox";
import DescriptionBox from "./DescriptionBox/DescriptionBox";
import { baseUrl, localUrl } from "../../../../constants/urls";
import BlueCircleLoader from "../../../Utils/UI/BlueCircleLoader/BlueCircleLoader";

const FormSection = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [nameHasError, setNameHasError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");

  const [mobileNo, setMobileNo] = useState("");
  const [isMobileNoTouched, setIsMobileNoTouched] = useState(false);
  const [mobileNoHasError, setMobileNoHasError] = useState(false);
  const [mobileNoErrorMsg, setMobileNoErrorMsg] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [cityId, setCityId] = useState("");
  const [city, setCity] = useState("");
  const [subId, setSubId] = useState("");
  const [subject, setSubject] = useState("");

  const [address, setAddress] = useState("");
  const [isAddressTouched, setIsAddressTouched] = useState(false);
  const [addressHasError, setAddressHasError] = useState(false);
  const [addressErrorMsg, setAddressErrorMsg] = useState("");

  const [description, setDescription] = useState("");

  const [standard, setStandard] = useState("");
  const [isStandardTouched, setIsStandardTouched] = useState(false);
  const [standardHasError, setStandardHasError] = useState(false);
  const [standardErrorMsg, setStandardErrorMsg] = useState("");

  const [cities, setCities] = useState([]);

  const [subjects, setSubjects] = useState([]);
  const [statusMessage, setStatusMessage] = useState(
    "We recieved your requirements. We will contact you soon. Thank You."
  );
  const [status, setStatus] = useState("NEW");

  const nameChangeHandler = (event) => {
    const val= event.target.value;
    setIsNameTouched(true);
    setName(val);

    if(val.length === 0){
      setNameHasError(true);
      setNameErrorMsg("* Name field can not be empty")
    }else{
      setNameHasError(false);
      setNameErrorMsg("");
    }
  };

  const mobileNoChangeHandler = (event) => {
    const val= event.target.value;
    setIsMobileNoTouched(true);
    setMobileNo(val);

    if(val.length === 0){
      setMobileNoHasError(true);
      setMobileNoErrorMsg("* Mobile No field can not be empty")
    }else{
      setMobileNoHasError(false);
      setMobileNoErrorMsg("");
    }
  };

  const emailChangeHandler = (event) => {
    const val= event.target.value;
    setIsEmailTouched(true);
    setEmail(val);

    if(val.length === 0){
      setEmailHasError(true);
      setEmailErrorMsg("* Email Id field can not be empty")
    }else{
      setEmailHasError(false);
      setEmailErrorMsg("");
    }
  };

  const addressChangeHandler = (event) => {
    const val= event.target.value;
    setIsAddressTouched(true);
    setAddress(val);

    if(val.length === 0){
      setAddressHasError(true);
      setAddressErrorMsg("* Address field can not be empty")
    }else{
      setAddressHasError(false);
      setAddressErrorMsg("");
    }
  };

  const standardChangeHandler = (event) => {
    const val= event.target.value;
    setIsStandardTouched(true);
    setStandard(val);

    if(val.length === 0){
      setStandardHasError(true);
      setStandardErrorMsg("* Class field can not be empty")
    }else{
      setStandardHasError(false);
      setStandardErrorMsg("");
    }
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    if(!isNameTouched || nameHasError){
      setNameHasError(true);
      setNameErrorMsg("* Name field can not be empty");
      setIsLoading(false);
      return;
    }

    if(!isMobileNoTouched || mobileNoHasError){
      setMobileNoHasError(true);
      setMobileNoErrorMsg("* Mobile No field can not be empty");
      setIsLoading(false);
      return;
    }

    if(!isEmailTouched || emailHasError){
      setEmailHasError(true);
      setEmailErrorMsg("* Email Id field can not be empty");
      setIsLoading(false);
      return;
    }

    if(!isStandardTouched || standardHasError){
      setStandardHasError(true);
      setStandardErrorMsg("* Class field can not be empty");
      setIsLoading(false);
      return;
    }


    if(!isAddressTouched || addressHasError){
      setAddressHasError(true);
      setAddressErrorMsg("* Address field can not be empty");
      setIsLoading(false);
      return;
    }

    //Validate Data
    const formData = new FormData();
    formData.append("studentName", name);
    formData.append("studentMobileNo", mobileNo);
    formData.append("studentEmailId", email);
    formData.append("city", city);
    formData.append("subject", subject);
    formData.append("standard", standard);
    formData.append("description", description);
    formData.append("address", address);

    const res = await fetch(`${baseUrl}/home-tutor/request-home-tutor`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if(data.name === "OK"){
      setStatus("SEND");
      resetForm();
    }
    setIsLoading(false);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMobileNo("");
    setStandard("");
    setAddress("");
    setDescription("");
  }

  const fetchCities = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Cities.json"
    );
    const data = await res.json();

    let cityList = [];
    for (const key in data) {
      const cat = data[key];
      cityList.push(cat);
    }

    if (cityList.length !== 0) {
      setCities(cityList);
      setCityId(cityList[0].cityId);
      setCity(cityList[0].city);
    }

    setIsLoading(false);
  };

  const fetchSubjects = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Subjects.json"
    );
    const data = await res.json();

    let subjectList = [];
    for (const key in data) {
      const sub = data[key];
      subjectList.push(sub);
    }

    if (subjectList.length !== 0) {
      setSubjects(subjectList);
      setSubId(subjectList[0].subId);
      setSubject(subjectList[0].subject);
    }

    setIsLoading(false);
  };

  const cityChangeHandler = (event) => {
    setCityId(event.target.value);

    const city = cities.find((item) => item.cityId === event.target.value);
    setCity(city.city);
  };

  const subjectChangeHandler = (event) => {
    setSubId(event.target.value);

    const sub = subjects.find((item) => item.subId === event.target.value);
    setSubject(sub.subject);
  };

  useEffect(() => {
    fetchCities();
    fetchSubjects();
  }, []);

  return (
    <div className={styles["form-section"]}>
      <div className={styles["left"]}>
        <div className={styles["contents"]}>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>Ask for a Home Tutor Today</span>
          </div>
          <div className={styles["description"]}>
            <p>
              Want a Expert Home Tutor? Don't worry, we get you cover. You can
              just fill up the form providing us your infomation, Home Address &
              Specify your requirements. We will provide our Expert Tutor best
              fit for your requirement.
            </p>
          </div>
        </div>
      </div>

      <div className={styles["right"]}>
        <div className={styles["row"]}>
          <InputBox3
            label="Name"
            id="name"
            type="text"
            value={name}
            onChange={nameChangeHandler}
            hasError={nameHasError}
            errorMsg={nameErrorMsg}
          />
          <InputBox3
            label="Mobile No"
            id="mobileNo"
            type="text"
            value={mobileNo}
            onChange={mobileNoChangeHandler}
            hasError={mobileNoHasError}
            errorMsg={mobileNoErrorMsg}
          />
        </div>
        <div className={styles["row"]}>
          <InputBox3
            label="Email"
            id="email"
            type="text"
            value={email}
            onChange={emailChangeHandler}
            hasError={emailHasError}
            errorMsg={emailErrorMsg}
          />
          <SelectCityBox
            label="City"
            value={city}
            onChange={cityChangeHandler}
            data={cities}
          />
        </div>
        <div className={styles["row"]}>
          <SelectSubjectBox
            label="Subject"
            value={subject}
            onChange={subjectChangeHandler}
            data={subjects}
          />
          <InputBox3
            label="Class"
            id="subject"
            type="text"
            value={standard}
            onChange={standardChangeHandler}
            hasError={standardHasError}
            errorMsg={standardErrorMsg}
          />
        </div>
        <div className={styles["row"]}>
          <AddressBox
            label="Complete Address"
            type="text"
            id="address"
            value={address}
            onChange={addressChangeHandler}
            hasError={addressHasError}
            errorMsg={addressErrorMsg}
          />
        </div>
        <div className={styles["row"]}>
          <DescriptionBox
            label="Specify Your Requirements"
            type="text"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className={styles["row"]}>
          <div className={styles["btn-box"]}>
            <span className={styles["btn-title"]} onClick={formSubmitHandler}>
              Get Home Tutor
            </span>
          </div>
        </div>

        {status === "SEND" && (
          <div className={styles["message-box"]}>
            <p>{statusMessage}</p>
          </div>
        )}

        {isLoading && (
          <div className={styles["loading"]}>
            <BlueCircleLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSection;