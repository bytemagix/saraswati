import Head from "next/head";
import AddNewCourse from "../../../components/AdminDashboard/ManageOnlineClass/AddNewCourse/AddNewCourse";
import AdminLayout from "../../../components/Utils/AdminLayout/AdminLayout";

export default function AdminPage(props) {
  return (
    <AdminLayout>
      <Head>
        <title>Saraswati Tutorials</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddNewCourse />
    </AdminLayout>
  );
}