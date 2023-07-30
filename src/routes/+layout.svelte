<script>
	import '../app.css';
	// import 'aos/dist/aos.css';
	// import AOS from 'aos';
	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	AOS.init();
	// });
	export let data;
</script>

<main class="min-h-full">
	<nav class="navbar border-b bg-base-100">
		<div class="flex-1">
			<a href="/" class="btn-ghost btn text-xl normal-case">Pomodoro plan</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown-end dropdown">
					<a href="/login" class="btn-primary btn">Login</a>
					<a href="/register" class="btn-secondary btn">Register</a>
				</div>
			{:else}
				<div class="dropdown-end dropdown mr-4">
					<a href="/projects/new" class="btn-outline btn-primary btn">Add Project</a>
				</div>
				<div class="dropdown-end dropdown">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn-ghost btn-circle avatar btn">
						<div class="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" alt="User avatar" />
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
					>
						<li>
							<a href="/my/projects" class="justify-between">My Projects</a>
						</li>
						<li><a href="/my/settings">Settings</a></li>
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="w-full text-start">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</nav>
	<slot />
</main>

<style>
</style>
