import React from 'react';

const CcfItem = ({ ccf }) => {
	return (
		<tr>
			{/* <td>{ccf.ID}</td> */}
			<td>{ccf.cloudprovider}</td>
			<td>{ccf.accountid}</td>
			<td>{ccf.region}</td>
			{/* <td>{ccf.accountname}</td> */}
			<td>{ccf.recommendationtype}</td>
			<td>{ccf.recommendationdetail}</td>
			<td>{ccf.kilowatthoursavings}</td>
			{/* <td>{ccf.resourceid}</td> */}
			<td>{ccf.instancename}</td>
			<td>{ccf.co2esavings}</td>
			<td>{ccf.costsavings}</td>
		</tr>
	);
};

export default CcfItem;

/*
    "ID": "4",
    "cloudprovider": "AWS",
    "accountid": "663337792290",
    "accountname": "663337792290",
    "region": "us-east-2",
    "recommendationtype": "Modify",
    "recommendationdetail": "Modify instance with Resource ID: i-0db27b8a1a7800125. Update instance type m5.xlarge to m5.large",
    "kilowatthoursavings": "6.032477784000003",
    "resourceid": "i-0db27b8a1a7800125",
    "instancename": "",
    "co2esavings": "0.002655418298305608",
    "costsavings"

    */
