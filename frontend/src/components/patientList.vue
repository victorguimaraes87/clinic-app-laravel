<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(patient,i) in patients" :key="i">
           <td>{{ patient.id}}</td>
           <td>{{ patient.name}}</td> 
           <td>{{ patient.occupation }}</td>  
        </tr>
       </tbody>
    </table>
  </div>    
</template>

<script>

import PatientService from "../service/patientService";

export default {
  names: "patients-list",
  data() {
    return {
      patients: [],
      currentPatient: null,
      currentIndex: -1,
      title: "",
      headers: [
        
      ],
    };
  },
  methods: {
    retrievePatients() {
      PatientService.getAll()
        .then(response => {
          this.patients = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePatients();
  }
};
</script>

