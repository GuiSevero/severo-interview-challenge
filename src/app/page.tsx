import { PostList } from './posts/posts'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis repudiandae ipsa labore suscipit alias accusamus. A dolorum, voluptates deserunt hic excepturi quis, unde atque, expedita iste temporibus quam cum!</p>
      </div>
      <section>
        <h1 className='p-2 text-lg'>Checkout our blogposts!</h1>
        <PostList />
      </section>
    </main>
  )
}
