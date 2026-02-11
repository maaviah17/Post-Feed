import React, { useState } from "react";

const FeedPost = () => {
  const [posts, setPosts] = useState([
    {
        _id : "1",
        image : "xyz",
        caption: "Good day mate!",
    },{
        _id : "2",
        image : "xyz",
        caption : "Had a fun time ;)"
    }
  ]);

  return (
    <section className="min-h-screen bg-black text-white p-6">
      
      <div className="max-w-xl mx-auto mb-6">
        <h1 className="text-2xl font-semibold">Your Feed</h1>
        <p className="text-sm text-gray-400">
          See what people are sharing ✨
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg
                         hover:scale-[1.01] transition"
            >
              <img
                src={post.image}
                alt="post"
                className="w-full h-72 object-cover"
              />

              <div className="p-4">
                <p className="text-sm text-gray-200">
                  {post.caption}
                </p>

                <div className="flex items-center gap-4 mt-4 text-gray-400 text-sm">
                  <button className="hover:text-white transition">
                    ❤️ Like
                  </button>
                  <button className="hover:text-white transition">
                    💬 Comment
                  </button>
                  <button className="hover:text-white transition">
                    ↗ Share
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center
                          text-gray-400 mt-24">
            <div className="text-5xl mb-4">📭</div>
            <h2 className="text-lg font-medium">No posts yet</h2>
            <p className="text-sm mt-1">
              Follow people or create your first post!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedPost;
