import Link from "next/link";
import styles from "./styles/Nav.module.css";

export default function Nav(){
    return(
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}> <Link href='/'>메인</Link> </li>
                <li className={styles.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
                <li className={styles.li}> <Link href='/basic/calc'>Calculator</Link> </li>             
                <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li>
                <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
                <li className={styles.li}> <Link href='/board/board'>게시글 등록</Link> </li>
                <li className={styles.li}> <Link href='/board/board-list'>게시글 목록</Link> </li>
                <li className={styles.li}> <Link href='/game/game'>게임 등록</Link> </li>
                <li className={styles.li}> <Link href='/game/game-list'>게임 목록</Link> </li>
                <li className={styles.li}> <Link href='/game/team-form'>팀 등록</Link> </li>
                <li className={styles.li}> <Link href='/game/team-list'>팀 목록</Link> </li>
                <li className={styles.li}> <Link href='/todo/todo'>스케줄 등록</Link> </li>
                <li className={styles.li}> <Link href='/todo/todo-list'>스케줄 목록</Link> </li>
                <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li>
                <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li>    
                <li className={styles.li}> <Link href='/user/user-list'>사용자 목록</Link> </li>        
            </ul>
        </nav>
    );
}