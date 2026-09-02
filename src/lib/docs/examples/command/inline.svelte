<script lang="ts">
	import * as Command from "$lib/components/ui/command";
	import { Calculator, Calendar, CreditCard, Settings2, Smile, User } from "lucide-svelte";
</script>

<div class="h-96 w-full max-w-md overflow-hidden rounded-lg border border-border/60 bg-card">
	<Command.Root>
		<Command.Input placeholder="Type a command or search..." />
		<Command.List>
			<Command.Empty>No results found.</Command.Empty>

			<Command.Group heading="Suggestions">
				<Command.Item>
					<Calendar class="size-4 opacity-70" />
					Calendar
				</Command.Item>
				<Command.Item>
					<Smile class="size-4 opacity-70" />
					Search emoji
				</Command.Item>
				<Command.Item disabled>
					<Calculator class="size-4 opacity-70" />
					Calculator (unavailable)
				</Command.Item>
			</Command.Group>

			<Command.Separator />

			<Command.Group heading="Settings">
				<Command.Item>
					<User class="size-4 opacity-70" />
					Account profile
					<Command.Shortcut>⌘P</Command.Shortcut>
				</Command.Item>
				<Command.Item>
					<CreditCard class="size-4 opacity-70" />
					Billing
					<Command.Shortcut>⌘B</Command.Shortcut>
				</Command.Item>
				<Command.Item>
					<Settings2 class="size-4 opacity-70" />
					Preferences
					<Command.Shortcut>⌘S</Command.Shortcut>
				</Command.Item>
			</Command.Group>
		</Command.List>
	</Command.Root>
</div>
