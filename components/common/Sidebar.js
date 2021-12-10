import styles from "./Sidebar.module.css";
import Link from "next/link";
export default function Sidebar({ sidebar, menus }) {
  console.log(menus);
  return (
    <>
      <div className={`${styles.sidebar} ${sidebar ? styles.wide : ""}`}>
        {menus.map((menu, index) => (
          <Link href={menu.url} key={index}>
            <a class="notion-page-link notion-block-9f7368df7636448684ddd44a99028bf1">
              <span class="notion-page-title">
                <span class="notion-page-title-icon notion-page-icon">
                  {menu.icon}
                </span>
                <span class="notion-page-title-text">{menu.name}</span>
              </span>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
