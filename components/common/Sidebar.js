import styles from './Sidebar.module.css'
export default function Sidebar({ sidebar, children }) {
    return (
        <>
            <div className={`${styles.sidebar} ${sidebar ? styles.wide : ''}`}>
                {children}
            </div>
        </>
    )
}