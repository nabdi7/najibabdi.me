import React from 'react'
import { posts, Post } from "#site/content";
import { PostItem } from './post-item';
import { sortPosts, estimateReadingTime } from '@/lib/utils';
import Subscribe from '../subscribe/Subscribe';

const Blogs = () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts.map((post: Post) => ({
    ...post,
    readingTime: estimateReadingTime(post.body || post.description || '') 
  }));
  return (
    <>
    <section className="custom-screen">
      <div className="flex flex-col md:flex-col max-w-3xl mx-auto ">
        <h1 className="text-3xl font-bold">All Blogs</h1>
      </div>
      <div className="max-w-3xl mx-auto">
      {displayPosts?.length > 0 ? (
            <ul className="flex flex-col pt-5">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags, author, readingTime} = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      // tags={tags}
                      readingTime={readingTime}
                      author={author}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
      </div>
    </section>
    <Subscribe />
    </>
  )
}

export default Blogs