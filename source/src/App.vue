<template>
  <header>
    <router-link to="/">
      <h1>
        <span>Vue</span>
        Movies
      </h1>
    </router-link>
  </header>

  <router-view/>

<footer>
  <p>Sherif AbouZaid &copy;  <a href="https://github.com/Shiref-Abouzaid" target="_blank">Github</a></p>
</footer>
</template>

<style lang="scss">
$mainColor:#42B883;
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;

  &::selection {
    background:transparentize($mainColor, 0.5)
  }
}

body {
  background-color:#35495E;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem 1rem;
  background-color:#2c3d4e;
  box-shadow: 0 0 6px rgba(0,0,0,0.1);
  h1 {
    color:#fff;
    font-size: 2rem;
    span {
      color: $mainColor;
    }
  }
}
footer {
  text-align: center;
  p {
    color:#FFF;
  }
  a {
    color:$mainColor
  }
}
</style>
