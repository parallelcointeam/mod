var HistoryC = {
  template: vuedata.data.pages.history,
  props:{
    vbcd:Object,
    vicons:Object,
  },
  data () {
    return {
      transactions: blockchaindata.data.listalltransactions,
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 5,
      defaultOpenedDetails: [1]
    }
    }  
}


