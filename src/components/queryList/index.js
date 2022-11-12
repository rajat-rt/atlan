import React from 'react';
import Form from 'react-bootstrap/Form';

const QueryList = ({ queryDataArr, onSelectDropdown }) => {
    return (
        <div className="query-list-wrapper">
            <Form.Select onChange={({target: {value}}) => onSelectDropdown(value)}>
                {queryDataArr.map((val,index) => <option key={index} value={val}>{val}</option>)}
            </Form.Select>
        </div>
    );
};

QueryList.defaultProps = {
    queryDataArr: ['No values']
}
export default QueryList;