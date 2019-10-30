<script>
  import TitleCollab from '../components/TitleCollab.svelte'
  import LessonButtonCollab from '../components/LessonButtonCollab.svelte'

  export let courseUrl = '/platform/classroom/v1'
  export let activeLesson = 56
  export let lessons = 90

  const lessonsCounter = Array.from({ length: lessons }, (_, k) => k)
</script>

<style>
  .lessons-collab {
    padding: var(--gap-small) 0;
    margin: var(--gap-normal) 0;
    white-space: nowrap;
    overflow-x: scroll;
  }
</style>

<TitleCollab content="Aulas" />
<div class="lessons-collab">
  {#each lessonsCounter as lesson, lessonNumber}
    <LessonButtonCollab
      active={activeLesson === lessonNumber}
      number={lessonNumber}
      namespace={courseUrl} />
  {/each}
</div>
