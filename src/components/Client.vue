<template>
  <div>
    <h1>{{ clientid }}</h1>
    <div class="client">
      <ul>
          <li v-for="message in messages">
            <label>{{ message.sender }}:</label> {{ message.text }}
          </li>
      </ul>
      <div class="msgbox">
        <input v-model="msg" placeholder="Enter a message, then hit [enter]" @keyup.enter="trySendMessage">
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			msg: ''
		}
	},
	computed: {
		messages: function() {
			return this.$store.getters.messages
		}
	},
	props: ['clientid'],
	methods: {
		trySendMessage() {
			this.$store.commit('addMessage', {
				text: this.msg,
				sender: this.clientid
			})
			this.resetMessage()
		},
		resetMessage() {
			this.msg = ''
		}
	}
}
</script>