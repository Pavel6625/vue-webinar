// JavaScript Document
let app = new Vue({
  el: "#app",
  data: {
    author: "Pavel Shlepnev",
    bio: "JavaScript mentor",
    pic: "images/happy_with_guitar.JPG",
    tweets: [],
    newTweet: ""
  }
});

Vue.component("tweet", {
  data: function() {
    return {
      likes: 0
    }
  },
  props: ['tweet', 'author'],
  methods: {
    deleteTweet: function(tweet) {
      this.tweets.splice(this.tweets.indexOf(tweet), 1);
    }
  },
  template: `
  <div class="tweet mb-2">
    <h3>{{ author }}</h3>
    <p>{{ tweet }}</p>
    <div class="row">
      <div class="col"><button class="btn" v-bind:class="[{ 'btn-light': likes >= 5 }, { 'btn-dark': likes < 5 }]" v-on:click="likes++">Like {{ likes }}</button></div>
      <div class="col"><button class="btn btn-danger" v-on:click="deleteTweet(tweet)">Delete</button></div>
    </div>
  </div>
`,
});