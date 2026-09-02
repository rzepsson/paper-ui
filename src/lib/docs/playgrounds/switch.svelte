<script lang="ts">
	import { Switch } from "$lib/components/ui/switch";

	let { checked = false, disabled = false }: { checked?: boolean; disabled?: boolean } = $props();
</script>

<Switch {checked} {disabled} aria-label="Playground switch" />
