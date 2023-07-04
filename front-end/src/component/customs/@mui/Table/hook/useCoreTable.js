const useCoreTable = (props) => {
   const { data, pageCount } = props;

   // console.log(props)

   return { dataTable: data !== undefined ? data : [], pageCount: pageCount || 1 };
};

export default useCoreTable;
