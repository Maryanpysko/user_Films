<template>
  <div class="container">
    <button @click="Openwindow()">Chat</button>
    <div class="chat" v-if="Open">
      <div class="window">
        <ul>
          <p
            v-for="(message, index) in messages"
            :key="index"
            placeholder="Write a message"
          >{{message}}</p>
        </ul>
      </div>
      <label>Message</label>
      <input v-model="message" id="new-message" placeholder="Write a message" />
      <button @click="onSubmit">OK</button>
    </div>
  </div>
</template>



<script>
import axios from "axios";


export default {
  data() {
    return {
      Open: false,
      message: "",
      messages: []
    };
  },
  computed: {
      setFireBaseData() {
          axios
            .get("https://messages-vue.firebaseio.com/mes.json")
            .then(res => {console.log(res)
              const data = res.data;
              const mes = [];
              for (let key in data) {
                const me = data[key];
                me.id = key;
                mes.push(me.message);
              }

              this.messages = mes;
            });
      }
  },
  methods: {
    Openwindow() {
      this.Open = !this.Open;
    },
    onSubmit() {
      this.messages.push(this.message);
      axios
        .post("https://messages-vue.firebaseio.com/mes.json", {
          message: this.message
        })
        .then(res => {
            console.log(res)
          this.message = "";
          this.setFireBaseData
        })
    }
  },
  mounted() {
    this.setFireBaseData
  }
};
</script>
<style scoped>
.chat {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 15px;
  margin: 1px 0;
  height: 20%;
  width: 300px;
}
.window {
  padding: 2px;
  margin: 2px 0;
  background-color: #fffefe;
  height: 350px;
  width: 100%;
  overflow: scroll;
}
.window::-webkit-scrollbar {
  width: 12px;
}

.window::-webkit-scrollbar-thumb {
  border-width: 1px 1px 1px 2px;
  border-color: #777;
  background-color: #aaa;
}

.window::-webkit-scrollbar-thumb:hover {
  border-width: 1px 1px 1px 2px;
  border-color: #555;
  background-color: #777;
}
</style>