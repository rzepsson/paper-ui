<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="grid w-full max-w-lg gap-5 sm:grid-cols-2">
	<div class="space-y-2">
		<Label for="in-default">Default</Label>
		<Input id="in-default" placeholder="Focus turns the border blue" />
	</div>
	<div class="space-y-2">
		<Label for="in-basic">Basic</Label>
		<Input id="in-basic" variant="basic" placeholder="Focus turns it neutral" />
	</div>
</div>
