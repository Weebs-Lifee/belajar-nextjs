import Link from "next/link";

export default function Home() {
  return (
    <> 
    <h1 className="posi">Testing</h1>
    <Link href="/posts">Go to Post page</Link>
    <br />
    <Link href="/albums">Go to Albums page</Link>
    </>
  );
}
