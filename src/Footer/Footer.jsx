import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y bg-black text-white">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				
               <div className="flex justify-center items-center mx-auto"> <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/NWq52Sn/20231210-124227-0000.png" alt="" /> <span className="text-white font-bold ml-1">R <span className="text-pink-500">WEBER</span></span></div>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50">Services</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Front End Development</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Back End Development</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">JSON WEB TOKEN</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">React Webside</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Web Development</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50">Interest</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Next.js</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-50">Skills</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">MongoDB</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">React.js</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Node.js</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Express.js</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Java script</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Html 5</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-gray-50">Social media</div>
				<div className="flex text-2xl justify-start space-x-3">
				<a href="www.linkedin.com/in/robiul-islam-8a9215264">  <FaLinkedin /></a>
    <a href="https://www.facebook.com/rafiahmed.robiul.7">  <FaFacebookSquare /></a>
    <a href="https://www.instagram.com/robiulhuraira/">  <FaInstagramSquare /></a>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-400">2023 © All rights reserved By MD Robiul Islam </div>
</footer>
        </div>
    );
};

export default Footer;