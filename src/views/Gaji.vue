<template>
  <div class="p-1" style="background-color: aliceblue">
    <div class="border-2 border-gray-300 bg-white my-20 mx-40 p-2 h-auto rounded-lg" id="app3">
      <container class="justify-center flex items-center font-bold bg-indigo-400 
        rounded-lg text-gray-100 w-full h-20 text-3xl">Menghitung Total Gaji</container>
      <div class="w-full max-w-xl rounded-lg p-6 mx-auto mt-10">
        <div class="flex flex-row">
          <label for="gaji" class="font-base mr-4 font-bold text-xl mb-4 w-36 
            py-1 flex items-center">Gaji Pokok</label>
          <input type="text" 
          class="border-2 rounded border-gray-300 h-9 w-60 py-1 px-2 focus:outline-none 
            focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model.number="gaji">
        </div>
        <div class="flex flex-row mt-4">
          <label for="tunjangan" class="font-base mr-4 font-bold text-xl mb-4 w-36 
            py-1 flex items-center">Tunjangan</label>
          <input type="text" 
          class="border-2 rounded border-gray-300 h-9 w-60 py-1 px-2 focus:outline-none 
            focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model.number="tunjangan">
        </div>
        <div class="flex flex-row mt-4">
          <label for="potongan" class="font-base mr-4 font-bold text-xl mb-4 w-36 
            py-1 flex items-center">Potongan</label>
          <input type="text" 
          class="border-2 rounded border-gray-300 h-9 w-60 py-1 px-2 focus:outline-none 
            focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model.number="potongan">
        </div> 
        <div class="mt-4 text-center">
          <button class="bg-green-500 text-white font-semibold text-lg rounded focus:outline-none 
            py-2 px-3 hover:bg-green-600 shadow-lg" v-on:click="hitungGaji">Hitung</button>
        </div>
        <div class="flex flex-row mt-10">
          <label for="gajikotor" class="font-base mr-4 font-bold text-xl mb-4 w-36
            py-1 flex items-center">Gaji Kotor</label>
          <span class="text-center mt-1 
            border-2 rounded border-gray-300 h-9 w-60 mr-20 py-1 px-2">Rp {{ gajikotor }}</span>
        </div> 
        <div class="flex flex-row mt-4">
          <label for="gajiditerima" class="font-base mr-4 font-bold text-xl mb-10 w-36
            py-1 flex items-center">Gaji Diterima</label>
          <span class="text-center mt-1 
            border-2 rounded border-gray-300 h-9 w-60 mr-20 py-1 px-2">Rp {{ gajiditerima }}</span>
        </div> 
      </div>
    </div>
  </div>      
</template>

<script>

export default {
  data(){
    return {
      gaji: 0,
      tunjangan: 0,
      potongan: 0,
      gajikotor: 0,
      gajiditerima: 0
    }
  },
  methods:{
    hitungGaji(){
      this.gajikotor = this.gaji + this.tunjangan - this.potongan 
      this.gajiditerima = this.gajikotor - (this.gajikotor * 0.1)
    }
  }
}

</script>

<style scoped>

</style>