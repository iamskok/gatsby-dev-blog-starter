module.exports = {
	siteMetadata: {
		title: `Gatsby Dev Blog Starter`,
		description: `Gatsby starter to get up and running with personal web development blog`,
		author: `@iamskok`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
					name: `markdown`,
					path: `${__dirname}/src/content`,
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: true
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-code-buttons',
						options: {
							tooltip: 'Click to copy 💾'
						}
					},
					`gatsby-remark-code-titles`,
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							inlineCodeMarker: '›',
							showLineNumbers: true
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							withWebp: {
								quality: 60
							},
							quality: 60,
							maxWidth: 930,
							srcSetBreakpoints: [
								290,
								390,
								435,
								490,
								590,
								690,
								725,
								780,
								870,
								930,
								980,
								1035,
								1160,
								1225,
								1365,
								1475,
								1560,
								1725,
								1860,
								1960,
								2070,
								2325,
								2415,
								2760,
								3160,
								3720
							]
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 20px`,
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			}
		}
	]
}
