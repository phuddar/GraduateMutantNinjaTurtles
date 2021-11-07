const SomeApp = {
  data() {
    return {
      refs: {},
      curID: [],
      games: [],
      current: {},
      refForm: {},
      check: "NO",
    };
  },
  computed: {},
  methods: {
    getRefData() {
      fetch("/api/refs/")
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log(responseJson);
          this.refs = responseJson;
          this.resetRefForm();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    selectRef(i) {
      this.curID = i;
      //console.log(this.curID);
      this.generateGame(this.curID);
    },
    generateGame() {
      fetch("/api/games/get.php")
        //fetch('/api/games/')
        .then((response) => response.json())
        .then((responseJson) => {
          this.games = responseJson;
          //   console.log(this.games);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    selectedRef(r) {
      this.refForm = r;
      this.check = "YES";
      //console.log(this.current);
    },
    postRef(evt) {
      if (this.check == "NO") {
        this.postNewRef(evt);
      } else {
        this.postEditRef(evt);
      }
    },
    postNewRef(evt) {
      this.refForm.Referee_ID = this.refs.length + 1;
      console.log("Posting!", this.refForm);

      fetch("api/refs/create.php", {
        method: "POST",
        body: JSON.stringify(this.refForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      })
        .then((next) => {
          this.getRefData();
        })
        .catch((err) => console.error(err));
    },
    postEditRef(evt) {
      console.log("hello");
      console.log(this.refForm);
      console.log("Posting!", this.refForm);

      fetch("api/refs/update.php", {
        method: "POST",
        body: JSON.stringify(this.refForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      })
        .then((next) => {
          this.getRefData();
        })
        .catch((err) => console.error(err));
    },
    deleteRef(r) {
        console.log("Deleting!", r);

        fetch("api/refs/delete.php", {
          method: "POST",
          body: JSON.stringify(r),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        })
          .then((next) => {
            this.getRefData();
          })
          .catch((err) => console.error(err));
    },
    resetRefForm() {
      this.refForm = {};
      this.check = "NO";
    }
  },
  created() {
    this.getRefData();
    this.generateGame();
  },
};

Vue.createApp(SomeApp).mount("#refereeGame");
