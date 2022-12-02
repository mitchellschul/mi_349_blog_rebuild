import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <div>
            <section id="newsletter">
                <form>
                    <label>
                        Sign up for my newsletter
                        <input type="text" />
                    </label>
                    <button>Subscribe</button>
                </form>
            </section>
        </div>
    )
}

export default Footer