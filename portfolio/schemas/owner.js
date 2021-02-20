export default {
	name: "owner",
	title: "Owner",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "bio",
			title: "Bio",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
		{
			name: "linkedinUrl",
			title: "LinkedIn URL",
			type: "url",
		},
		{
			name: "githubUrl",
			title: "GitHub URL",
			type: "url",
		},
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
};
