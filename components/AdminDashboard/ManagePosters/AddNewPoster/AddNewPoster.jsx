import styles from "./AddNewPoster.module.css";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { localUrl, baseUrl } from "../../../../constants/urls";
import ButtonOrange from "../../../Utils/UI/Buttons/ButtonOrange/ButtonOrange";
import ButtonSubmit from "../../../Utils/UI/Buttons/ButtonSubmit/ButtonSubmit";
import ButtonClear from "../../../Utils/UI/Buttons/ButtonClear/ButtonClear";
import WhiteCircleLoader from "../../../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";
import { redirectUrls } from "../../../../constants/redirect-urls";

const AddNewPoster = (props) => {
  const auth = useSelector((state) => state.adminSlice.authInfo);
  const [isLoading, setIsLoading] = useState(false);

  const [choosenRedirectUrlId, setChoosenRedirectUrlId] = useState("1");
  const [choosenRedirectUrl, setChoosenRedirectUrl] = useState("None");

  const [posterUrl, setPosterUrl] = useState("");
  const [choosenPosterFile, setChoosenPosterFile] = useState(null);
  const [successPosterFile, setSuccessPosterFile] = useState("");


  const redirectUrlChangeHandler = (event) => {
    setChoosenRedirectUrlId(event.target.value);

    const selected = redirectUrls.find((item) => item.rurlId === event.target.value);
    console.log(selected);

    setChoosenRedirectUrl(selected.url);
  };


  const posterChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setChoosenPosterFile(event.target.files[0]);
  };

  const uploadPosterHandler = async () => {
    if (!choosenPosterFile) {
      setSuccessPosterFile("Error Uploading");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("token", auth.token);
    formData.append("file", choosenPosterFile);

    const res = await fetch(`${localUrl}/admin/upload-hero-poster`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    if (data.isUploaded) {
      setSuccessPosterFile("SuccessFully Uploaded");
      setPosterUrl(data.posterUrl);
    } else {
      setSuccessPosterFile("Error Uploading");
    }

    setIsLoading(false);
  }

  const addPosterHandler = async (event) => {
    event.preventDefault();

    //Validate Data

    setIsLoading(true);

    const formData = new FormData();
    formData.append("token", auth.token);
    formData.append("redirectUrl", choosenRedirectUrl);
    formData.append("posterUrl", posterUrl);

    const res = await fetch(`${localUrl}/admin/add-hero-poster`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    resetFormHandler();
    setIsLoading(false);
  };

  const resetFormHandler = () => {
    
  }

  let selectOptions;
  selectOptions = redirectUrls.map((item) => {
    return (
      <option key={item.rurlId} value={item.rurlId}>
        {item.url}
      </option>
    );
  });

  return (
    <div className={styles["container"]}>
      <div className={styles["add-book"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>Add New Poster</span>
        </div>
        <div className={styles["divider"]}>
          <hr />
        </div>
        <div>
          <form onSubmit={addPosterHandler}>

            <div className={styles["form-control"]}>
              <label className={styles["form-control__label"]}>
                Redirect Url (On Poster Click)
              </label>
              <select
                onChange={redirectUrlChangeHandler}
                value={choosenRedirectUrlId}
                className={styles["form-control__select"]}
              >
                {selectOptions}
              </select>
            </div>

            <div className={styles["upload-file"]}>
              <div className={styles["upload-file-title"]}>
                <span>Upload Poster</span>
              </div>
              <div className={styles["upload-file-inputbox"]}>
                <input type="file" onChange={posterChangeHandler} />
                <div className={styles["upload-btn"]}>
                  <ButtonOrange
                    type="button"
                    title="Upload"
                    onClick={uploadPosterHandler}
                  />
                </div>
              </div>
              <div>
                <span className={styles["upload-success-message"]}>
                  {successPosterFile}
                </span>
              </div>
            </div>

            <div className={styles["divider"]}>
              <hr />
            </div>

            <div className={styles["actions"]}>
              <div className={styles["clear"]}>
                <ButtonClear
                  type="button"
                  title="Clear"
                  onClick={resetFormHandler}
                />
              </div>
              <div className={styles["submit"]}>
                <ButtonSubmit type="submit" title="Add Poster" />
              </div>
            </div>
          </form>
        </div>
      </div>

      {isLoading && (
        <div className={styles["loading"]}>
          <WhiteCircleLoader />
        </div>
      )}
    </div>
  );
};

export default AddNewPoster;