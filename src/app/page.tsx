import Header from './Header';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



export default function Home() {
  return (
    <>
    <div className="body">
    <Header/>
    <div>
      <div className='left'>
        <div>
        <h1 className='text-primary MAVE'>THE MAVERICK'S <br />
        WAY
        </h1>
        <h3 className='DES'>FROM THE TEAM BEHIND <br />
        ODISHA'S FASHEST NETWORK
        </h3>
        <button className='jnbtn'>Join Now!</button>
        <div className="container mx-5 ">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className='my-3 spantag '>
        <span className='mx-4 '>1500+ </span><p>Members</p>
        </div>
    </div>
    
        </div>
      </div>
    </div>
    </div>
    <div className='body2'>
      <div className="left2">

      <h5 className='mx-5'>KNOW</h5>
      <h2 className='mx-5 name'>Samar Pratap Nayak</h2>
      <p className='mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officiis. Suscipit repellendus consequuntur beatae commodi quis enim magni sint quibusdam ex exercitationem adipisci incidunt voluptatibus omnis eius saepe atque ipsa veniam, dolores quas fugit iusto! Non, officia maiores labore consequuntur inventore optio assumenda voluptas accusantium, architecto quo repellat quod aliquam!</p>
      <p className='mx-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus illo, perferendis amet, magni, quod corrupti libero blanditiis reprehenderit dolore a alias autem iure veniam placeat quasi. Eligendi quas explicabo debitis quod. Corrupti ipsa fugiat non? Vel ducimus earum totam temporibus!</p>
      <div className="icon mx-5">
        <a className='mx-2' href=""><FaInstagram size={25} color='black'/></a>
        <a className='mx-2' href=""><FaLinkedinIn size={25} color='black'/></a>
       <a className='mx-2' href=""><CiFacebook  size={25} color='black'/></a>
       <a className='mx-2' href=""><FaXTwitter size={25} color='black'/></a>
      </div>
      </div>

    </div>
    <div className='count'>
      <div className="container countdown">
      <div className='box'>
        <h1>12+</h1>
        <span>HOURS OF CONTENT</span>
      </div>
      <div className='box'>
        <h1>100+</h1>
        <span>HOURS OF CONTENT</span>
      </div>
      <div className='box'>
        <h1>2.5M+</h1>
        <span>HOURS OF CONTENT</span>
      </div>
      </div>
    </div>

    </>
  );
}
