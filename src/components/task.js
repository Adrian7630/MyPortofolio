import React from 'react';
import '../pages/css/projects.css';

function Task ({boxtype, tittle, info, boxinfo, tasklink}) 
{
    return (

        <div className = "workbench">
                
            <div className = "card-task">

                <div className = {boxtype}>
                    <h1>#{tittle}</h1>
                </div>

                <div className = {boxinfo}>
                    <p>{info}</p>
                    <hr/>
                    <a href = {tasklink} rel="noopener noreferrer" target="_blank">GITHUB</a>
                </div>

            </div>

        </div>

    );
};

export default Task;