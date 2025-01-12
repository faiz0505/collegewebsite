import CommentsSection from "@/app/components/CommentSection";
import CommentForm from "@/app/components/ui/CommentForm";
import CommentFormModal from "@/app/components/ui/CommentFormModal";
import PageHeader from "@/app/components/ui/PageHeader";
import ShareButtons from "@/app/components/ui/ShareButtons";
import { comments } from "@/app/utils";
import React from "react";
import { FaCalendar, FaEye, FaRegComment } from "react-icons/fa6";

const page = async ({ params }) => {
  const blogId = (await params).id;

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">
        Lorem ipsum dolor sit amet consectetur - {blogId}
      </h1>
      <hr className="mt-4" />
      <div className="mt-4 flex items-center justify-between sm:justify-start sm:gap-3 md:gap-6">
        <div className="flex items-center gap-2 text-gray-600 font-semibold md:text-sm text-xs">
          <FaEye />
          <span className="">{100} Views</span>
        </div>
        <div className="w-[1px] h-3 bg-neutral-400"></div>
        <div className="flex items-center gap-2 text-gray-600 font-semibold md:text-sm text-xs">
          <FaRegComment />
          <span className="">{10} Comments</span>
        </div>
        <div className="w-[1px] h-3 bg-neutral-400"></div>
        <div className="flex items-center gap-2 text-gray-600 font-semibold md:text-sm text-xs">
          <FaCalendar />
          <span className="">30 Dec 2024</span>
        </div>
      </div>
      <div className="text-sm mt-6 text-neutral-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        nobis recusandae blanditiis ut saepe, enim eveniet! Ut repellat vitae
        voluptas reprehenderit voluptates cupiditate est, minima fuga in quaerat
        harum provident impedit, inventore enim aperiam nostrum. Eum, molestiae
        a fugit ipsum cumque cum nam libero laudantium deserunt quo omnis
        laborum, quod fuga debitis excepturi distinctio labore sit quidem in
        sequi eius maxime exercitationem, impedit rem! Aut odit eos, unde ad
        animi nemo autem impedit dolores, porro sed voluptatum harum enim,
        debitis alias! Magnam, tenetur ipsum dolorum distinctio excepturi modi
        officia atque voluptatum, voluptas deleniti iusto corrupti! Inventore,
        eligendi! Cupiditate ut quia nisi qui aspernatur accusamus modi neque,
        ad esse. Cumque ratione maiores, doloribus sunt, sint iure tempore,
        accusantium soluta officia eveniet inventore animi. Placeat dicta
        veniam, quia porro fugit quibusdam distinctio qui architecto eligendi
        cupiditate iure quis quae doloribus facere similique corporis? Sunt,
        quis incidunt iure nisi voluptatem distinctio similique velit libero
        reiciendis porro minus, maxime soluta fugit quae assumenda rem
        perferendis? Repellat quis modi odit, accusantium voluptas delectus unde
        eum, sunt quas vel, non rem. Quasi suscipit ullam incidunt ratione
        similique autem consequatur tenetur totam veniam vitae. Quisquam minima
        accusamus ad, soluta, fugiat aspernatur quibusdam quasi eos aliquid,
        animi facilis!
      </div>
      <div className="mt-8 flex items-start justify-between flex-col md:flex-row gap-y-4">
        <div className="">
          <h5 className="text-xl font-bold">Related Tags</h5>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="py-2 px-3 border border-primary hover:bg-primary font-semibold text-xs text-neutral-600 hover:text-neutral-50 cursor-pointer"
                >
                  Tag title
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h5 className="text-xl font-bold">Social Share</h5>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <ShareButtons
              url={`/blogs/blog/${blogId}`}
              text={
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nobis recusandae blanditiis ut saepe,"
              }
            />
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <div className="p-3 md:p-8 xl:p-10 2xl:p-16 border grid md:grid-cols-4 gap-5 md:h-[260px]">
        <figure className=" bg-neutral-800"></figure>
        <div className="md:col-span-3 self-center">
          <p className="text-sm text-neutral-500 font-semibold">Writtern by</p>
          <h3 className="text-3xl font-bold text-neutral-800">Faiz Ali</h3>
          <p className="text-sm text-neutral-500 font-semibold mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum
            recusandae voluptate libero laborum illo repudiandae asperiores nemo
            laboriosam, dolores, porro itaque enim ex rerum consequatur aut at!
            Iusto, magni?
          </p>
        </div>
      </div>
      <div className="mt-12 relative">
        <h4 className="text-3xl font-bold text-neutral-800">03 Comments</h4>
        {comments.length > 0 && <CommentsSection comments={comments} />}
      </div>
      <div className="mt-12 space-y-8">
        <h4 className="text-3xl font-bold text-neutral-800">Post Comment</h4>
        <CommentForm />
      </div>
    </div>
  );
};

export default page;
