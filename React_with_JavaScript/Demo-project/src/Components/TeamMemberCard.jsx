import React from "react";

function MemberCard({name,role})
{
    return(
        <>
            <h3>Name: {name}</h3>
            <h3>Role: {role}</h3>
        </>
    )
}

export default MemberCard