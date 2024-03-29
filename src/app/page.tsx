import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Introduction from 'src/app/components/introduction'
import Jobs from 'src/app/components/jobs'
import BlogPosts from 'src/app/components/posts'
import Header from 'src/app/components/header'
import Clients from 'src/app/components/clients'
import Contact from 'src/app/components/contact'


function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl"> asd
        <Link href={post.url} className="post-title">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm hidden [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <>
      <Header />
      <section className="relative snap-mandatory scroll-smooth snap-x">
        <Introduction />
        <Jobs />
        <Clients />
        <BlogPosts />
        <Contact />
      </section>
    </>
  )
}