import React from 'react'
import './style.css'

const Blogs = () => {
    return (
        <div id='blog'>
            <article class="blog-post">
                <h3 class="blog-title">What's for lunch? I don't know</h3>
                <address class="author"> <a rel="author" href="http://mitchschul.com">Mitchell Schuldinger</a></address>
                <time datetime="2022-10-16" title="October 16, 2022">October 16, 2022</time>

                <p>
                    Today has been a super super busy day, and I don't have much time
                    or any food to make lunch. Yet again I am going to sift through
                    my pantries and see what I can make.
                </p>
                <p>
                    After a bit of searching I found:
                </p>
                <ul>
                    <li>1/2 lb ziplock bag of uncooked, seasoned, hamburger meat</li>
                    <li>A handfull of gluten free penne pasta noodles</li>
                    <li>A half jar of vodka sauce</li>
                    <li>A quarter of an onion</li>
                    <li>A few cloves of garlic</li>
                </ul>
                <p>
                    Yes, I know I had pasta for dinner last night, but I am broke
                    and this is what I got. Let's try to make something out of nothing.
                </p>
                <p>
                    To start I put the seasoned hamburger meat in a skillet and
                    started to cook it. While that was browning I brought a small
                    saucepan of water to a boil and added in the pasta. I let the
                    pasta cook for about 10 minutes, then drained it and set it aside.
                    I diced the onion and minced the garlic and added it to the skillet
                    with the meat. I let the meat and onion cook for about 5 minutes.
                    Then I added in the rest of the jar of the vodka sauce and let it
                    simmer for 5 more minutes. Lastly I added in the pasta, mixed
                    it around and put it into a bowl. Topped with with some parm and
                    called it a day.
                </p>

                <p>
                    <img src="penne.jpeg" alt="Bulbs of garlic" class="img-container" />
                    We'll call this dish, with the help of Duolingo,
                    <em>Penne alla vodka con carne</em>
                    This was actually way better than expected, I give this one a
                    rating of 7/10.

                </p>
                <table class="info-table">
                    <tr>
                        <th>Ingredients</th>
                        <th>Amount</th>
                        <th>Cook Time</th>
                    </tr>
                    <tr>
                        <td>Seasoned hamburger meat</td>
                        <td>1/2 pound</td>
                        <td>10 minutes</td>
                    </tr>
                    <tr>
                        <td>Penne pasta</td>
                        <td>About 1 cup, dry</td>
                        <td>8 minutes</td>
                    </tr>
                    <tr>
                        <td>Vodka sauce</td>
                        <td>About 1 cup</td>
                        <td>5 minutes</td>
                    </tr>
                    <tr>
                        <td>Onion</td>
                        <td>1/4 cup, sliced</td>
                        <td>5 minutes</td>
                    </tr>
                    <tr>
                        <td>Garlic</td>
                        <td>2 cloves, minced</td>
                        <td>5 minutes</td>
                    </tr>
                </table>
                <p>
                    This is not the actual dish I made. Thank Google for this one.
                </p>

                <p>
                    Time to clean up.
                </p>
            </article>

            <article class="blog-post">
                <h3 class="blog-title">Dinner for tonight</h3>
                <address class="author"> <a rel="author" href="http://mitchschul.com">Mitchell Schuldinger</a></address>
                <time datetime="2022-10-15" title="October 15, 2022">Ocober 15, 2022</time>

                <p>
                    I am not sure what exactly to write this blog post on, so I
                    decided to write this on the steps I took while cooking dinner
                    for myself and my girlfriend.
                </p>
                <p>
                    I know I don't have a lot in my kitchen, so I am going to try to
                    make something out of nothing.

                    After looking around what I have, I found:
                </p>
                <ul>
                    <li>Angel hair spaghetti</li>
                    <li>Frozen chicken strips</li>
                    <li>A jar of arrabiata sauce</li>
                    <li>A half a bulb of garlic</li>
                    <li>grated parmesan cheese</li>
                </ul>
                <p>
                    This is going to be a real easy dish tonight folks.
                    First thing first I put a few cups of water into a large pot
                    and brought it to a boil. While the water was getting to a boil
                    I threw a few chicken strips in the air fryer and set it to 360,
                    and set them to cook for 15 minutes. Once the water reached a boil
                    I added the angel hair spaghetti and let it cook for 8 minutes.
                    While the pasta was cooking I chopped up the garlic and threw it
                    in a skillet with some oil and added in the arrabiata sauce.
                </p>
                <p>
                    Once the pasta was done I drained it and added it to the skillet
                    with the sauce and garlic. Then I chopped the chicken strips into
                    this slices. Added the pasta, now mixed with the sauce, to a bowl
                    and added the chicken strips and some grated parmesan cheese.
                </p>
                <p>
                    <img src="./garlic.jpg" alt="Bulbs of garlic" class="img-container" />
                    And there you have it, <em>Arrabiata pasta with crispy chicken,</em>
                    was the meal for this evening. This was a real simple dish, I'll
                    rate it a solid 6/10.

                </p>

                <p>
                    Time to clean up.
                </p>
            </article>

        </div>
    )
}

export default Blogs