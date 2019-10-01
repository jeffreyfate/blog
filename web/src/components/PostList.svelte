<script>
  export let posts

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
	}
</script>
<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{post.slug.current}'>{post.title}</a> ({formatDate(post.publishedAt)})</li>
	{/each}
</ul>