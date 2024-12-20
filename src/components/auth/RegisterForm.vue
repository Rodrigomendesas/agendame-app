<script setup>
import {useForm, useField, useForm} from "vee-validate";
import {object, string} from "yup";
import { useAuthStore } from "@/store/auth";

const schema = object({
  first_name: string().required().label('Nome'),
  email: string().email().required().label('E-mail'),
  password: string().required().min(8).matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/).label('Senha'),
})

const feedbackMessage = ref('');

const submit = handleSubmit(async (values) => {
  const authStore = useAuthStore();
  await authStore.register(values.first_name, values.email, values.password)
  .catch(() => {
        feedbackMessage.value = "Este usuário já existe";
      });
})

const {handleSubmit, errors, isSubmitting} = useForm({
  validationSchema: schema
})

const {value: firstName} = useField('first_name');
const {value: email} = useField('email');
const {value: password} = useField('password');
</script>

<template>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">{{ feedbackMessage }}</v-alert>
  <v-form @submit.prevent="submit">
    <v-row class="d-flex mb-3">
        <v-col cols="12">
            <v-label v-model="firstName" :error-messages="errors.first_name" class="font-weight-bold mb-1">Nome</v-label>
            <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label v-model="email" :error-messages="errors.email" class="font-weight-bold mb-1">E-mail</v-label>
            <v-text-field variant="outlined" type="email" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label v-model="password" :error-messages="errors.password" class="font-weight-bold mb-1">Senha</v-label>
            <v-text-field variant="outlined" type="password"  hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12" >
            <v-btn type="submit" color="primary" size="large" block flat :loading="isSubmitting">Cadastrar</v-btn>
        </v-col>
    </v-row>
  </v-form>
</template>
