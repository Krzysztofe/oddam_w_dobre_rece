import React from 'react';

const WhoWeHelpTable = () => {
    return (

        <table>
            <tbody>
            <tr>
                <td>
                    <p> {organisationType} {item.name}</p>
                    <p>cel {item.goals}</p>
                </td>
                <td>{item.stuff}</td>
            </tr>
            </tbody>
        </table>

    );
};

export default WhoWeHelpTable;