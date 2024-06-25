import React from 'react'
import '../Contact/Contact.css'
import mail from '../../assets/gmail.svg'
import call from '../../assets/call_icon.svg'
import fb from '../../assets/facebook.svg'
import ig from '../../assets/ig.svg'
import git from '../../assets/git.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1f2fe791-8895-46af-8169-14729db11195");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  
  
    return (
    <div id='contact' className='contact'>
        <div className="contactTitle">
            <h1>Contact Me !</h1>
        </div>
        <div className="contactSection">
            <div className="contactLeft">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take new projects, so feel free to send me a message about anyhing that you want me to work on. I will try my best to answer your message and accomodate your request</p>
                <div className="contactDetails">
                    <div className="contactDetail">
                        <img src={mail} alt="" /> <p>judeanzelmo@gmail.com</p>
                    </div>
                    <div className="contactDetail">
                        <img src={call} alt="" /> <p>+63 9932705194</p>
                    </div>
                    <div className="contactDetail1" onClick={() => window.open("https://www.facebook.com/jude.baybay/")}>
                        <img src={fb} alt="" /> <p>Jude Baybay</p>
                    </div>
                    <div className="contactDetail1" onClick={() => window.open("https://www.instagram.com/jowddd_?igsh=YW5iZGRpeWlpYjAw")}>
                        <img src={ig} alt="" /> <p>@jowddd_</p>
                    </div>
                    <div className="contactDetail1" onClick={() => window.open("https://www.instagram.com/jowddd_?igsh=YW5iZGRpeWlpYjAw")}>
                        <img src={git} alt="" /> <p>JudeBaybay</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contactRight'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name="email"  />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type="submit" className='contactSubmit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact