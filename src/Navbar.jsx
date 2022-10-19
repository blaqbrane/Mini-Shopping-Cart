const Navbar = ({Total_item, price}) => {
    return ( 
        <nav>
            <h1>ITEMS:{Total_item}</h1>
            <h2>Price: ${price}</h2>
        </nav>

     );
}
export default Navbar;