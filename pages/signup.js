import Head from "next/head";
import Signup from "../components/Users/Authenticate/Signup/Signup";
import Layout from "../components/Utils/Layout/Layout";

export default function SignupPage(props) {
  return (
    <Layout>
      <Head>
        <title>Saraswati Tutorials</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </Layout>
  );
}