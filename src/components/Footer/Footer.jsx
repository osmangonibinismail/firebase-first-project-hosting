

const Footer = () => {
    return (
        <div className="border-x-4 border-t-4 border-indigo-500">
            <footer className="footer p-10 bg-stone-400 text-base-content">
                <nav>
                    <h6 className="footer-title text-black">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title  text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-black">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title text-black">Newsletter</h6>
                    <a className="link link-hover">Osman Goni</a>
                    <a className="link link-hover">01912093654</a>
                    <a className="link link-hover">mdosmangoni4314@gmail.com</a>
                    
                </form>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p className="text-xl font-bold">Copyright © 2024 - All right reserved by OAI Compani Limited</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;