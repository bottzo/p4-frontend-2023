
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


export function Avatar(props: {user: author})
{
    return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
}

export function UserInfo(props: {user: author})
{
    return (
    <div className="UserInfo">
        <Avatar user = {props.user}/>
        <div className="UserInfo-name"> {props.user.name} </div>
    </div>
    );
}