<template>
  <div id="app">
    <nav class="py-4 pl-16 h-18 pr-12 flex items-center justify-between bg-green-400">
      <div class="font-extrabold text-3xl text-gray-100 tracking-wide">  
        <router-link to="/">Home</router-link>
      </div>
        <div class="flex flex-row justify-end space-x-4">  
        <button class="bg-gray-300 hover:bg-gray-400 w-24 h-10 text-gray-700 justify-center 
          text-lg font-semibold rounded shadow-lg">
          <router-link to="/persegi">Persegi</router-link></button>
        <button class="bg-gray-300 hover:bg-gray-400 w-24 h-10 text-gray-700 justify-center 
          text-lg font-semibold rounded shadow-lg tracking-tighter">
          <router-link to="/lingkaran">Lingkaran</router-link></button>
        <button class="bg-gray-300 hover:bg-gray-400 w-24 h-10 text-gray-700 justify-center 
          text-lg font-semibold rounded shadow-lg">
          <router-link to="/segitiga">Segitiga</router-link></button>
        <button class="bg-gray-300 hover:bg-gray-400 w-24 h-10 text-gray-700 justify-center 
          text-lg font-semibold rounded shadow-lg">
          <router-link to="/gaji">Gaji</router-link></button>
        <button class="bg-gray-300 hover:bg-gray-400 w-24 h-10 text-gray-700 justify-center 
          text-lg font-semibold rounded shadow-lg">
        <router-link to="/nilai">Nilai</router-link></button>
        </div>
    </nav> 

    <router-view/> 
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
