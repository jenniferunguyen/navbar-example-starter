import Link from 'next/Link'

export default function Header(){
    return (
        <header>
            <nav>
            <Link href="/">
                <div className="logo">
                <svg className="lightbulb" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h1>Brilliance</h1>
                </div>
            </Link>
            <Link href="/about" className="link"><a>About</a></Link>
            <Link href="/products" className="link"><a>Products</a></Link>
            </nav>
            <div className="button-group">
                <button className="search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="search" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>            
                </button>
                <button className="sign-up">
                    Sign Up
                </button>
            </div>
            <style jsx>{`
                header {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                nav {
                    display: flex;
                    flex-direciton: row;
                    align-items: center;
                }
                .logo {
                    display: flex;
                    flex-direction: row;
                    margin: 0.5em;
                }
                .lightbulb {
                    width: 2.5em;
                    margin-left: 2em;
                }
                a {
                    font-size: x-small;
                    font-weight: bold;
                    margin: 1em;
                }
                .button-group {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    margin: 0.5em;
                }
                .search-button {
                    width: 1em;
                }
                .sign-up {
                    font-size: xx-small;
                    font-weight: bold;
                    background-color: white;
                    padding: 1.2em;
                    border-radius: 5px;
                    margin: 0.25em;
                }
            `}</style>
        </header>
    )
}