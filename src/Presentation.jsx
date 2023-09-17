import * as React from "react";
import Reveal from 'reveal.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

export function Presentation() {

    React.useEffect(() => {
        let deck = new Reveal({
            // backgroundTransition: 'slide',
            // transition: 'slide'
            embedded: true,
         })
         deck.initialize();
         console.log('initialized fool')
    },[])

    return (
        <div className="reveal">
            <div className="slides">
                <section>
                    <section data-auto-animate>
                        <pre data-id="codee"><code data-trim data-line-numbers>
{`class Main {
    run() {

    }
}`}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                        <pre data-id="codee"><code data-trim data-line-numbers>
{`class Main {
    run() {
        const user = input()
    }
}`}
                        </code></pre>
                    </section>
                </section>
            </div>
        </div>
    );
}