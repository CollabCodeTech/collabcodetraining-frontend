<script>
    import IconCollab from '../components/IconCollab.svelte'
	let likes = 0

    function handleClick() {
        likes += 1;
    }
</script>

<style>
    button {
        height: 40px;
        width: 100px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        padding: 5px 15px;
        background: rgb(255, 252, 238, 0.1);
        margin: 20px 0 20px 16px;
    }

    button > div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    button > div > p {
        color: #FFF;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        font-family: Comfortaa;
    }
</style>

<button on:click={handleClick}> 
    <div>
        <IconCollab
        name="like_button"
        alt="Like Button" />
        <p>{likes}</p>
    </div>
</button>