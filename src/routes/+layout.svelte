<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<h1 class='text-4xl text-bold font-black text-center m-2'>JWT 
		<span class='text-red-500'>DE</span>.<span class='text-green-500'>CODE</span>.<span class='text-blue-500'>R</span>
	</h1>
	<div class='flex flex-col justify-center items-center lg:items-start lg:flex-row p-1'>
		{@render children()}
	</div>
</div>
