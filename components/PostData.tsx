import Link from "next/link";
import { fetchPosts } from "@/app/db/queries/posts";
import { fetchGuests } from "@/app/db/queries/guests";
// Importing a component that handles post deletion.
import PostDelete from "@/components/post-delete";

async function PostData() {
  const posts = await fetchPosts(); // Fetching the posts from the database.
  const guests = await fetchGuests(); // Fetching the posts from the database.
  const dateOptions: Intl.DateTimeFormatOptions = {
    // Options for formatting dates.
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // function GuestData() {
  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <div className="mb-4">
        <Link href="/guestform" className="bg-white px-4 py-2 rounded">
          Create Guest
        </Link>{" "}
        // Link to create a new guest.
      </div>
      <div className="">
        {guests.map((guest) => {
          // Mapping over the guests and rendering each one.
          return (
            <div key={guest.id}>
              <div className="mb-4">
                <Link
                  key={guest.id}
                  href={`/guests/${guest.id}/edit`}
                  className=""
                >
                  <h2 className={`mb-3 text-2xl font-semibold`}>{guest.id}</h2>
                </Link>
                <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
                  {guest.name}
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
                  {guest.phoneNumber}
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
                  {guest.address}
                </p>
              </div>
              {/* <div className="text-sm opacity-30">
                {"Updated at " +
                  post.updatedAt.toLocaleDateString("en-US", dateOptions)}
              </div>
              <PostDelete id={post.id} /> */}
            </div>
          );
        })}
      </div>

      <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Customer
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Phone Number
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Gender
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Email
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Address
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Age
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Name Institute
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              NIP/NIM
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Employment
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Education
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {guests?.map((guest) => (
            <tr
              key={guest.id}
              className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">
                  {/* <Image
                    src={guest.image_url}
                    className="rounded-full"
                    width={28}
                    height={28}
                    alt={`${guest.name}'s profile picture`}
                  /> */}
                  <p>{guest.name}</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                {guest.phoneNumber}
              </td>
              <td className="whitespace-nowrap px-3 py-3">{guest.gender}</td>
              <td className="whitespace-nowrap px-3 py-3">{guest.email}</td>
              <td className="whitespace-nowrap px-3 py-3">{guest.address}</td>
              <td className="whitespace-nowrap px-3 py-3">{guest.age}</td>
              <td className="whitespace-nowrap px-3 py-3">
                {guest.nameInstitute}
              </td>
              <td className="whitespace-nowrap px-3 py-3">{guest.nipnim}</td>
              <td className="whitespace-nowrap px-3 py-3">
                {guest.employment}
              </td>
              <td className="whitespace-nowrap px-3 py-3">{guest.education}</td>
              {/* <td className="whitespace-nowrap px-3 py-3">
                {formatCurrency(guest.amount)}
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                {formatDateToLocal(guest.date)}
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                <GuestStatus status={guest.status} />
              </td> */}

              {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                  <UpdateGuest id={guest.id} />
                  <DeleteGuest id={guest.id} />
                </div>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-4">
        <Link href="/posts/create" className="bg-white px-4 py-2 rounded">
          Create Post
        </Link>{" "}
        // Link to create a new post.
      </div>
      <div className="mb-32 grid gap-x-8 gap-y-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {posts.map((post) => {
          // Mapping over the posts and rendering each one.
          return (
            <div key={post.id}>
              <div className="mb-4">
                <Link
                  key={post.id}
                  href={`/posts/${post.id}/edit`}
                  className=""
                >
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    {post.title}
                  </h2>
                </Link>
                <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
                  {post.content}
                </p>
              </div>
              <div className="text-sm opacity-30">
                {"Updated at " +
                  post.updatedAt.toLocaleDateString("en-US", dateOptions)}
              </div>
              <PostDelete id={post.id} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default PostData;
