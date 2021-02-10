<template>
  <div class="main" >
    <patient title="Patients" />
  </div>
</template>

<script>
// @ is an alias to /src
import patient from "@/components/patient.vue";

export default {
  name: "Main",
  components: {
    patient
  }
};
</script>
