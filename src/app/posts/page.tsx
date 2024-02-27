import styles from "./postPage.module.css"

import ViewUserButton from "../components/posts/viewUserButton"
import CardList from "../components/posts/cardList"

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
interface Iposts {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const Posts = async() => {
  const response = await fetch (BASE_URL, {
    cache: 'no-store'
  })
  const posts: Iposts[] = await response.json()
  return (
    <>
    <p>{new Date().toLocaleDateString()}</p>
    <p>{new Date().toLocaleTimeString()}</p>
    <h1 className="text-fuchsia-500 ">postingan page</h1>
    <br />
    {posts.map((post) => {
     return (
      <CardList key={post.id}>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <ViewUserButton userId={post.userId} />
      </CardList>
     )
    })}

    </>
  )
}

export default Posts