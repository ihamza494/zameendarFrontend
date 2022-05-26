import { useHistory } from 'react-router-dom';


const Logout = () => {
    const history = useHistory();
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');

    history.push('/');
    window.location.reload(true);



}
export default Logout;