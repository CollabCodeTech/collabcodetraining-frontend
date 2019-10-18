<script>
  import FieldCollab from '../components/FieldCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'
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

<form action="" class="form-signup">
  <FieldCollab
    content="Nome:"
    id="name"
    type="text"
    name="name"
    placeholder="Seu nome" />

  <FieldCollab
    content="Email:"
    id="email"
    type="email"
    name="email"
    placeholder="example@gmail.com" />

  <FieldCollab
    content="Senha:"
    id="password"
    type="password"
    name="password"
    placeholder="********" />

  <ButtonCollab content="Enviar" />
</form>
