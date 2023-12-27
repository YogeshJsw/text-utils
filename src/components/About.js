

export default function About(props) {
    let myStyle={
        color: props.mode==='light'?'#042743':'black',
        backgroundColor: props.mode==='light'?'#faedcd':'#8d99ae'
    }
    let myNewStyle={
        color: props.mode==='light'?'black':'black',
        backgroundColor: props.mode==='light'?'#fefae0':'#bcb8b1'
    }


    return (
        <div className='container' >
                <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myNewStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myNewStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free word and character count tool that provides instant character & word count for a given text. This website is very useful if you want to write an essay with a limited number of word and character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myNewStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong >Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The TextUtils website works in any web browser such as Chrome, Safari, Firefox, Internet Explorer, etc.
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
