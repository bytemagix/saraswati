import Head from "next/head";
import AdminLayout from "../../../components/Utils/AdminLayout/AdminLayout";
import AddNewBook from "../../../components/AdminDashboard/ManageStudyMaterials/ManageBooks/AddNewBook/AddNewBook";

export default function AddNewBookPage(props) {
  return (
    <AdminLayout>
      <Head>
        <title>Saraswati Tutorials</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddNewBook />
    </AdminLayout>
  );
}