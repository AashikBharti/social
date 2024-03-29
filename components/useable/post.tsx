"use client";
import { useRouter } from "next/navigation";
import { BiComment, BiHeart, BiUser } from "react-icons/bi";

interface PostInterface {
  id: string;
  image_url: string;
  user_name: string;
  like_number: number;
  comments_number: number;
  comments: Array<string>;
  description: string;
}

function Post({ data }: { data: PostInterface }) {
  const router = useRouter();

  return (
    <main
      className="flex flex-col shadow-md px-4 py-2 cursor-pointer"
      onClick={() => router.push(`/home/posts/${data.id}`)}
    >
      <div className="grid place-items-center h-40 bg-blue-300 rounded-sm">
        {/* <Image
          priority
          src={data.image_url}
          width={300}
          height={300}
          className="w-full"
          alt="img not found"
        /> */}
      </div>
      <div className="pt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BiUser size={25} />
          <span className="font-bold">{data.user_name}</span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 ">
            <BiHeart className="cursor-pointer" size={25} />
            <span>{data.like_number}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiComment className="cursor-pointer" size={25} />
            <span>{data.comments_number}</span>
          </div>
        </div>
      </div>
      <div className="pt-10">{data.description}</div>
    </main>
  );
}

export default Post;
