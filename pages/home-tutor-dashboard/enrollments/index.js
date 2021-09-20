import Head from "next/head";
import { useSelector } from "react-redux";
import Enrollment from "../../../components/HomeTutorDashboard/Enrollments/Enrollments";
import HomeTutorLayout from "../../../components/Utils/HomeTutorLayout/HomeTutorLayout";
import HomeTutorLogin from "../../../components/HomeTutorDashboard/HomeTutorAuthenticate/HomeTutorLogin/HomeTutorLogin";

export default function HomeTutorProfilePage(props) {
  const auth = useSelector(state => state.homeTutorUserSlice.authInfo);
  if(!auth.isAuthenticated){
    return <HomeTutorLogin />
  }
  return (
    <HomeTutorLayout>
      <Head>
        <title>Saraswati Tutorials</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Enrollment />
    </HomeTutorLayout>
  );
}