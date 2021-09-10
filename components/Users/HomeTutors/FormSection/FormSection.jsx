import styles from "./FormSection.module.css";
import InputBox3 from "../../../Utils/UI/InputBox3/InputBox3";
import { useState, useEffect } from "react";
import SelectCityBox from "./SelectCityBox/SelectCityBox";
import SelectSubjectBox from "./SelectSubjectBox/SelectSubjectBox";
import TextAreaBox from "../../../Utils/UI/TextAreaBox/TextAreaBox";
import AddressBox from "./AddressBox/AddressBox";
import DescriptionBox from "./DescriptionBox/DescriptionBox";
import { localUrl } from "../../../../constants/urls";
import BlueCircleLoader from "../../../Utils/UI/BlueCircleLoader/BlueCircleLoader";

const FormSection = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [cityId, setCityId] = useState("");
  const [city, setCity] = useState("");
  const [subId, setSubId] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [standard, setStandard] = useState("");
  const [cities, setCities] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [statusMessage, setStatusMessage] = useState(
    "We recieved your requirements. We will contact you soon. Thank You."
  );
  const [status, setStatus] = useState("NEW");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const mobileNoChangeHandler = (event) => {
    setMobileNo(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const standardChangeHandler = (event) => {
    setStandard(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    setIsLoading(true);
    event.preventDefault();

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

    const res = await fetch(`${localUrl}/home-tutor/request-home-tutor`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
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
      "https://saraswati-45e10-default-rtdb.firebaseio.com/Test/HomeTutors/Cities.json"
    );
    const data = await res.json();
    console.log(data);

    let cityList = [];
    for (const key in data) {
      const cat = data[key];
      cityList.push(cat);
    }

    console.log(cityList);

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
      "https://saraswati-45e10-default-rtdb.firebaseio.com/Test/HomeTutors/Subjects.json"
    );
    const data = await res.json();
    console.log("Subjects", data);

    let subjectList = [];
    for (const key in data) {
      const sub = data[key];
      subjectList.push(sub);
    }

    console.log(subjectList);

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
            <span className={styles["header-title"]}>Ask for a Home Today</span>
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
          />
          <InputBox3
            label="Mobile No"
            id="mobileNo"
            type="text"
            value={mobileNo}
            onChange={mobileNoChangeHandler}
          />
        </div>
        <div className={styles["row"]}>
          <InputBox3
            label="Email"
            id="email"
            type="text"
            value={email}
            onChange={emailChangeHandler}
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
            label="Standard"
            id="subject"
            type="text"
            value={standard}
            onChange={standardChangeHandler}
          />
        </div>
        <div className={styles["row"]}>
          <AddressBox
            label="Complete Address"
            type="text"
            id="address"
            value={address}
            onChange={addressChangeHandler}
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
