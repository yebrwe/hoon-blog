import styles from "./Sidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Sidebar({ sidebar, menus }) {
  const router = useRouter();
  return (
    <>
      <div className={`${styles.sidebar} ${sidebar ? styles.wide : ""}`}>
        {menus.map((menu, index) => (
          <Link href={menu.url} key={index}>
            <a
              className={`notion-page-link ${
                router.pathname == menu.url ? styles.active : ""
              }`}
            >
              <span class="notion-page-title">
                <span class="notion-page-title-icon notion-page-icon">
                  {menu.icon}
                </span>
                {sidebar && (
                  <span class="notion-page-title-text">{menu.name}</span>
                )}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
