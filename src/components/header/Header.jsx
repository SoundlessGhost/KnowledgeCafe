import './Header.css'
import profile from '../../images/shahed.jpg'
const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='headerTittle'>
                <h3>Knowledge World</h3>
            </div>
            <div className='headerSubTittle'>
                <a href="#">Main</a>
                <a href="#">Learn</a>
                <a href="#">Blogs</a>
                <a href="#">Login</a>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;