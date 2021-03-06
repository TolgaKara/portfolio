import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function SinglePost() {
	const [singlePost, setSinglePost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
			)
			.then((data) => setSinglePost(data[0]))
			.catch(console.error);
	}, [slug]);

	return !singlePost ? (
		<div>Loading...</div>
	) : (
		<main className='bg-gray-200 min-h-screen p-12'>
			<article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
				<header className='relative'>
					<div className='absolute h-full w-full flex items-center justify-center p-8'>
						<div>
							<h1></h1>
							<div>
								<img />
							</div>
							<p></p>
						</div>
					</div>
					<img />
				</header>
				<div>BLOCK CONTENT</div>
			</article>
		</main>
	);
}
