import Image from 'next/image';
import logo from "@/assets/logo-01.png";
import shado from "@/assets/shadow nav-01.png";

const TitleBar = ({title}) => {
    return (
        <div className='tect'>
           {title}
        </div>
    );
};

export default TitleBar;