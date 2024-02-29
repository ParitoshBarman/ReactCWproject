import React from 'react'
import Searchsystem from './Searchsystem'

const ShortcurtTool = () => {
    return (
        <div className='shortcurtTool'>
            <Searchsystem/>
            
            <div>
                <a href="/account">
                <svg viewBox="0 0 64 64">
                <g fill="none" stroke="#000" stroke-width="2">
                    <path d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"></path></g></svg>
            </a>
            </div>
            <div><a href="/account/login?wk-redirect=%7B%22path%22%3A%22%2Fpages%2Fwishlist%22%7D" title="View Wishlist" >
                <div><svg width="97%" height="97%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g fill="none" stroke="#000" stroke-width="1">
                    <path vector-effect="non-scaling-stroke" d="M32.012,59.616c-1.119-.521-2.365-1.141-3.707-1.859a79.264,79.264,0,0,1-11.694-7.614C6.316,42,.266,32.6.254,22.076,0.244,12.358,7.871,4.506,17.232,4.5a16.661,16.661,0,0,1,11.891,4.99l2.837,2.889,2.827-2.9a16.639,16.639,0,0,1,11.874-5.02h0c9.368-.01,17.008,7.815,17.021,17.539,0.015,10.533-6.022,19.96-16.312,28.128a79.314,79.314,0,0,1-11.661,7.63C34.369,58.472,33.127,59.094,32.012,59.616Z"></path></g>
                </svg></div>

            </a>
            </div>
            <div><a href="/cart" >
                <span class="cart-link">
                    <svg viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="2"><path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path><path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path></g></svg>
                </span>
            </a>
            </div>
        </div>
    )
}

export default ShortcurtTool
