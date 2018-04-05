<template>
  <section class="container">
    <h1>Contact</h1>
    <div class="content">
      <form name="contact" action="" method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />

        <label class="form-label" for="name">Nom :</label>
        <input class="form-field" name="name" id="name" type="text" />

        <label class="form-label" for="email">Email :</label>
        <input class="form-field" name="email" id="email" type="text" />

        <label class="form-label" for="message">Message :</label>
        <textarea class="form-field" name="message" id="message" type="text"></textarea>

        <input class="form-button" type="submit" value="Envoyer">
      </form>
    </div>
  </section>
</template>

<script>

</script>

<style>

</style>
