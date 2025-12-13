import Link from "next/link";

const NavBar = () => {
    return (
        <header className="grid grid-cols-2">
            <div>Mukthayar Logo</div>
            <nav>
                <ul className="flex gap-4 justify-end">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default NavBar;