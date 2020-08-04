import React from 'react';
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById("root"));
export default() => {
    return function tick() {
        const element = (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
        ReactDOM.render( element, document.getElementById('root')
    );
    }
    setInterval(tick, 1000);
}
