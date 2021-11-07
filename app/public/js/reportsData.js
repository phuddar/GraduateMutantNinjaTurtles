const SomeApp = {
    data() {
      return {
          reportForm1: {},
          newhref: '',
          today: null,
          date: null

      }
    },
    computed: {},
    methods: {
        getReport1() {
            //reference for passing multiple parameters
            //https://stackoverflow.com/questions/13102489/passing-multiple-variables-to-another-page-in-url
            console.log(this.reportForm1);
            this.newhref = `api/report/?format=csv&Game_Date1=${this.reportForm1.Game_Date1}&Game_Date2=${this.reportForm1.Game_Date2}`;
            console.log(this.newhref);
            document.getElementById("download").style.visibility = null;

    },
        hideButtons() {
            document.getElementById("download").style.visibility = 'hidden';
            document.getElementById("download1").style.visibility = 'hidden';
        },
        getReport2(){
            //reference for pulling today's date
            //https://stackoverflow.com/questions/25445377/how-to-get-current-date-without-time/25445633
            this.today = new Date();
            this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
            this.newhref = `api/report2/?format=csv&Game_Date1=${this.date}`;
            console.log(this.newhref);
        }
    },
    created() {
        //this.hideButtons();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#reportApp');