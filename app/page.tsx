import Link from "next/link";

function Home() {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link href={'about'}>About</Link>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className={"text-lg text-center"}>HOME</div>
        </>
    )
}

export default Home
