import Footer_card from "./Footer_card";

function Footer(){

    return(
    <>
        <div className="footer-card">
            <div className="footer-top-content">
                <Footer_card heading="Email Us 24/7" para="rohitrajbharti91@gmail.com"/>
                <Footer_card heading="Have Questions" para="Contact Us"/>
                <Footer_card heading="Call Us 24/7" para="+91 8969718899"/>
                <Footer_card heading="Opening Hours" para="Mon-Sat: 10 AM -6 PM"/>
            </div>
            <div className="About-Us">
                <div className="Conatact-Us">
                    <p>kjbalioiadoa</p>
                </div>
                <div className="Quick-links">

                </div>
            </div>
        </div>
    </>);
}

export default Footer;