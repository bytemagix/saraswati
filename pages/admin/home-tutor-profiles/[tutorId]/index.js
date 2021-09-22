import Head from "next/head";
import AdminLayout from "../../../../components/Utils/AdminLayout/AdminLayout";
import ViewProfile from "../../../../components/AdminDashboard/HomeTutorProfiles/ViewProfile/ViewProfile";

export default function ProfileDetailPage(props){
    return (
        <AdminLayout>
        <Head>
          <title>Saraswati Tutorials</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ViewProfile profileData={props.profileData} />
      </AdminLayout>
    );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Profiles.json"
  );
  const data = await res.json();

  let homeTutors = [];
  for (const key in data) {
    const tutor = data[key];
    homeTutors.push(tutor);
  }

  const paths = homeTutors.map((item) => {
    return {
      params: { tutorId: item.tutorId },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const tutorId = context.params.tutorId;

  const res = await fetch(
    `https://saraswati-45e10-default-rtdb.firebaseio.com/HomeTutors/Profiles/${tutorId}.json`
  );
  const data = await res.json();

  return {
    props: {
      profileData : data,
    },
    revalidate: 10,
  };
}