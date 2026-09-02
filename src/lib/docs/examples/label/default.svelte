<script lang="ts">
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
</script>

<div class="w-full max-w-sm space-y-2">
	<Label for="email">Email address</Label>
	<Input id="email" type="email" placeholder="name@example.com" />
</div>
