// src/app/[...slug].tsx

import { useRouter } from 'next/router';
import React from 'react';

const CatchAllPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query; // `slug` is an array of each segment in the URL path

  return (
    <div>
      <h1>Page: {slug?.join('/')}</h1>
      {/* Render your page content here based on the slug */}
    </div>
  );
};

// This function runs on the server for each request
export async function getServerSideProps({ params }) {
    const { slug } = params; // `slug` is an array of each segment in the URL path
    // Fetch data from Builder.io API based on the slug
    const pageData = await fetchBuilderContent(slug);
  
    return {
      props: {
        pageData,
      },
    };
  }
  
  const fetchBuilderContent = async (slug) => {
    // Replace with actual API call to Builder.io
    // Example: `https://cdn.builder.io/api/v1/page?url=${slug.join('/')}&apiKey=YOUR_KEY`
    // Return the page data or handle errors appropriately
  };

export default CatchAllPage;
