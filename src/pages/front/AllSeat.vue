<template>
  <q-page id="all-seat">
    <header id="header">
      <div class="text-white text-center text-h3 background">線上訂位</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row justify-center text-white">
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div class="q-mb-md text-h4">馬上訂位</div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p class="q-mb-xl text-h6">我們的酒吧提供線上訂位功能，讓您可以在網站或相關應用程式上輕鬆預訂您喜愛的座位。您只需選擇預定的日期、時間、人數和座位位置等相關資訊，填寫聯絡方式後即可完成預訂。我們的工作人員將為您保留預訂的座位，讓您在指定時間前來用餐或品嚐美食和飲品。線上訂位功能讓您避免在繁忙時段無法找到座位的困擾，更加輕鬆自在。</p>
            </div>
          </div>
        </div>
        <div class="row">
          <q-markup-table class="col-12">
            <thead class="text-center">
              <tr>
                <th>座位編號</th>
                <th>樓層</th>
                <th>分類</th>
                <th>座位上限</th>
                <th>訂位</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="seat in seats" :key="seat._id">
                <SeatTable v-bind="seat"></SeatTable>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import SeatTable from 'src/components/SeatTable.vue'

const seats = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/seats')
    seats.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

</script>

<style lang="scss">
</style>
