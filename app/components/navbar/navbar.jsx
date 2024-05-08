import styles from "./navbar.module.css";
import Link from "next/link";


export default function Navabar() {
    return (
        <div className={styles.contianer}>    
            <div className={styles.links}>
                <Link href="/dashboard"> Dashbaord </Link>
                <Link href="/login"> Log in</Link>
            </div>       
        </div>
    )
}