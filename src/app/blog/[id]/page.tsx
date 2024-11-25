"use client";

import { useParams } from 'next/navigation';

export default function BlogPost() {
  const { id } = useParams() as { id: string }; 

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      {/* Blog Post Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Blog Post {id}</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore the details and insights shared in this blog post. Learn more about the topic as we delve into the specifics.
        </p>
      </div>

      {/* Blog Post Content */}
      <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">This is a dynamically generated blog post page for post ID: {id || 'Loading...'}</p>
        </div>

        {/* Example Blog Content */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-blue-700">Post Title: The Future of Web Development</h3>
          <p className="text-lg">
            The future of web development is constantly evolving with new technologies and tools emerging at a rapid pace. As we move forward,
            developers must stay up-to-date with these advancements in order to build efficient, scalable, and user-friendly web applications.
          </p>

          <h4 className="text-2xl font-semibold text-pink-600">What’s New in Web Development?</h4>
          <p className="text-lg">
            New trends in web development are shaping the future of the industry. From serverless architectures to progressive web apps (PWAs),
            developers are constantly discovering new ways to improve website performance and enhance user experiences.
          </p>

          <h4 className="text-2xl font-semibold text-blue-600">How to Stay Ahead in the Industry?</h4>
          <p className="text-lg">
            Staying ahead in the web development industry requires continuous learning. Developers can take advantage of online courses, attend
            webinars, and join tech communities to network and share knowledge. Keeping an eye on emerging technologies is key to success in this
            field.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <p className="text-sm text-gray-300">End of the Post. Stay tuned for more updates!</p>
      </div>
    </section>
  );
}

