import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const CreatePost = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      e.stopPropagation();
  
  const formData = new FormData();
  
  // Get the file from the input
  const fileInput = e.target.image;
  const captionInput = e.target.caption;
  
  // Check if file exists
  if (!fileInput.files[0]) {
    alert("Please select an image!");
    return;
  }
  
  // Manually append to FormData
  formData.append('image', fileInput.files[0]);
  formData.append('caption', captionInput.value);
  
  // Debug: Check what's in FormData
  console.log("File:", fileInput.files[0]);
  console.log("Caption:", captionInput.value);
  
  const res = await axios.post("http://localhost:3001/api/posts/", formData, {
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data'  
      }
  });
  
  console.log(res.data);
  navigate("/feed");
}

  return (
  <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

    <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"></div>
    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

    <div className="relative w-full max-w-md flex flex-col gap-8 z-10">

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-wide">
          Create on <span className="text-pink-500">ummMMK</span>
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Share your moment with the world.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                      rounded-2xl p-8 shadow-2xl">

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-400">
              Upload Image
            </span>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="block w-full text-sm text-gray-300
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:bg-pink-500 file:text-black
                         hover:file:bg-pink-600 
                         file:transition cursor-pointer"
            />
          </label>

          <input
            type="text"
            name="caption"
            placeholder="Write something beautiful..."
            required
            className="bg-black/40 border border-white/10 rounded-xl px-4 py-3
                       placeholder-gray-500 focus:outline-none
                       focus:ring-2 focus:ring-pink-500
                       transition"
          />

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500
                       hover:scale-105 active:scale-95
                       transition-transform duration-200
                       text-black font-semibold py-3 rounded-xl shadow-lg"
          >
            Post It 🚀
          </button>

        </form>
      </div>

    </div>
  </section>
);

};

export default CreatePost;
