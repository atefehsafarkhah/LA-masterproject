import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button'
import './Footer.css';
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    join the  newsletter to receive our best new cources
                </p>
                <p className='footer-subscription-text'>
                    You can unsubcribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>

                <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>
              <section className='social-media'>
                  <div className='social-media-wrap'>
                      <div className='footer-logo'>
                          <Link  to='/' className='social-logo'>
                              WD School <i className='fab fa-typo3' />
                          </Link>
                      </div>
                      <small className='website-rights'>WD School  2021  </small>
                      <div className='social-icons'>
                          <Link 
                          class='social-icon-link facebook'
                          to='/'
                          target='_blank'
                          aria-label='facebook'
                          >
                              <i class='fab fa-facebook-f' />
                          </Link>
                         

                          <Link 
                          class='social-icon-link instagram'
                          to='/'
                          target='_blank'
                          aria-label='instagram'
                          >
                              <i class='fab fa-instagram' />
                          </Link>

                          <Link 
                          class='social-icon-link twitter'
                          to='/'
                          target='_blank'
                          aria-label='twitter'
                          >
                              <i class='fab fa-twitter' />
                          </Link>

                          <Link 
                          class='social-icon-link linkedin'
                          to='/'
                          target='_blank'
                          aria-label='linkedin'
                          >
                              <i class='fab fa-linkedin' />
                          </Link>
                         
                      </div>
                       </div>
                      </section>
            </div>
        
    );
    }

export default Footer
