import Head from "next/head";
import { useSelector } from "react-redux";
import AdminLogin from "../../../components/AdminDashboard/AdminLogin";
import AdminLayout from "../../../components/Utils/AdminLayout/AdminLayout";
import AddNewPoster from "../../../components/AdminDashboard/ManagePosters/AddNewPoster/AddNewPoster";

export default function AddNewBookPage(props) {
  const auth = useSelector(state=> state.adminSlice.authInfo);
  if(!auth.isAuthenticated){
    return <AdminLogin />
  }
  
  return (
    <AdminLayout>
      <Head>
        <title>Saraswati Tutorials</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddNewPoster />
    </AdminLayout>
  );
}