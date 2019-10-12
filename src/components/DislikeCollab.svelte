<script>
    import IconCollab from '../components/IconCollab.svelte'
	let dislikes = 0

    function handleClick() {
        dislikes += 1;
    }
</script>

<style>
    .dislike-button {
        height: 40px;
        width: 100px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        padding: 5px 15px;
        background: rgb(255, 252, 238, 0.1);
        margin: 20px 0 20px 16px;
    }

    .dislike-button:last-child {
        margin: 20px 0 0 5px;
    }

    .dislike-button > .items {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .dislike-button > .items > .text {
        color: #FFF;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        font-family: Comfortaa;
    }
</style>

<button 
    on:click={handleClick} 
    class="dislike-button"> 
    <div class="items">
        <IconCollab
        name="dislike_button"
        alt="Dislike Button" />
        <p class="text">{dislikes}</p>
    </div>
</button>