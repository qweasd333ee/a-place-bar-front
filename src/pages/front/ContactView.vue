<template>
  <q-page id="contact-view">
    <header id="header" v-if="$q.screen.gt.sm">
      <div class="text-white text-center text-h3 background">聯絡我們</div>
    </header>
    <section id="section01">
      <div class="container">
        <div class="row justify-center">
          <div class="col-12 col-md-8 col-lg-6 text-center">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div class="text-h4 q-mb-lg">聯絡資訊</div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p class="text-h6 q-mb-xl">如果您有任何意見或建議，歡迎您隨時與我們聯繫，我們會認真聆聽您的想法，為您提供更好的服務。謝謝您的支持，我們期待著您的光臨！</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 order-last q-px-lg info">
            <div class="q-mb-sm text-h6">聯絡信箱</div>
            <div class="q-mb-xl text-body1">a.place.greenisland@gmail.com</div>
            <div class="q-mb-sm text-h6">聯絡電話</div>
            <div class="q-mb-xl text-body1">0965-603-279</div>
            <div class="q-mb-sm text-h6">聯絡地址</div>
            <div class="q-mb-xl text-body1">951台東縣綠島鄉52之1號</div>
            <div class="q-mb-sm text-h6">營業時間</div>
            <div class="q-mb-xl text-body1">週一至週日，晚上19:30至01:00</div>
            <!-- <div class="q-mb-lg">
            <a href="/">
              <q-icon class="q-mr-lg" name="mdi-twitter" />
            </a>
            <a href="https://www.facebook.com/a.place.2020/">
              <q-icon class="q-mr-lg" name="mdi-facebook" />
            </a>
            <a href="https://www.instagram.com/a.place_bar/">
              <q-icon class="q-mr-lg" name="mdi-instagram" />
            </a>
          </div> -->
          </div>
          <div class="col-md-9 q-px-lg">
            <q-form
              @submit="submit"
              class="q-gutter-md"
            >
              <div class="q-mb-lg">
                <q-input v-model="form.name" filled type="text" label="姓名" :rules="rules.name" />
              </div>
              <div class="q-mb-lg">
                <q-input v-model="form.email" filled type="text" label="信箱" :rules="rules.email" />
              </div>
              <div class="q-mb-lg">
                <q-input v-model="form.description" filled rows="11" type="textarea" label="內容" :rules="rules.description" />
              </div>
              <div>
                <q-btn label="送出" type="submit" color="warning"/>
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import Swal from 'sweetalert2'

const rules = {
  name: [
    v => !!v || '欄位必填'
  ],
  email: [
    v => !!v || '欄位必填'
  ],
  description: [
    v => !!v || '欄位必填'
  ]
}

const contacts = reactive([])
const form = reactive({
  _id: '',
  name: '',
  email: '',
  description: '',
  loading: false
})
const submit = async () => {
  form.loading = true
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('age', form.age)
  fd.append('email', form.email)
  fd.append('description', form.description)
  try {
    const { data } = await apiAuth.post('/contacts', fd)
    contacts.push(data.result)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '感謝您寶貴的意見，將會由專人以郵件回覆您，請耐心等候！'
    })
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
  form.loading = false
}
</script>
