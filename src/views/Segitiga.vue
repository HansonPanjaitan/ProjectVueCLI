<template>
  <div class="p-1" style="background-color: aliceblue">
    <div class="bg-white w-1/2 border-2 border-gray-300 my-20 mx-auto w-full max-w-2xl rounded-lg p-2 mx-20" id="app">
      <container class="justify-center flex items-center font-bold bg-indigo-400 
        rounded-lg text-gray-100 w-full h-20 text-3xl mb-10">Luas Segitiga</container>
      <div class="flex flex-row px-28">
        <label for="alas" class="font-base mr-20 font-bold text-xl mb-4 w-42 
          py-1 px-4 flex items-center">Alas</label>
        <input type="text" 
        class="border-2 rounded border-gray-300 h-9 py-1 px-2 focus:outline-none 
          focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model.number="alas">
      </div>
      <div class="flex flex-row px-28">
        <label for="tinggi" class="font-base mr-16 font-bold text-xl mb-4 w-42 
          py-1 px-4 flex items-center">Tinggi</label>
        <input type="text" 
        class="border-2 rounded border-gray-300 h-9 py-1 px-2 focus:outline-none 
          focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model.number="tinggi">
      </div>
        <div class="mt-4 text-center">
          <button class="bg-green-500 text-white rounded focus:outline-none
            py-2 px-3 hover:bg-green-600 font-semibold text-lg shadow-lg" v-on:click="hitungLuas">Hitung</button>
        </div>
      <div class="flex flex-row my-8 px-28">
        <label for="luas" class="font-base mr-16 font-bold text-xl mb-4 w-38
          py-1 px-5 flex items-center mt-2">Luas</label>
        <span class="text-center mt-3
          border-2 rounded border-gray-300 h-9 w-full mr-16 py-1 px-2">{{ luas }}</span>
      </div> 
    </div>
  </div>  
</template>

<script>

export default {
  data(){
    return {
      alas: 0,
      tinggi: 0,
      luas: 0
    }
  },
  methods:{
    hitungLuas(){
      this.luas = this.alas * this.tinggi / 2
    }
  }
}

</script>

<style scoped>

</style>