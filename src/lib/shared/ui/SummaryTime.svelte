<script>
	export let totalHours, totalMinutes;
</script>

{#if totalHours !== 0}
	<span class="time">{totalHours}</span>
	{#if totalHours > 1}
		Hours
	{:else}
		Hour
	{/if}
{/if}
<span class="time">{totalMinutes}</span>
{#if totalMinutes > 1}
	Minutes
{:else}
	Minute
{/if}
