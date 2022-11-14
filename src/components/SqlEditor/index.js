import React, { useState, useEffect } from 'react';
import ResultTable from '../ResultTable'
import QueryList from '../queryList';
import Button from 'react-bootstrap/Button';
import './sqlEditor.scss';

import { getSqlData, saveQueryInCache, getHistoryOfQuery } from './sqlServices';

const SqlEditor = () => {
    
    const [queryVal, setQueryVal] = useState('');
    const [tableData, setTableData] = useState({ data: [], displayOrder: []});
    const [btnState, setBtnState] = useState(false);
    const [historyArr, setHistoryArr] = useState([]);
    
    const scriptExecuteHandler = async () => {
        let res = await getSqlData(queryVal);
        let historyArr = await saveQueryInCache(queryVal);
        setHistoryArr(historyArr);
        setTableData(res);
        setQueryVal('');
    }

    useEffect(() => {
        let hisArr = getHistoryOfQuery();
        if(hisArr.length > 0){
            setHistoryArr(hisArr);
        } else {
            setHistoryArr(['No values']);
        }
    }, []);


    const onChangeHandler = ({ target: { value }}) => {
        setQueryVal(value);
        setBtnState( value !== '' ? true: false )
    };
    
    const onSelectDropdownHandler = (value) => {
        setQueryVal(value);
        setBtnState( value !== '' ? true: false )
    }
    
    return (
        <div className='sql-editor-wrapper container'>
            <div className="row sql-editor">
                <div className='col col-lg-12'>
                    <textarea placeholder="Enter your SQL Queries here!!!" className='text-area' onChange={onChangeHandler} value={queryVal}></textarea>
                </div>
                <div className='col col-lg-4'>
                    <h4 className="history-label">History</h4>
                    <QueryList queryDataArr={historyArr} onSelectDropdown={onSelectDropdownHandler}></QueryList>
                </div>
                <div className='col col-lg-8'>
                    <Button disabled={!btnState} variant="primary" onClick={scriptExecuteHandler}>Execute</Button>
                </div>
            </div>
            
            <div className='row result-wrapper'>
                <div className='col col-lg-12'>
                    <h2 className='heading'>Result:</h2>
                </div>
                <ResultTable tableData={tableData}></ResultTable>
            </div>
        </div>
    );
};

export default SqlEditor;