import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item">
        <Link href="/products">Our Products</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link href="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link href="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown> */}
      </li>
      <li className="menu-item">
      <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
        {/* <DropDown>
          <ul>
          <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us 1
              </Link>
            </li>
            <li>
              <Link href="/about2" onClick={() => setMobileToggle(false)}>
                About Us 2
              </Link>
            </li>            
            <li>
              <Link href="/chef" onClick={() => setMobileToggle(false)}>
              Chef
              </Link>
            </li>            
            <li>
              <Link href="/chef/chef-details" onClick={() => setMobileToggle(false)}>
              Chef Details 1
              </Link>
            </li> 
            <li>
              <Link href="/chef/chef-details2" onClick={() => setMobileToggle(false)}>
              Chef Details 2
              </Link>
            </li>                       
            <li>
              <Link href="/gallery" onClick={() => setMobileToggle(false)}>
              Gallery
              </Link>
            </li> 
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
              Services
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
              Service Details
              </Link>
            </li>                        
            <li>
              <Link href="/testimonial" onClick={() => setMobileToggle(false)}>
              Testimonials
              </Link>
            </li>  
            <li>
              <Link href="/reservation" onClick={() => setMobileToggle(false)}>
              Reservation
              </Link>
            </li>                      
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
                      
          </ul>
        </DropDown> */}
      </li>  

      <li className="menu-item">
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
        Contact Us
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/menu" onClick={() => setMobileToggle(false)}>
              Food Menu 1
              </Link>
            </li>          
            <li>
              <Link href="/menu2" onClick={() => setMobileToggle(false)}>
              Food Menu 2
              </Link>
            </li>
          </ul>
        </DropDown> */}
      </li> 
      
      <li className="menu-item">
        <Link href="/team" onClick={() => setMobileToggle(false)}>
          Our Team
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-standard" onClick={() => setMobileToggle(false)}>
                Blog Standard
              </Link>
            </li>            
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown> */}
      </li>

      <li className="menu-item">
        <Link href="/certifications" onClick={() => setMobileToggle(false)}>
          Certifications
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-standard" onClick={() => setMobileToggle(false)}>
                Blog Standard
              </Link>
            </li>            
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown> */}
      </li>
    </ul>
  );
}
