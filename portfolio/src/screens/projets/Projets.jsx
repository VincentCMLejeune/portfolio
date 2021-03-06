import Header from "../../components/header/Header";
import ProjectCard from "../../components/projectcard/ProjectCard";

import AdvisorPic from "../../assets/cards/advisor.png";
import BagarrePic from "../../assets/cards/bagarre.png";
import GarouPic from "../../assets/cards/garou.png";
import RuntimePic from "../../assets/cards/runtime.png";

import styles from "./Projets.module.css";

export default function Projets() {
  return (
    <div className={styles.projets}>
      <Header />
      <div className={styles.titleContainer}>
        <h2 className={styles.projectsTitle}>Projets</h2>
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          title="Bagarre Club"
          img={BagarrePic}
          description="Un simulateur de combat entre 731 superhéros"
          link="/projets/bagarre"
        />
        <ProjectCard
          title="Runtime Terror"
          img={RuntimePic}
          description="Un jeu de rythme avec la webcam [Hackathon]"
          link="/projets/runtime"
        />
        <ProjectCard
          title="Loup Garou"
          img={GarouPic}
          description="Un générateur de parties du jeu de cartes"
          link="/projets/garou"
        />
        <ProjectCard
          title="Wild Advisor"
          img={AdvisorPic}
          description="Un guide des bons plans autour de l'école"
          link="/projets/advisor"
        />
      </div>
    </div>
  );
}
