<script>
  import FieldCollab from '../components/FieldCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'

  function handleSubmit() {
    console.log('Submit')
  }
</script>

<style>
  .form-signup {
    text-align: left;
  }

  .form-signup > :global(.field-collab) {
    margin-bottom: var(--gap-big);
  }

  .form-signup :global(.input-collab) {
    margin-bottom: var(--gap-smallest);
  }
</style>

<form action="" class="form-signup" on:submit|preventDefault={handleSubmit}>

  <FieldCollab
    content="Nome:"
    id="name"
    type="text"
    name="name"
    placeholder="Seu nome"
    required
    minlength="2"
    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+" />

  <FieldCollab
    content="Email:"
    id="email"
    type="email"
    name="email"
    placeholder="example@gmail.com"
    required />

  <FieldCollab
    content="Senha:"
    id="password"
    type="password"
    name="password"
    placeholder="********"
    required
    minlength="8" />

  <ButtonCollab content="Enviar" />
</form>
