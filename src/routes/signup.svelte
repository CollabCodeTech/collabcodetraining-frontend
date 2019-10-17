<script>
  import LogoCollab from '../components/LogoCollab.svelte'
  import TitleCollab from '../components/TitleCollab.svelte'
  import ButtonCollab from '../components/ButtonCollab.svelte'
  import LabelCollab from '../components/LabelCollab.svelte'
  import InputCollab from '../components/InputCollab.svelte'
</script>

<style>

</style>

<LogoCollab />

<TitleCollab content="Cadastro" uppercase />

<LabelCollab content="Nome:" />
<InputCollab id="name" type="text" name="name" placeholder="Seu nome" />

<LabelCollab content="Email:" />
<InputCollab
  id="email"
  type="email"
  name="email"
  placeholder="example@gmail.com" />

<LabelCollab content="Senha:" />
<InputCollab
  id="password"
  type="password"
  name="password"
  placeholder="********" />

<ButtonCollab label="Enviar" />
