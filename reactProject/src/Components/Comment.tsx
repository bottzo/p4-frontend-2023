
type author = {avatarUrl: string, name:string};
type comment = {author:author, text:string};

export function Comment(props: comment) {
return (
<div className="Comment">
    <UserInfo user= {props.author}/>
    <div className="Comment-text"> {props.text} </div>
    {/*<div className="Comment-date"> {formatDate(props.date)} </div>*/}
 </div> )
};

//Don't need to write the return type JSX.Element. Why??
function Avatar(props: {user: author}) : JSX.Element
{
    return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
}

function UserInfo(props: {user: author}) : JSX.Element
{
    return (
    <div className="UserInfo">
        <Avatar user = {props.user}/>
        <div className="UserInfo-name"> {props.user.name} </div>
    </div>
    );
}