import React from 'react';

const PostDetails =(props)=>{
    console.log(props)
    //console.log(props.match.params.topic)
    console.log(props.location.search)
    console.log(props.location.search.split('='))
    console.log(props.location.search.split('=')[1])
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h2>{props.match.params.topic} Details Page</h2>
            </div>
            <div className="panel-body">
                <p>
                {props.match.params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <p>You are on page No {props.location.search.split('=')[1]}</p>
            </div>
        </div>
    )
}

export default PostDetails;