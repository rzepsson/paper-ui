<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="grid w-full max-w-lg gap-5 sm:grid-cols-2">
	<div class="space-y-2">
		<Label for="in-email">Email</Label>
		<Input id="in-email" type="email" placeholder="name@example.com" />
	</div>
	<div class="space-y-2">
		<Label for="in-password">Password</Label>
		<Input id="in-password" type="password" placeholder="••••••••" />
	</div>
	<div class="space-y-2">
		<Label for="in-number">Seats</Label>
		<Input id="in-number" type="number" min="1" value="5" />
	</div>
	<div class="space-y-2">
		<Label for="in-file">Attachment</Label>
		<Input id="in-file" type="file" class="py-1.5 text-xs" />
	</div>
</div>
