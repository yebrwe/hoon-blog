import styles from './Header.module.css'
export default function Header({ title, sidebar, setSidebar }) {
  return <>
    <header className={styles.header}>
      <h1 onClick={()=>{
        setSidebar(!sidebar)
      }}>사이드바 축소/확대</h1>    
      <h1 className="title">{title}</h1>
      <h1>프로필</h1>
    </header>
  </>
}
