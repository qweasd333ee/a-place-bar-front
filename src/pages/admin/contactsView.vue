<template>
  <q-page id="admin-contacts-view">
    <section id="section01">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-white text-h3 text">回報管理</div>
          <div class="col-12">
            <q-markup-table>
              <thead class="text-center">
                <tr>
                  <th>姓名</th>
                  <th>信箱</th>
                  <th>日期</th>
                  <th>內容</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="contact in contacts" :key="contact._id">
                  <td>{{ contact.name }}</td>
                  <td>{{ contact.email }}</td>
                  <td>{{ new Date(contact.time).toLocaleDateString() }}</td>
                  <td>{{ contact.description }}</td>
                </tr>
                <tr v-if="contacts.length === 0">
                  <td class="text-center text-h6" colspan="4">沒有回報</td>
                </tr>
              </tbody>
            </q-markup-table>
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

const contacts = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/contacts/all')
    contacts.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
