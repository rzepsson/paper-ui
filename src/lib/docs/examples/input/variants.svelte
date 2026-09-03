<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="grid w-full max-w-lg gap-6 sm:grid-cols-2">
	<div class="space-y-2">
		<Label for="in-default">Default</Label>
		<Input id="in-default" placeholder="Boxed, border turns primary" />
	</div>
	<div class="space-y-2">
		<Label for="in-underline">Underline</Label>
		<Input id="in-underline" variant="underline" placeholder="Rule sweeps out from the centre" />
	</div>
</div>
