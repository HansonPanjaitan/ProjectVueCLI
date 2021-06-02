<template>
  <div class="p-1" style="background-color: aliceblue">
    <div class="border-2 border-gray-300 bg-white my-20 mx-40 p-2 rounded-lg" id="app2">
    <container class="justify-center flex items-center font-bold bg-indigo-400 
      rounded-lg text-gray-100 w-full h-20 text-3xl">Menghitungan Total Nilai</container>
      <div class="w-full max-w-xl rounded-lg p-6 mx-auto mt-10">
        <div class="flex flex-row">
          <label for="kehadiran" class="font-base mr-4 font-bold text-xl mb-4 w-40 
            py-1 flex items-center">Nilai Kehadiran</label>
          <input type="text"
          class="border-2 rounded border-gray-300 h-9 w-60 py-1 px-2 focus:outline-none 
            focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model="kehadiran">
        </div>
        <div class="flex flex-row mt-4">
          <label for="tugas" class="font-base mr-4 font-bold text-xl mb-4 w-40
            py-1 flex items-center">Nilai Tugas</label>
          <input type="text"
          class="border-2 rounded border-gray-300 h-9 w-60 py-1 px-2 focus:outline-none 
            focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model="tugas">
        </div>
        <div class="flex flex-row mt-4">
          <label for="mid" class="font-base mr-4 font-bold text-xl mb-4 w-40 
            py-1 flex items-center">Nilai MID</label>
          <input type="text"
          class="border-2 rounded border-gray-300 h-9 w-60 py-1 px-2 focus:outline-none 
            focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model="mid">
        </div>  
        <div class="flex flex-row mt-4">
          <label for="uas" class="font-base mr-4 font-bold text-xl mb-4 w-40 
            py-1 flex items-center">Nilai UAS</label>
          <input type="text"
          class="border-2 rounded border-gray-300 h-9 w-60 py-1 px-2 focus:outline-none 
            focus:ring-2 focus:ring-gray-400 focus:border-transparent" v-model="uas">
        </div>  
        <div class="mt-4 text-center">
          <button class="bg-green-500 text-white font-semibold text-lg rounded focus:outline-none 
            py-2 px-3 hover:bg-green-600 shadow-lg" v-on:click="hitungHasil">Hasil</button>
        </div>
        <div class="flex flex-row mt-10">
          <label for="angka" class="font-base mr-4 font-bold text-xl mb-4 w-40
            py-1 flex items-center">Nilai Angka</label>
          <span class="text-center mt-1 
            border-2 rounded border-gray-300 h-9 w-60 mr-20 py-1 px-2">{{ angka }}</span>
        </div> 
        <div class="flex flex-row mt-4">
          <label for="huruf" class="font-base mr-4 font-bold text-xl mb-10 w-40
            py-1 flex items-center">Nilai Huruf</label>
          <span class="text-center mt-1 
            border-2 rounded border-gray-300 h-9 w-60 mr-20 py-1 px-2">{{ huruf }}</span>
        </div>    
      </div>
    </div>
  </div>  
</template>

<script>

export default {
  data(){
    return {
      kehadiran: 0,
      tugas: 0,
      mid: 0,
      uas: 0,
      angka: 0,
    }
  },
  computed: {
        huruf(){
          console.log("hitung huruf")
          var huruf = ""
          switch (true) {
            case (this.angka > 85):
              huruf = "A"
              break;
            case (this.angka > 75):
              huruf = "B"
              break;
            case (this.angka > 60):
              huruf = "C"
              break;
            case (this.angka > 50):
              huruf = "D"
              break;
            case (this.angka < 50):
              huruf = "E"
              break;
            default:  
              break;
          }

          return huruf
        }
      },

  methods:{
    hitungHasil(){
      console.log("hitung hasil huruf") 
      this.angka = (this.kehadiran * 0.1) + (this.tugas * 0.2) + (this.mid * 0.3) + (this.uas * 0.4)
    }
  }
}

</script>

<style scoped>

</style>