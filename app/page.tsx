import Hero from "@/components/Hero";
import GuestData from "@/components/GuestData";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GuestData />
      {/* <InfoBoxes /> */}
      {/* <FeaturedProperties />
      <HomeProperties /> */}
    </>
  );
}

// app/guestform/page.tsx
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function getPosts() {
//   // Mengambil data dari tabel `Post`
//   const posts = await prisma.posts.findMany();
//   return posts;
// }

// export default async function Page() {
//   // Mendapatkan data dari database
//   const posts = await getPosts();

//   return (
//     <div>
//       <h1>Posts List</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             {post.name} - {post.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import { fetchPosts } from "@/app/db/queries/posts";
// import Link from "next/link";
// // Importing a component that handles post deletion.
// import PostDelete from "@/components/post-delete";

// export default async function Home() {
//   const posts = await fetchPosts() // Fetching the posts from the database.
//   const dateOptions: Intl.DateTimeFormatOptions = { // Options for formatting dates.
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-start p-24">
//       <div className="mb-4">
//         <Link href="/posts/create" className="bg-white px-4 py-2 rounded">Create Post</Link> // Link to create a new post.
//       </div>
//       <div className="mb-32 grid gap-x-8 gap-y-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         {posts.map(post => { // Mapping over the posts and rendering each one.
//           return <div key={post.id}>
//             <div className="mb-4">
//               <Link
//                 key={post.id}
//                 href={`/posts/${post.id}/edit`}
//                 className=""
//               >
//                 <h2 className={`mb-3 text-2xl font-semibold`}>
//                   {post.title}
//                 </h2>
//               </Link>
//               <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
//                 {post.content}
//               </p>
//             </div>
//             <div className="text-sm opacity-30">{'Updated at ' + post.updatedAt.toLocaleDateString("en-US", dateOptions)}</div>
//             <PostDelete id={post.id} />
//           </div>
//         })}
//       </div>
//     </main>
//   );
// }
