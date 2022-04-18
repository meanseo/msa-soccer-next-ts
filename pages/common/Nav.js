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
                <li className={styles.li}> <Link href='/board/addArticle'>게시글 등록</Link> </li>
                <li className={styles.li}> <Link href='/board/getArticles'>게시글 목록</Link> </li>
                <li className={styles.li}> <Link href='/board/modifyArticle'>게시글 수정</Link> </li>
                <li className={styles.li}> <Link href='/board/removeArticle'>게시글 삭제</Link> </li>
                <li className={styles.li}> <Link href='/game/addGame'>게임 등록</Link> </li>
                <li className={styles.li}> <Link href='/game/getGames'>게임 목록</Link> </li>
                <li className={styles.li}> <Link href='/game/modifyGame'>게임 수정</Link> </li>
                <li className={styles.li}> <Link href='/game/removeGame'>게임 삭제</Link> </li>
                <li className={styles.li}> <Link href='/game/addTeam'>팀 등록</Link> </li>
                <li className={styles.li}> <Link href='/game/getTeams'>팀 목록</Link> </li>
                <li className={styles.li}> <Link href='/game/modifyTeam'>팀 수정</Link> </li>
                <li className={styles.li}> <Link href='/game/removeTeam'>팀 삭제</Link> </li>
                <li className={styles.li}> <Link href='/todo/addTodo'>투두 추가</Link> </li>
                <li className={styles.li}> <Link href='/todo/getTodos'>투두 목록</Link> </li>
                <li className={styles.li}> <Link href='/todo/modifyTodo'>투두 수정</Link> </li>
                <li className={styles.li}> <Link href='/todo/removeTodo'>투두 삭제</Link> </li>
                <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li>    
                <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li>
                <li className={styles.li}> <Link href='/user/logout'>로그아웃</Link> </li>
                <li className={styles.li}> <Link href='/user/getUsers'>사용자 목록</Link> </li>        
                <li className={styles.li}> <Link href='/user/updateUser'>사용자 수정</Link> </li>        
                <li className={styles.li}> <Link href='/user/withdrawUser'>회원탈퇴</Link> </li>        
            </ul>
        </nav>
    );
}