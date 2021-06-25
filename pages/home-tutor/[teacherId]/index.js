import Head from "next/head";
import TeacherProfileDetail from "../../../components/Users/HomeTutor/TeacherProfileDetail/TeacherProfileDetail";
import Layout from "../../../components/Utils/Layout/Layout";

export default function ProfileDetailPage(props){
    return (
        <Layout>
        <Head>
          <title>Saraswati Tutorials</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TeacherProfileDetail tutorInfo={props.tutorInfo} courses={props.courses} />
      </Layout>
    );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://saraswati-45e10-default-rtdb.firebaseio.com/teachers/profiles.json"
  );
  const data = await res.json();

  let homeTutors = [];
  for (const key in data) {
    const tutor = data[key];
    homeTutors.push(tutor);
  }

  const paths = homeTutors.map((item) => {
    return {
      params: { teacherId: item.teacherId },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const teacherId = context.params.teacherId;

  const tutorRes = await fetch(
    `https://saraswati-45e10-default-rtdb.firebaseio.com/teachers/profiles/${teacherId}.json`
  );
  const tutorInfo = await tutorRes.json();

  const coursesRes = await fetch(`https://saraswati-45e10-default-rtdb.firebaseio.com/teachers/courses/${teacherId}.json`);
  const coursesInfo = await coursesRes.json();

  let courses = [];
  for (const key in coursesInfo) {
    const course = coursesInfo[key];
    courses.push(course);
  }

  return {
    props: {
      tutorInfo : tutorInfo,
      courses : courses
    },
  };
}