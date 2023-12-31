// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
    {/* <!-- section 1 --> */}
    <section class="section-1">
        <nav class="navbar">
            <div class="nav-link"><img src="../public/images/Logo.svg" alt=""/></div>
            <div class="nav-group-1">
                <div class="nav-link nav-blue">My URLs</div>
                <div class="nav-link nav-dropdown"><span class="nav-dropdown-text">Features</span><img src="./images/chevron-down.svg" alt="chevron-down-icon" class="nav-dropdown"/></div>
                <div class="nav-link">Pricing</div>
                <div class="nav-link">Analystic</div>
                <div class="nav-link">FAQs</div>
            </div>
            <div class="nav-group-2">
                <div class="nav-link nav-blue">Log in</div>
                <div class="nav-link nav-button">Try for free</div>
            </div>
        </nav>
    
        <div class="hero">
            Optimize Your Online Experience With Our Advanced <span>URL Shortening</span> Solution
            <img src="./images/Vector 3.svg" alt="vector"/>
            <p class="hero-body">Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
            <div class="hero-links">
                <div class="hero-button">Sign Up</div>
                <p>Learn more</p>
            </div>
        </div>
    
        <div class="sub-hero">
            <div>
                <img class="sub-hero-image" src="./images/Frame 1000001716.svg" alt="chain-link"/>
                <p class="sub-hero-text">Seamlessly transform your long URLs into concise<br/>and <b>shareable</b> links with just few clicks.</p>
            </div>
        </div>

        <div class="ellipse"></div>
    </section>

    {/* <!-- section 2 --> */}
    <section class="section-2">
        <div class="stats-bar">
            <div class="stats-text">One Stop.<br/>Four <span class="stats-text-blue">Possibilities.</span></div>
            <div class="stats">
                <div><span class="stats-bold">3M</span><br/>Active users</div>
                <div><span class="stats-bold">60M</span><br/>Links & QR<br/>codes created</div>
                <div><span class="stats-bold">1B</span><br/>Clicked & Scanned<br/>connections</div>
                <div><span class="stats-bold">300K</span><br/>App Integrations</div>
            </div>
          </div>

        <div class="sub-section-2">
            <div class="sub-sub-section-2-1">
                <header>Why choose <span class="stats-text-blue">Scissors</span></header>
                <p>Scissors is the hub of everything that has to do with your link management. We shirten your URLs, allow you creating custom ones for your personal business , event usage. Our swift QR code creation, management and usage tracking with advanced analytics for all of these is second to none.</p>
            </div>
            <div class="sub-sub-section-2-2">
                <div>
                    <div class="icons-box"><img src="./images/link-2.png" alt="link"/></div>
                    <header>URL Shortening</header>
                    <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                </div>
                <div>
                    <div class="icons-box"><img src="./images/edit.png" alt="edit"/></div>
                    <header>Custom URLs</header>
                    <p>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                </div>
                <div>
                    <div class="icons-box"><img src="./images/grid.png" alt="grid"/></div>
                    <header>QR Codes</header>
                    <p>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                </div>
                <div>
                    <div class="icons-box"><img src="./images/activity.png" alt="activity"/></div>
                    <header>Data Analytics</header>
                    <p>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                </div>
            </div>
        </div>

    </section>

    {/* <!-- section 3 --> */}
    <section class="section-3">
        <header class="section-3-header">
            <header>A <span class="stats-text-blue">price perfect</span> for your needs.</header>
            <p>From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p>
        </header>
        <div class="cards">
            <div class="small-card">
                <header>Basic</header>
                <section>
                    <header>Free</header>
                    <p>Free plan for all users</p>
                    <ul>
                        <li>Unlimited URL Shortening</li>
                        <li>Basic Link Analytics</li>
                        <li>Customizable Short Links</li>
                        <li>Standard Support</li>
                        <li>Ad-supported</li>
                    </ul>
                </section>
            </div>
            <div class="large-card">
                <header>Professional</header>
                <section>
                    <header>$15/month</header>
                    <p>Ideal for business creators</p>
                    <ul>
                        <li>Enhanced Link Analysis</li>
                        <li>Custom Branded Domains</li>
                        <li>Advanced Link Customization</li>
                        <li>Priority Support</li>
                        <li>Ad-free Experience</li>
                    </ul>
                </section>
            </div>
            <div class="small-card">
                <header>Teams</header>
                <section>
                    <header>$25/month</header>
                    <p>Share with up to 10 users</p>
                    <ul>
                        <li>Team Collaboration</li>
                        <li>User Roles and Permissions</li>
                        <li>Enhanced Security</li>
                        <li>API Access</li>
                        <li>Dedicated Account Manager</li>
                    </ul>
                </section>
            </div>
        </div>
        <footer>
            <div class="white-button">Get Custom Pricing</div>
            <div class="blue-button">Select Pricing</div>
        </footer>
    </section>

    {/* <!-- section 4 --> */}
    <section class="section-4">
        <form>
            <input type="text" placeholder="Paste URL here..."/>
            <p>
                <select name="domain" id="domain" placeholder="Choose Domain">
                    <option value="">Choose Domain</option>
                </select>
                <input type="text" placeholder="Type Alias here"/>
            </p>
            <div>Trim URL</div>
            <footer>
                By clicking TrimURL, I agree to the <span class="Gilroy-Bold">Terms of Service, Privacy Policy</span> and Use of Cookies.
            </footer>
        </form>
    </section>

    {/* <!-- section 5 --> */}
    <section class="section-5">
        <div>
            <header>
                FAQs
            </header>
            <div>
                <ul>
                    <li><p class="list-header"><span>How does URL shortening work?</span><img src="./images/minus.png" alt="minus"/></p>
                    <p class="list-body">URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.</p></li>
                    <li class="list-item"><span>it necessary to create an account to use the URL shortening service?</span><img src="./images/plus.png" alt="plus"/></li>
                    <li class="list-item"><span>Are the shortened links permanent? Will they expire?</span><img src="./images/plus.png" alt="plus"/></li>
                    <li class="list-item"><span>Are there any limitations on the number of URLs I can shorten?</span><img src="./images/plus.png" alt="plus"/></li>
                    <li class="list-item"><span>Can I customize the shortened URLs to reflect my brand or content?</span><img src="./images/plus.png" alt="plus"/></li>
                    <li class="list-item"><span>Can I track the performance of my shortened URLs?</span><img src="./images/plus.png" alt="plus"/></li>
                    <li class="list-item"><span>How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?</span><img src="./images/plus.png" alt="plus"/></li>
                    <li class="list-item"><span>What is a QR code and what can it do?</span><img src="./images/plus.png" alt="plus"/></li>
                    <li class="list-item"><span>Is there an API available for integrating the URL shortening service into my own applications or websites?</span><img src="./images/plus.png" alt="plus"/></li>
                </ul>

            </div>
        </div>
    </section>

    {/* <!-- section 6 --> */}
    <section class="section-6">
        <div>
            <p>Revolutionizing Link Optimization</p>
            <div>Get Started</div>
        </div>
    </section>
</div>
  );
}

export default App;
