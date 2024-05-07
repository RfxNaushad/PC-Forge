import Image from "next/image";
import Head from "next/head";
import { useSession } from "next-auth/react";

const Profile = () => {
    const { data: session } = useSession();
    return (
        <div>
            <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Logged in user: {session?.user?.name}
      </h2>
      <Image height={400} width={400} src={session?.user?.image} alt=""></Image>
      {/* {data.data?.email && (
        <h2 style={{ textAlign: "center" }}>
          Logged in user email: {user?.email}
        </h2>
      )} */}
        </div>
    );
};

export default Profile;