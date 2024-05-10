import UserDashboard from "./userDashboard/userDashboard";
import AdminDashboard from "./adminDashboard/adminDashboard";
import { auth } from "@/app/auth";

export default async function Dashboard() {

  const session = await auth();    


  if(session.user.role === 'Admin') {
    return (
      <AdminDashboard />
    )
  }
   
  return (
    <UserDashboard />
  )

}