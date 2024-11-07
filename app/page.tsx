// import Hero from "@/components/Hero";
// import InfoBoxes from "@/components/InfoBoxes";
// import HomeProperties from "@/components/HomeProperties";
// import FeaturedProperties from "@/components/FeaturedProperties";

// export default function HomePage() {
//   return (
//     <>
//        <Hero />
//        {/* <InfoBoxes /> */}
//        {/* <FeaturedProperties />
//        <HomeProperties /> */}
//     </>
//   );
// }

// app/guestform/page.tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getPosts() {
  // Mengambil data dari tabel `Post`
  const posts = await prisma.posts.findMany();
  return posts;
}

export default async function Page() {
  // Mendapatkan data dari database
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.name} - {post.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
