import { Link } from "react-router-dom"

function Button({ children, disabled, to, type, onClick }) {

    const base = "bg-yellow-400 uppercase font-semibold text-stone-800 inline-block rounded-full tracking-wide text-sm hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"

    const styles = {
        primary: base + ' py-3 px-4 md:px-6 md:py-4',
        small: base + ' text-xs px-4 py-2 md:px-5 md:py-2.5',
        round: base + ' text-sm px-2.5 py-1 md:px-3.5 md:py-2',
        secondary: 'uppercase text-sm font-semibold border-2 border-stone-300 text-stone-400 inline-block rounded-full tracking-wide hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5'
    }
 
    if (to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        ); 
    
    if (onClick)
        return (
            <button onClick={onClick} disabled={disabled} className={styles[type]}>
                {children}
            </button>
        );

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;
