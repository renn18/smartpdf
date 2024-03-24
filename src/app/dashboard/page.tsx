import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = () => {
    // console.log("hello from server")

    const {getUser} = getKindeServerSession();
    const user = getUser();

    if(!user || !user.id) redirect('/auth-callback?origin=dashboard');

    return (
        <div>{user.email}</div>
    )
}

export default Page;