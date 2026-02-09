import React from "react";

const CreatePost = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      
      <div className="w-full max-w-md flex flex-col gap-6">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-blue-600/75 dark:text-sky-400/75 text-4xl font-semibold">
            Create Post
          </h1>
        </div>

        {/* Form Card */}
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
          <form className="flex flex-col gap-4">

            <label className="block">
              <span className="text-sm text-gray-400 mb-1 block">
                Upload Image
              </span>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="block w-full text-sm text-gray-300
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-lg file:border-0
                           file:bg-white file:text-black
                           hover:file:bg-gray-200 cursor-pointer"
              />
            </label>

            <input
              type="text"
              name="caption"
              placeholder="Enter caption..."
              required
              className="bg-transparent border border-gray-700 rounded-lg px-3 py-2
                         placeholder-gray-500 focus:outline-none focus:ring-2
                         focus:ring-white"
            />

            <button
              type="submit"
              className="mt-4 bg-green-200 text-black font-medium py-2 rounded-lg
                         hover:bg-green-400 transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default CreatePost;
