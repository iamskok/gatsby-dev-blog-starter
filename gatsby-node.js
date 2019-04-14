const path = require("path");

exports.onCreateWebpackConfig = ({actions}) => {
	actions.setWebpackConfig({
		node: {
			fs: "empty"
		}
	})
}

exports.createPages = ({actions, graphql}) => {
	const {createPage} = actions;
	const postTemplate = path.resolve(`src/templates/post.js`);

	return graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
		}

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: postTemplate,
				context: {}
			});
		});
	});
};

const ChildProcess = require('child_process');

exports.onPostBuild = () => {
	ChildProcess.execSync(`ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill`);
};
