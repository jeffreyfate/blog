<script context="module">
  import client from '../../sanityClient'
	export function preload({ params, query }) {
    return client.fetch('*[_type == "note" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)').then(notes => {
			return { notes };
		}).catch(err => this.error(500, err));
	}
</script>

<script>
  export let notes;

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Notes</title>
</svelte:head>

<h1>Recent notes</h1>

<ul>
	{#each notes as note}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='notes/{note.slug.current}'>{note.title}</a> ({formatDate(note.publishedAt)})</li>
	{/each}
</ul>
