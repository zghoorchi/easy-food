import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guid from "../modules/Guid";
import Instruction from "../modules/Instruction";
import Restriction from "../modules/Restriction";

import styles from "./HomePage.module.css";

function HomePage() {
  return <div className={styles.container}>
    <Banner />
    <Attributes />
    <Definition />
    <Companies />
    <Instruction />
    <Guid />
    <Restriction />
  </div>;
}

export default HomePage;
