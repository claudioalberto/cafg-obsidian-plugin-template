<script>
	import Title from './components/Title.svelte';
	import About from './pages/About.svelte';
	import Home from './pages/Home.svelte';

    let currentPage = "Home";
</script>

<div class="App-Container">
    <div class="App-Header">
        <div class="App-Header">
            <Title>Bible Study</Title>
        </div>
        <div class="App-Body">
            {#if currentPage === "Home"}
                <Home />
            {:else if currentPage === "About"}
                <About />
            {/if}
        </div>
        <div class="App-Footer">
            <div class="App-Footer-Nav">
                <button class="App-Footer-Nav-Button" on:click={()=> currentPage = "Home"}>
                    Home
                </button>
                <button class="App-Footer-Nav-Button" on:click={()=> currentPage = "About"}>
                    About
                </button>
            </div>
        </div>
    </div>
</div>