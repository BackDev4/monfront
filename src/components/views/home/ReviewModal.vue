<template>
  <div v-if="show" class="modal-container">
    <div class="modal-content">
      <form @submit.prevent="submitForm">
        <button @click="closeModal" class="close-button">&times;</button>
        <label for="name">Ваше имя</label>
        <input type="text" name="name" required v-model="formData.name">
        <label for="content">Сообщение</label>
        <textarea name="content" required v-model="formData.content"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import {postReviews} from '@/api';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, {emit}) {
    const formData = ref({
      name: '',
      content: '',
    });
    const submitForm = async () => {
      try {
        await postReviews(formData.value);
        Swal.fire({
          icon: "success",
          title: "Успешно",
          text: "Отзыв успешно добавлен",
        });
        closeModal();
      } catch (error) {
        closeModal()
        Swal.fire({
          icon: "error",
          title: "Ошибка",
          text: "Ошибка: " + error,
        });
      }
    };

    const closeModal = () => {
      emit('close');
    };

    onMounted(() => {
      formData.value = {name: '', content: ''};
    });

    return {formData, submitForm, closeModal};
  },
};
</script>
<style scoped>

.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1050;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 20px;
  width: 300px;
  position: relative;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  color: #495057;
}

input,
textarea {
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

button {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #007bff;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button {
  position: absolute; /* Corrected: Set position to absolute */
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
}

.close-button:hover {
  color: #000;
}
</style>
