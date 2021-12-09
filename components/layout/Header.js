import styles from './Header.module.css'
export default function Header({ title }) {
  return <>
    <header className={styles.header}>
      <h1>사이드바 열기/닫기</h1>    
      <h1 className="title">{title}</h1>
      <h1>프로필</h1>
    </header>
  </>
}
