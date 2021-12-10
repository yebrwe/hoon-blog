import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Header({ title, sidebar, setSidebar }) {
  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }
  return <>
    <header className={styles.header}>
      <div onClick={ toggleSidebar } className={styles.bar}>
        <FontAwesomeIcon icon={faBars}/>
      </div>    
      <h1 className="title">{title}</h1>
      <h1>프로필</h1>
    </header>
  </>
}
