<script lang="ts">
	import { notes } from './data';
</script>

<div class="flex h-screen w-screen bg-slate-800">
	<div class="h-full w-[300px] px-4 py-2 border-r border-slate-700">
		<div>
			{#each notes as note}
				<div class="mb-2">
					<div class="">
						<h2 class="text-white">{note.heading}</h2>
					</div>
					{#each note.subhead as item}
					<div class="ml-2">
                        	<p class="text-sm text-gray-400 hover:text-white cursor-pointer">{item.title}</p>
                    </div>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="h-full w-[calc(100vw-300px)] bg-slate-900">jks</div>
</div>
