<script setup>
/*Call Components*/
import { useMeStore } from '@/store/me';
const meStore = useMeStore();
</script>
<template>
  <div>
    Dashboard
    <pre>{{ meStore.user }}</pre>
  </div>
</template>
