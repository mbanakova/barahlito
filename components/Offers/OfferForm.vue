<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !title.isValid }">
      <label for="title">title</label>
      <input
        type="text"
        name=""
        id="title"
        v-model.trim="title.val"
        @blur="clearValidity('title')"
      />
      <p v-if="!title.isValid">title must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !thumbnail.isValid }">
      <label for="thumbnail">thumbnail</label>
      <input
        type="text"
        name=""
        id="thumbnail"
        v-model.trim="thumbnail.val"
        @blur="clearValidity('thumbnail')"
      />
      <p v-if="!thumbnail.isValid">thumbnail must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      />
      <p v-if="!description.isValid">description must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !hourlyRate.isValid }">
      <label for="hourlyRate">hourlyRate</label>
      <input
        type="number"
        name=""
        id="hourlyRate"
        v-model.number="hourlyRate.val"
        @blur="clearValidity('hourlyRate')"
      />
      <p v-if="!hourlyRate.isValid">hourlyRate must not be negative</p>
    </div>

    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>matches</h3>
      <div>
        <input
          type="checkbox"
          id="apparel"
          value="apparel"
          v-model="areas.val"
        />
        <label for="apparel">apparel</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="home"
          value="home"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="home">home</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="toys"
          value="toys"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="toys">toys</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="sport"
          value="sport"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="sport">sport</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="books"
          value="books"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="books">books</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="kitchen"
          value="kitchen"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="kitchen">kitchen</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="hobby"
          value="hobby"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="hobby">hobby</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="auto"
          value="auto"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="auto">auto</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="ussr"
          value="ussr"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="ussr">ussr</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="plants"
          value="plants"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="plants">plants</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="pets"
          value="pets"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="pets">pets</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="leisure"
          value="leisure"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="leisure">leisure</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="others"
          value="others"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="others">others</label>
      </div>
      <p v-if="!areas.isValid">pick at least one filter</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors</p>
    <base-button mode="standard">Publish</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      date: "",
      title: {
        val: "",
        isValid: true,
      },
      thumbnail: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      hourlyRate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.title.val === "") {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.thumbnail.val === "") {
        this.thumbnail.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.hourlyRate.val || this.hourlyRate.val < 0) {
        this.hourlyRate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        date: new Date().toLocaleDateString(),
        title: this.title.val,
        thumbnail: this.thumbnail.val,
        description: this.description.val,
        hourlyRate: this.hourlyRate.val,
        areas: this.areas.val,
      };
      console.log(formData);
      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  resize: vertical;
}

input:focus,
textarea:focus {
  background-color: #ebf6ff;
  outline: none;
  border-color: #275a81;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #275a81 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: #f74d4d;
}

.invalid input,
.invalid textarea {
  border: 1px solid #f74d4d;
}
</style>
