import Head from "next/head";
import AdminDashboard from "../../components/AdminDashboard/Admin";
import AdminLayout from "../../components/Utils/AdminLayout/AdminLayout";
import AdminLogin from '../../components/AdminDashboard/AdminLogin';
import { useSelector } from "react-redux";

export default function AdminPage(props) {
  
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
      <AdminDashboard/>
    </AdminLayout>
  );
}