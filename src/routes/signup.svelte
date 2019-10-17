<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import TitleCollab from '../components/TitleCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'
  import FieldCollab from '../components/FieldCollab.svelte'
</script>

<style>

</style>

<LogoCollab />

<TitleCollab content="Cadastro" uppercase />

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
