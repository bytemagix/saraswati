import styles from "./BookTutorForm.module.css";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import TextAreaBox from "../../../Utils/UI/TextAreaBox/TextAreaBox";
import { useState, useEffect } from "react";
import { localUrl } from "../../../../constants/urls";

const BookTutorForm = props => {
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [cityId, setCityId] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [cities, setCities] = useState([]);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const mobileNoChangeHandler = (event) => {
        setMobileNo(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    

    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        //Validate Data
        const formData = new FormData();
        formData.append("studentName",name);
        formData.append("studentMobileNo", mobileNo);
        formData.append("studentEmailId", email);
        formData.append("city",city);
        formData.append("address",address);

        const res = await fetch(`${localUrl}/home-tutor/request-home-tutor`,{
          method : "POST",
          body : formData,
        });

        const data = await res.json();
        console.log(data);
    }

    const fetchCities = async () => {
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
      setCities(cityList);
  
      if (cities.length !== 0) {
        setCityId(cities[0].cityId);
        setCity(cities[0].city);
      }
    };


    const cityChangeHandler = (event) => {
      setCityId(event.target.value);
  
      const city = cities.find(
        (item) => item.cityId === event.target.value
      );
      setCity(city.city);
    };

    useEffect(()=> {
      fetchCities();
    },[]);

  return (
    <div className={styles["booking"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span>Ask for a Home Tutor</span>
        </div>
        <hr />

        <div className={styles["form"]}>
          <form onSubmit={formSubmitHandler} className={styles["form-controls"]}>
            <InputBox
              label="Name"
              id="student-name"
              type="text"
              value={name}
              onChange={nameChangeHandler}
            />

            <InputBox
              label="Mobile No"
              id="student-mobileNo"
              type="text"
              value={mobileNo}
              onChange={mobileNoChangeHandler}
            />

            <InputBox
              label="Email Id"
              id="student-email"
              type="text"
              value={email}
              onChange={emailChangeHandler}
            />

            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>
                City
              </label>
              <select
                onChange={cityChangeHandler}
                value={cityId}
                className={styles["form-control__select"]}
              >

                {cities.map((item) => {
                  return (
                    <option key={item.cityId} value={item.cityId}>
                      {item.city}
                    </option>
                  );
                })}
              </select>
            </div>

            <TextAreaBox
              label="Address"
              type="text"
              id="address"
              rows="4"
              value={address}
              onChange={addressChangeHandler}
            />

            <div className={styles["actions"]}>
              <button type="submit">Book Tutor</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTutorForm;
