import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Education in the Digital Age",
      excerpt: "Exploring how technology is transforming the way we learn and teach in modern classrooms...",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Student Success Stories: From Classroom to Career",
      excerpt: "Real stories of how our students are making their mark in the professional world...",
      author: "Prof. Michael Chen",
      date: "March 10, 2024",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Innovative Teaching Methods for Better Learning",
      excerpt: "Discover the latest teaching methodologies that are revolutionizing education...",
      author: "Dr. Emily Brown",
      date: "March 5, 2024",
      category: "Teaching",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h1>
          <p className="text-lg text-gray-600">Stay updated with the latest news and insights from our educational community</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {blog.date}
                  </div>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs; 