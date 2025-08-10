// ----------------------------
// Datei: components/Navigation.vue
// ----------------------------
<template>
  <nav>
    <NuxtLink to="/">Start</NuxtLink> |
    <!--<NuxtLink to="/services">Leistungen</NuxtLink> | -->
    <NuxtLink to="/booking">Termin buchen</NuxtLink> |
    <NuxtLink to="/contact">Kontakt</NuxtLink>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  background: #7d7373;
  text-align: center;
}
a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #333;
}
a:hover {
  text-decoration: underline;
}
</style>

