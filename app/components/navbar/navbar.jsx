import styles from "./navbar.module.css";
import Link from "next/link";

import { signOut, auth } from "@/app/auth";

export default async function Navabar() {

    const session= await auth();

    if(!session) {
        return (
            <div className={styles.contianer}>    
                <div className={styles.links}>
                    <Link href="/login"> Log in</Link>
                </div>       
            </div>
        )
    }
    else if(session.user.role=== 'Admin') {
        return (
            <div className={styles.contianer}>    
            <div className={styles.links}>
                <Link href="/dashboard"> Dashbaord </Link>
                <form action={async () => {
                    "use server";
                    await signOut();
                }}>
                <button className={styles.logoutBttn}>Logout</button>
                </form>
            </div>       
        </div>
        )
    }

    return (
        <div className={styles.contianer}>    
            <div className={styles.links}>
                <Link href="/dashboard"> Dashbaord </Link>
                <Link href="/dashboard/shoppingCart"> Cart </Link>
                <form action={async () => {
                    "use server";
                    await signOut();
                }}>
                <button className={styles.logoutBttn}>Logout</button>
                </form>
            </div>       
        </div>
    )
}