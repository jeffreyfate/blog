<script context="module">
  import client from '../../sanityClient'
	export async function preload({ params, query }) {
    return client.fetch('*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)').then(posts => {
			return { posts };
		}).catch(err => this.error(500, err));
  }
</script>

<script>
	export let posts;
	
	import PostList from '../../components/PostList.svelte'
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<PostList {posts}/>
