import styles from "./page.module.css";
import ImageGrid from "./ImageGrid.js";
import AppBar from "./AppBar.js";

export default function Home() {
  return (
    <main>
      <AppBar/>
      <ImageGrid/>
    </main>
  );
}
