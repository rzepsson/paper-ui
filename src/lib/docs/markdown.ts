import type { DocEntry, PropDef } from "./types";
import { getExampleSource } from "./source";
import { cliCommand } from "./install";

function escapeCell(value: string) {
	return value.replace(/\|/g, "\|").replace(/\n/g, " ");
}

function propsTable(rows: PropDef[]) {
	const head = "| Prop | Type | Default | Description |\n| --- | --- | --- | --- |";
	const body = rows
		.map((row) =>
			[
				`\`${row.name}\``,
				`\`${escapeCell(row.type)}\``,
				row.default ? `\`${escapeCell(row.default)}\`` : "-",
				escapeCell(row.description)
			].join(" | ")
		)
		.map((line) => `| ${line} |`)
		.join("\n");
	return `${head}\n${body}`;
}

export function entryToMarkdown(entry: DocEntry): string {
	const out: string[] = [];

	out.push(`# ${entry.title}`);
	out.push("");
	out.push(entry.description);
	out.push("");

	if (entry.primitive) {
		out.push(
			`Built on the bits-ui \`${entry.primitive}\` primitive, which supplies keyboard handling, focus management and ARIA.`
		);
		out.push("");
	}

	out.push("## Installation");
	out.push("");
	out.push("```bash");
	out.push(cliCommand(entry.slug));
	out.push("```");
	out.push("");

	if (entry.dependencies?.length) {
		out.push(`Additional dependencies: ${entry.dependencies.map((d) => `\`${d}\``).join(", ")}.`);
		out.push("");
	}

	if (entry.anatomy) {
		out.push("## Anatomy");
		out.push("");
		out.push("```svelte");
		out.push(entry.anatomy);
		out.push("```");
		out.push("");
	}

	if (entry.examples.length) {
		out.push("## Examples");
		out.push("");
		for (const example of entry.examples) {
			out.push(`### ${example.title}`);
			out.push("");
			if (example.description) {
				out.push(example.description);
				out.push("");
			}
			out.push("```svelte");
			out.push(getExampleSource(entry.slug, example.id));
			out.push("```");
			out.push("");
		}
	}

	if (entry.props.length) {
		out.push("## API reference");
		out.push("");
		for (const group of entry.props) {
			out.push(`### ${group.title}`);
			out.push("");
			if (group.description) {
				out.push(group.description);
				out.push("");
			}
			out.push(propsTable(group.rows));
			out.push("");
		}
	}

	if (entry.keyboard?.length) {
		out.push("## Keyboard");
		out.push("");
		out.push("| Key | Behaviour |\n| --- | --- |");
		for (const shortcut of entry.keyboard) {
			out.push(`| \`${escapeCell(shortcut.keys)}\` | ${escapeCell(shortcut.description)} |`);
		}
		out.push("");
	}

	return out.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}
