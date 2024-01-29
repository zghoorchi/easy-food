import Link from "next/link";
import styles from "./Guid.module.css";

function Guid() {
  return (
    <div className={styles.container}>
      <Link href="/menu">Menu</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/">Discount</Link>
    </div>
  );
}

export default Guid;
