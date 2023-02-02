import React from 'react';
import { isArray, Tag } from "@vechaiui/react"

const TableComponent = ({ ...props }) => {
    const snakeCase = string => {
    return string.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
    };
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {props.headers.map((header, index) => (
                        <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {props.rows && isArray(props.rows) && props.rows.map((row, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            {props.headers.map((header, index) => (
                                <td key={index} className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {
                                                    (snakeCase(header) === 'status') ? (
                                                        (row[snakeCase(header)] === 'active') ? (
                                                            <Tag color="primary">Active</Tag>
                                                        ) : (
                                                            <Tag color="warning">Inactive</Tag>
                                                        )
                                                    ) : (
                                                        row[snakeCase(header)]
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default TableComponent;
