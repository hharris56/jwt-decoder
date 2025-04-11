<script lang='ts'>
  // import decodeToken from "$lib/decoder";
  import safeDecode from "$lib/decoder";
  let token = $state('');
  let decoded = $derived(safeDecode(token));
</script>

<style>
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .decode-view {
    word-wrap: break-word;
    overflow-y: scroll;
  }
</style>


<div id='encoded' class='w-full mb-2 md:mr-1 md:mb-0 md:w-1/2'>
  <h2 class='text-center'>Encoded</h2>
  <textarea 
    bind:value={token}
    class='w-full min-h-25 border p-0.25 align-top'
  ></textarea>
</div>
<div id='decoded' class='w-full md:w-1/2 overflow-hidden'>
  <h2 class='text-center'>Decoded</h2>
  <div class='w-full min-h-25 border'>
    <div id='header' class='w-full min-h-5'>
      <div class='w-full bg-gray-300 pl-0.25 h-1.5'>Header</div>
      <pre class='pl-0.25 text-red-500 min-h-3.5 decode-view'>{decoded[0]}</pre>
    </div>
    <div id='payload' class='w-full min-h-20'>
      <div class='w-full bg-gray-300 pl-0.25 h-1.5'>Payload</div>
      <pre class='pl-0.25 text-blue-500 min-h-18.5 decode-view'>{decoded[1]}</pre>
    </div>
  </div>
</div>