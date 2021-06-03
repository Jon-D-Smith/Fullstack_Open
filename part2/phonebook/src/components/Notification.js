const Notification = ({message, messageClass}) => {
    return ( 
        <div className={messageClass}>
            {message}
        </div>
     );
}
 
export default Notification;