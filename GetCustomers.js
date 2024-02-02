import React, { useEffect, useState } from "react";

import Pagination from 'react-bootstrap/Pagination';

import DataTableComp from '../components/DataTable';
import Button from 'react-bootstrap/Button';




function GetCustomers() {

    const column = [
        {
            name: 'ID',
            selector: row => row.customerid,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.customername,
            sortable: true
        },

        {
            name: "Region",
            selector: row => row.region,
            sortable: true

        },
        {
            name: "Gender",
            selector: row => row.gender,
            sortable: true
        }
    ]

    const[Bsearch,setBsearch]=useState('');
    const [search, setsearch] = useState('');
    const [result, setresult] = useState([]);
    const [Data, setData] = useState([]);
    const [filter, setfilter] = useState([]);
    const [current, setCurrent] = useState(1);
    const [count, setCount] = useState();
    const [searchfield, setField] = useState('');


    const searchedData = async () => {
        try {
            const Response = await fetch(`http://localhost:8080/getsearchCustomers/${current}/5/${searchfield}`)
            const fetcheddata = await Response.json();
            setData(fetcheddata.content);
            setfilter(fetcheddata.content);
            setCount(fetcheddata.totalPages);
            console.log(fetcheddata.content);


        }
        catch (err) {
            console.log(err);
        }
    };

    const Split = () => {
        const ans = search.trim();
        const str = ans.split(" ");
        let temp = "";
        for (let num = 0; num < ((str.length)); num++) {
            if (str[num] === "") continue;
            else temp = temp + str[num] + " ";
        }
        temp = temp.trim();
        temp = temp.toLowerCase();
        return temp;
    }


    const paginationList = [];


    for (let num = 1; num < count; num++) {
        if (num === current) {
            paginationList.push
                (<Pagination.Item key={num} onClick={() => { setCurrent(num) }} active>{num}</Pagination.Item>)
        }
        else
            paginationList.push(<Pagination.Item key={num} onClick={() => { setCurrent(num) }} >{num}</Pagination.Item>)
    }


    const fetchdata = async () => {
        try {
            const Response = await fetch(`http://localhost:8080/getAllCustomerInPages/${current}/${5}`)
            const fetcheddata = await Response.json();
            setData(fetcheddata.content);
            setfilter(fetcheddata.content);
            setCount(fetcheddata.totalPages);
        }
        catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        if (!search) fetchdata();
        else searchedData();
        const subStr = Split();
        setField(subStr);
        
    }, [search, current]);
    ///////////////FRONTEND-SEARCH/////////////// 
    const handlefrontendsearch = (e) => {
        setsearch(e.target.value);
        setresult(search ? Data.filter((item) => {
            return item.customername.toLowerCase().includes(search.toLowerCase())
        }) : Data);
        setfilter(result);
    }
    /////////////

    const handledbsearch = () => {
        setsearch(Bsearch);
        
        if (!search) fetchdata();
        else searchedData();
    }

    const handleMysubmit = (e) => {
        setCurrent(current + 1);
       
    }
    const handlePresubmit = (e) => {
        setCurrent(current - 1);
       
    }


    const handleFirstsubmit = () => {
        setCurrent(1);
    }
    const handleLastsubmit = () => {
        setCurrent(count - 1);
    }
  
    const handleOgSearch=(e)=>{
        setBsearch(e.target.value);
    }

    return (
        <div className="container mt-5">
            <h1>Customer details</h1>
            <div className="text-end">
                <br></br>
                {/* /* onChange={(handlechange) for front-end sesrch}  disabled={search?false:true}*/}
                <input type="text" className="w-form-control" value={Bsearch} onChange={(e)=> setBsearch(e.target.value)} ></input>
                <br></br>
                
                <Button variant="primary" size="sm" onClick={handledbsearch} disabled= {Bsearch?false:true}>
                    search
                </Button>{' '}
            </div>
            <br></br>
            <DataTableComp
                data={filter}
            />
            <Pagination className="text-end">
                <Pagination.First onClick={handleFirstsubmit} />
                <Pagination.Prev onClick={handlePresubmit} />
                {paginationList}
                <Pagination.Next onClick={handleMysubmit} />
                <Pagination.Last onClick={handleLastsubmit} />
            </Pagination>
        </div>
    );
}

export default GetCustomers;


















{/* <DataTable className="ScrollbarsCustom native trackYVisible trackXVisible"
                    customStyles={tableCustomStyles}
                        columns={column}
                        data={filter}
                        fixedHeader
                        // pagination
                    /> */}




{/* <Pagination.Item>{1}</Pagination.Item>
     <paginationPage
     cnt={count}></paginationPage>

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item >{5}</Pagination.Item> */}





//   useEffect(() => {
//     const fetchdata = async () => {

//         try {
//             if (!search) {
//                 const Response = await fetch(`http://localhost:8080/getAllCustomerInPages/${current}/5`)
//                 const fetcheddata = await Response.json();
//                 setData(fetcheddata.content);
//                 setfilter(fetcheddata.content);
//                 setCount(fetchdata.totalPages);
//             }
//             else {
//                 const Response = await fetch(`http://localhost:8080/getsearchCustomers/${current}/5/${search}`)
//                 const fetcheddata = await Response.json();
//                 setData(fetcheddata.content);
//                 setfilter(fetcheddata.content);
//                 setCount(fetchdata.totalElements);
//             }

//         } catch (err) {

//             console.log(err);

//         }
//     };
//     fetchdata();

// }, [search, current])*/