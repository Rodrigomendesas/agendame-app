<script setup>
import Logo from '@/layouts/full/logo/Logo.vue';
import { useAuthStore } from '@/store/auth';
import { useRoute } from 'vue-router';

const authStore = useAuthStore();
const route = useRoute();
const token = route.params.token;
const loading = ref(true);
const status = ref(null);
const feedbackMessage = ref(null);

authStore.verifyEmail(token)
.then(() => {
  status.value = 'success';
  feedbackMessage.value = 'Seu e-mail foi verificado com sucesso';
})
.catch(() => {
  status.value = 'error';
  feedbackMessage.value = 'Ocorreu um erro ao verificar seu e-mail';
})
.finally(() => {
  loading.value = false;
});

</script>
<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4">
                                <Logo />
                            </div>
                            <v-alert
                              :color="status"
                              class="mb-2">
                              {{ feedbackMessage }}
                            </v-alert>
                            <div class="text-center">
                            <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
