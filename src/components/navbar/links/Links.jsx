import styles from "./links.module.css"
import NavLink from "./navLink/navLink";

export default function Links() {

    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ];
    // TEMPORARY
    const session = true
    const isAdmin = false

    return (
        <div className={styles.links}>
            {links.map((link) => {
                return <NavLink link={link} key={link.title}/>
            })}
            {/* {isAdmin ? (
                <NavLink link={{title: "Admin", path: "/admin"}} key="Admin"/>
            ) : (<div></div>)} */}
            {session ? (
                <>
                    {isAdmin && <NavLink link={{title: "Admin", path: "/admin"}} key="Admin"/>}
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink link={{title: "Login", path: "/login"}}/>
            )}
        </div>
    )
}