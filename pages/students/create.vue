<script setup>
  const student = ref({
    name: "",
    course: "",
    email: "",
    phone: ""
  })

  // methods
  const saveStudent = () => {
    console.log("methods test")
  }
</script>

<style>

</style>

<template>
  <div>
    <h1>Student Create Page</h1>
    <div>
      <div>
        <h4>Add Student
          <NuxtLink to="/">戻る</NuxtLink>
        </h4>
      </div>

      <div>
        <form @submit.prevent="saveStudent">
          <div>
            <label>Name</label>
            {{ student.name }}
            <input type="text" v-model="student.name" />
          </div>
          <div>
            <label>Course</label>
            <input type="text" v-model="student.course" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" v-model="student.email" />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" v-model="student.phone" />
          </div>
          <div>
            <button type="submit">保存</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>