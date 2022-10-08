console.log("Hello World");

// CRUD JavaScript Básico
const miniTwitter = {
	users: [
		{
			username: "Caio"
		}
	],
	posts: [
		{
			id: 1,
			owner: "Caio",
			content: "My first post"
		}
	]
};

//CREATE
const createPost = (data) => {
	miniTwitter.posts.push({
		id: miniTwitter.posts.length + 1,
		owner: data.owner,
		content: data.content
	});
};

createPost({ owner: "Caio", content: "Second post" });
createPost({ owner: "Caio", content: "Third post" });
console.log(miniTwitter.posts);

//READ
const getPosts = () => {
	return miniTwitter.posts;
};
console.log(getPosts());

//UPDATE
const updateContentPost = (id, newContent) => {
	const postToBeUpdated = getPosts().find((post) => {
		return post.id === id;
	});
	console.log(updateContentPost);
	postToBeUpdated.content = newContent;
};

updateContentPost(1, "New post content");

console.log(getPosts());

//DELETE
const deletePost = (id) => {
	const listPostsUpdated = getPosts().filter((actualPost) => {
		return actualPost.id !== id;
	});

	miniTwitter.posts = listPostsUpdated;
};

deletePost(1);
deletePost(2);
deletePost(3);
console.log(getPosts());
