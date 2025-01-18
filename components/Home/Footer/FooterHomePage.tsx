import React from 'react'

export const FooterHomePage = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 ">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h2 className="font-cinzel text-xl text-white mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/policy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h2 className="font-cinzel text-xl text-white mb-4">Shop & Services</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/track-order" className="hover:text-white">
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="/wishlist" className="hover:text-white">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="/refunds" className="hover:text-white">
                    Return & Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/shippingdetails" className="hover:text-white">
                    Shipping Information
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h2 className="font-cinzel text-xl text-white mb-4">Connect With Us</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/social-media" className="hover:text-white">
                    Social Media Links
                  </a>
                </li>
                <li>
                  <a href="/newsletter" className="hover:text-white">
                    Newsletter Subscription
                  </a>
                </li>
                <li>
                <a className='hover:text-white' href="https://storyset.com/online">Online illustrations by Storyset</a>
                </li>
                
              </ul>
              <p className="mt-6 text-sm">
                &copy; {new Date().getFullYear()} Luxry. All Rights Reserved.
              </p>
              

            </div>
          </div>
        </div>
      </footer>
  )
}
