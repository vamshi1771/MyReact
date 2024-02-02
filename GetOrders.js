import React, { useEffect ,useState } from "react";
import DataTable from "react-data-table-component";


function GetOrders(){

    const column=[ 
        {
            name:'OrderId',
            selector:row=>row.orderid,
            sortable:true
        },
        {
            name:'OrderName',
            selector:row=>row.ordername,
            sortable:true
        },
        
        {
            name:"Price",
            selector:row=>row.price,
            sortable:true
            
        },
        {
            name:"CustId",
            selector:row=>row.cust_id,
            sortable:true
        }
    ]

    const [search,setsearch] =useState('');
const[result,setresult]=useState([]);
 const [Data,setData] =useState([]);
 const [filter,setfilter] =useState([]);


    useEffect(()=>{
       const fetchdata= async ()=>{
       
        try{
            // getAllCustomerInPages/${1}/${5}
            const Response= await fetch ("http://localhost:8080/getAllOrders");
            const fetcheddata = await Response.json();
                console.log(fetcheddata);
            setData(fetcheddata);
            setfilter(fetcheddata);
            setresult(fetchdata);
        }catch(err){
            
            console.log(err);
            
        } 
    };
    fetchdata();
      
    },[]);


    const handlechange=(e)=>{
        // setsearch(e.target.value);
        // result = search ? Data.filter((item)=>{
        //    return item.customername.toLowerCase().includes(search.toLowerCase())
        // }):Data;
        // setfilter(result);
    }

    return(
        <div className="container mt-5">
        <h1>Customer details</h1>
        <div className="text-end">
            <label >Search</label>
            <br></br>
        <input type="text" className="w-form-control" value={search} onChange={(handlechange) }></input>
        </div>
        <br></br>
             
        <DataTable
            columns={column}
            data={filter}
            fixedHeader
            pagination
        />
</div>
    );
}
export default GetOrders;