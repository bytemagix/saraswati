import Head from "next/head";
import EnrollmentDetail from "../../../../components/StudentDashboard/MyEnrollments/EnrollmentDetail/EnrollmentDetail";
import StudentLayout from "../../../../components/Utils/StudentLayout/StudentLayout";

export default function EnrollmentDetailPage(props){
    return (
        <StudentLayout>
        <Head>
          <title>Saraswati Tutorials</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <EnrollmentDetail students={props.students} />
      </StudentLayout>
    );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://saraswati-45e10-default-rtdb.firebaseio.com/OnlineClass/Enrollments.json"
  );
  const data = await res.json();

  let courseIds = [];
  for (const key in data) {
    courseIds.push(key);
  }

  const paths = courseIds.map((item) => {
    return {
      params: { courseId: item},
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
    const courseId = context.params.courseId;
  
    const courseRes = await fetch(
      `https://saraswati-45e10-default-rtdb.firebaseio.com/OnlineClass/Enrollments/${courseId}.json`
    );
    const data = await courseRes.json();

    let enrolledStudents = [];
    for (const key in data) {
      const student = data[key];
      enrolledStudents.push(student);
    }
  
  
    return {
      props: {
        students : enrolledStudents
      },
    };
  }