import styles from "./navbar.module.css";
import Link from "next/link";

import { signOut, auth } from "@/app/auth";

export default async function Navabar() {
    return (
        <div className={styles.contianer}>    
            <div className={styles.links}>
                <Link href="/dashboard"> Dashbaord </Link>
                <Link href="/dashboard/shoppingCart"> Cart </Link>
                <Link href="/login"> Log in</Link>
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