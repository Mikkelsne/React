import React, { Component } from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bob</td>
                        <td>It</td>
                    </tr>
                    <tr>
                        <td>Mark</td>
                        <td>That guy</td>
                    </tr>
                    <tr>
                        <td>Svend</td>
                        <td>Network</td>
                    </tr>
                    <tr>
                        <td>Benjamin</td>
                        <td>Not doing anything</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table