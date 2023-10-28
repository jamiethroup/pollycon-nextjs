'use client'
import Link from 'next/link'
import Image from 'next/image'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl 123">
        <Link href={post.url} className="post-title">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm hidden [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      <div className="mt-4">
        <Image src={post.image} alt={post.title} width={640} height={360} />
      </div>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <Swiper
    modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1.75}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {posts.map((post, idx) => (
        <SwiperSlide key={idx}>
          <PostCard {...post} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}