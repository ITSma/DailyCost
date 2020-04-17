Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    date: '2020-04-16',
    year: '2020',
    month: '05'

  },
  bindDateChange: function(e) {
    console.log(e);
    this.setData({
        date: e.detail.value
    })
  }
})