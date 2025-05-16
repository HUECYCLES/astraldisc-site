class MyNav extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadow.innerHTML =`
            <style>
            nav {
                font-family: var(--main-font);
                text-align: center;
                margin-top: 10px;
            }
            
            .navbar {
                background-color: #413e55;
                overflow: hidden;
                max-height: 30px;
                padding-bottom: 20px;
            }

            nav ul {
                list-style-type: none;
            }

            nav li {
                display: inline;
                margin-right: 10px;
                margin-left: 25px;
                padding: 30px;
            }

            nav li a {
                text-decoration: none;
                letter-spacing: 1px;
                text-shadow: 3px 3px black;
                color: var(--link-default);
                font-size: 160%;
                cursor: var(--cursor-main)
            }

            nav li a:hover {
                color: var(--link-hover);
                cursor: var(--cursor-main)
            }
            nav li a:hover.break {
	            cursor: var(--cursor-break);
	            color: var(--link-hover);
	            font-family: var(--main-font);
            }
            </style>
            <div class="navbar">
                <nav>
                    <li><a href="../" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">HOME</a></li>
                    <li><a href="../team" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">TEAM</a></li>
                    <li><a href="../faq" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">FAQ</a></li>
                    <li><a href="../newsletters" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">NEWSLETTERS</a></li>
                </nav>
            </div>
        `;
    }
}

customElements.define("my-nav", MyNav);